<?php
    include_once "db.model.php";
    class OrdersModel{
        private $db;
        private $orderstable;
        public function __construct(){
            $this->db = new DB();
            $this->orderstable = $this->db->connect();
        }
        private function DecodeUsername($username){
            $sql = "SELECT username, ID  FROM user";
            $result = $this->orderstable->query($sql);
            $userID ;
            while($row = $result->fetch_assoc()) {
                $hashusername = hash('sha256',$row['username']);
                if($hashusername == $username){
                    $userID = $row['ID'];
                }
            }
            return $userID;
        }
        public function getOrders($username){
            $userID = $this->DecodeUsername($username);
            //SELECT `product`.`thumbnail`, `product`.`name`, `quantity`, `product`.`price`	 FROM `order` INNER JOIN `product` WHERE  `order`.`user_id` = 3 AND `product`.`id` = `order`.`product_id`
            $sql = "SELECT `product`.`thumbnail`, `product`.`name`, `quantity`, `product`.`price`, `total_cash`	 FROM `order` INNER JOIN `product` WHERE  `order`.`user_id` = $userID AND `product`.`id` = `order`.`product_id`";
            $result = $this->orderstable->query($sql);
            $list = [];
            while($row = $result->fetch_assoc()) {
                //return list json
                $list[] = [
                    'image' => $row['thumbnail'],
                    'name' => $row['name'],
                    'quantity' => $row['quantity'],
                    'price' => $row['price'],
                    'total' => $row['total_cash']
                ];
                
            }
            echo json_encode($list);

          
        }
        public function addOrder($username, $productID){
            $userID = $this->DecodeUsername($username);
            $sql_check = "SELECT * FROM `order` WHERE `user_id` = $userID AND `product_id` = $productID";
            $result = $this->orderstable->query($sql_check);
            if($result->num_rows > 0){
                //update quantity
                $sql_update = "UPDATE `order` SET `quantity` = `quantity` + 1 WHERE `user_id` = $userID AND `product_id` = $productID AND `status` = 'chưa thanh toán'";
                $this->orderstable->query($sql_update);
            }else{
                //insert new order
                $sql = "INSERT INTO `order`(`ID`, `order_date`, `status`,`total_cash`, `user_id`, `product_id`, `quantity`) VALUES (NULL, CURRENT_TIMESTAMP, '0', 'chưa thanh toán', '$userID', '$productID', '1')";
                $this->orderstable->query($sql);
            }
        }
        public function delOrders($username, $productID){
            
        }
        public function updateOrder($info){
            
        }

    }
?>