<?php
    include_once "db.model.php";
    class OrderedModel{
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
                    break;
                }
            }
            return $userID;
        }
        public function getOrders($username){
            $userID = $this->DecodeUsername($username);
            $sql = "SELECT `product`.`thumbnail`, `product`.`name`, `quantity`, `product`.`price`, `total_cash`,`order`.`product_id`	 FROM `order` INNER JOIN `product` WHERE  `order`.`user_id` = $userID AND `product`.`id` = `order`.`product_id`";
            $result = $this->orderstable->query($sql);
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
        public function addOrder($username, $id_products, $quantities, $total_cash){
            $userID = $this->DecodeUsername($username);
            $sql = "INSERT INTO ordered (id, user_id, id_products, quantities, total_cash, time) VALUES (NULL, '$userID', '$id_products', '$quantities',' $total_cash', CURRENT_TIMESTAMP)";
            $result = $this->orderstable->query($sql);

        }   

        public function delOrder($username, $productID){
           
            
        }
    }
?>