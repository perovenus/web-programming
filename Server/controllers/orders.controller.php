<?php
include_once ".././models/db.model.php";
include_once ".././models/orders.model.php";
    class OrdersControlller{
        private $ordersModel;
        public function __construct(){
            $this->ordersModel = new OrdersModel();
        }
        public function getOrders($username){
            $this->ordersModel->getOrders($username);
        }
        public function getOrdersById($id){
            $this->ordersModel->getOrdersById($id);
        }
        public function delOrdersById($id){
            $this->ordersModel->delOrdersById($id);
        }
    }

$ordersCtr = new OrdersControlller();
$_POST = json_decode(file_get_contents('php://input'), true);
if(isset($_POST['action'])) {
    switch($_POST['action']) {
        case 1: //get orders by username
            $ordersCtr->getOrders($_POST['username']);
            break;
        case 2: //add news
            break;
        default:
            echo "action:\n 0 get all elements,\n 1 - get element by id,\n 2 - delete element by id,\n 3 - edit element by info, \n 4 - add element by info";
            break;
    }
}
?>