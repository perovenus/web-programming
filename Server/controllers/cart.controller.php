<?php
include_once ".././models/db.model.php";
include_once ".././models/cart.model.php";
    class CartController{
        private $cartModel;
        public function __construct(){
            $this->cartModel = new CartModel();
        }
        public function getCart($username){
            $this->cartModel->getCart($username);
        }
        public function addToCart($username, $productID){
            $this->cartModel->addToCart($username, $productID);
        }
        public function editItem($username, $productID, $num){
            $this->cartModel->editItem($username, $productID, $num);
        }
        public function deleteItem($username, $productID){
            $this->cartModel->deleteItem($username, $productID);
        }
    }

$cartCtr = new CartController();
$_POST = json_decode(file_get_contents('php://input'), true);
if(isset($_POST['action'])) {
    switch($_POST['action']) {
        case 1: //get orders by username
            $cartCtr->getCart($_POST['username']);
            break;
        case 2: //add news
            $cartCtr->addToCart($_POST['username'], $_POST['productID']);
            break;
        case 3: //ediit order
            $cartCtr->editItem($_POST['username'], $_POST['productID'], $_POST['num']);
            break;
        case 4:
            $cartCtr->deleteItem($_POST['username'], $_POST['productID']);
            break;
        default:
            echo "action:\n 0 get all elements,\n 1 - get element by id,\n 2 - delete element by id,\n 3 - edit element by info, \n 4 - add element by info";
            break;
    }
}
?>