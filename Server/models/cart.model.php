<?php
    include_once "db.model.php";
    class CartModel{
        private $db;
        private $carttable;
        public function __construct(){
            $this->db = new DB();
            $this->carttable = $this->db->connect();
        }
        private function DecodeUsername($username){
            $sql = "SELECT username, ID  FROM user";
            $result = $this->carttable->query($sql);
            $userID ;
            while($row = $result->fetch_assoc()) {
                $hashusername = hash('sha256',$row['username']);
                if($hashusername == $username){
                    $userID = $row['ID'];
                    break;
                }
            }
            return $userID;
        }
        public function getCart($username){
            $userID = $this->DecodeUsername($username);
            $sql = "SELECT `product`.`thumbnail`, `product`.`name`, `quantity`, `product`.`price`, `total_cash`,`cart`.`product_id`	 FROM `cart` INNER JOIN `product` WHERE  `cart`.`user_id` = $userID AND `product`.`id` = `cart`.`product_id`";
            $result = $this->carttable->query($sql);
            $list = [];
            while($row = $result->fetch_assoc()) {
                //return list json
                $list[] = [
                    'id' => $row['product_id'],
                    'image' => $row['thumbnail'],
                    'name' => $row['name'],
                    'quantity' => $row['quantity'],
                    'price' => $row['price'],
                    'total' => $row['total_cash']
                ];
                
            }
            echo json_encode($list);

          
        }
        public function addToCart($username, $productID){
            $userID = $this->DecodeUsername($username);
            $sql_check = "SELECT * FROM `cart` WHERE `user_id` = $userID AND `product_id` = $productID";
            $result = $this->carttable->query($sql_check);
            if($result->num_rows > 0){
                //update quantity
                $sql_update = "UPDATE `cart` SET `quantity` = `quantity` + 1 WHERE `user_id` = $userID AND `product_id` = $productID AND `status` = 'chưa thanh toán'";
                $this->carttable->query($sql_update);
                echo "Add successfully";
            }else{
                //insert new order
                $price = 0;
                $sql_price = "SELECT `price` FROM `product` WHERE `id` = $productID";
                $result = $this->carttable->query($sql_price);
                while($row = $result->fetch_assoc()) {
                    $price = $row['price'];
                }
                $sql = "INSERT INTO `cart`(`ID`, `order_date`, `status`,`total_cash`, `user_id`, `product_id`, `quantity`) VALUES (NULL, CURRENT_TIMESTAMP,'chưa thanh toán','$price', '$userID', '$productID', 1)";
                $this->carttable->query($sql);
                echo "Add successfully";
            }
        }
        public function delCart($username, $productID){
            
        }
        public function editItem($username, $productID, $num){
            $userID = $this->DecodeUsername($username);
            $sql_check = "SELECT * FROM `cart` WHERE `user_id` = $userID AND `product_id` = $productID";
            $result = $this->carttable->query($sql_check);
            //update quantity
            $sql_update = "UPDATE `cart` SET `quantity` = `quantity` + $num WHERE `user_id` = $userID AND `product_id` = $productID AND `status` = 'chưa thanh toán'";
            $this->carttable->query($sql_update);
            echo "update successfully";
        }

    }
?>