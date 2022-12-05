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
        public function addOrder($username, $id_products, $quantities, $total_cash, $name, $method, $note, $phone, $email, $address){
            $userID = $this->DecodeUsername($username);
            $sql = "INSERT INTO ordered (id, user_id, id_products, quantities, total_cash, method, note, name, sdt, email, status, address, time) VALUES (NULL, '$userID', '$id_products', '$quantities',' $total_cash', '$method', '$note', '$name', '$phone', '$email', 1, '$address', CURRENT_TIMESTAMP)";
            $result = $this->orderstable->query($sql);

        }   

        public function getAllOrder() {
            $sql = "SELECT * FROM ordered";
            $result = $this->orderstable->query($sql);
            $list = [];
            while($row = $result->fetch_assoc()) {
                $list[] = [
                    'order_id' => $row['id'],
                    'user_id' => $row['user_id'],
                    'note' => $row['note'],
                    'time' => $row['time'],
                    'status' => $row['status'],
                    'total_cash' => $row['total_cash']
                ];
            }
            echo json_encode($list);
        }

        public function getOrdersById($id) {
            $sql = "SELECT * FROM ordered WHERE id = '$id'";
            $result = $this->orderstable->query($sql);
            $list = [];
            while($row = $result->fetch_assoc()) {
                $list[] = [
                    'customer_name' => $row['name'],
                    'email' => $row['email'],
                    'phone_number' => $row['sdt'],
                    'address' => $row['address'],
                    'note' => $row['note'],
                    'pay_method' => $row['method'],
                    'time' => $row['time'],
                    'total_cash' => $row['total_cash'],
                    'status' => $row['status'],
                    'product_list' => explode(",",$row['id_products']),
                    'quantity_list' => explode(",",$row['quantities'])
                ];
            }
            echo json_encode($list);
        }

        public function getProducts($id_list) {
            $list = [];
            while($id = $id_list) {
                $sql = "SELECT name, price, thumbnail FROM product WHERE id ='$id'";
                $result = $this->orderstable->query($sql);
                while($row = $result->fetch_assoc()) {
                    $list[] = [
                        'name' => $row['name'],
                        'price' => $row['price'],
                        'thumbnail' => $row['thumbnail']
                    ];
                }
            }
            echo json_encode($list);
        }
    }
?>