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
        public function addOrder($username, $productID){
            $this->ordersModel->addOrder($username, $productID);
        }
        public function delOrdersById($id){
            $this->ordersModel->delOrdersById($id);
        }
        public function editOrder($username, $productID, $num){
            $this->ordersModel->editOrder($username, $productID, $num);
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
            $ordersCtr->addOrder($_POST['username'], $_POST['productID']);
            break;
        case 3: //ediit order
            $ordersCtr->editOrder($_POST['username'], $_POST['productID'], $_POST['num']);
            break;
        default:
            echo "action:\n 0 get all elements,\n 1 - get element by id,\n 2 - delete element by id,\n 3 - edit element by info, \n 4 - add element by info";
            break;
    }
}
?>