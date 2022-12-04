<?php
include_once ".././models/db.model.php";
include_once ".././models/ordered.model.php";
    class OrderedControlller{
        private $ordersModel;
        public function __construct(){
            $this->ordersModel = new OrderedModel();
        }
        public function getOrders($username){
            $this->ordersModel->getOrders($username);
        }
        public function getOrdersById($id){
            $this->ordersModel->getOrdersById($id);
        }
        public function addOrder($username, $id_products, $quantities, $total_cash){
            $this->ordersModel->addOrder($username, $id_products, $quantities, $total_cash);
        }
        public function delOrdersById($id){
            $this->ordersModel->delOrdersById($id);
        }
        public function editOrder($username, $productID, $num){
            $this->ordersModel->editOrder($username, $productID, $num);
        }
    }

$orderedCtr = new OrderedControlller();
$_POST = json_decode(file_get_contents('php://input'), true);
if(isset($_POST['action'])) {
    switch($_POST['action']) {
        case 1: //get orders by username
            $orderedCtr->getOrders($_POST['username']);
            break;
        case 2: //add news
            $orderedCtr->addOrder($_POST['username'], $_POST['id_products'], $_POST['quantities'], $_POST['total_cash']);
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