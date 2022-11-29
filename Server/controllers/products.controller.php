<?php
include_once '.././models/products.model.php';
class ProductsController{
    private $productsModel;
    public function __construct(){
        $this->productsModel = new ProductsModel();
    }
    public function getProducts(){
        $this->productsModel->getProducts();
    }
    public function getProductsById($id){
        $this->productsModel->getProductsById($id);
    }
    public function delProductsById($id){
        $this->productsModel->delProductsById($id);
    }
    public function editProducts($info){
        $this->productsModel->editProducts($info);
    }
    public function addProducts($info){
        $this->productsModel->addProducts($info);
    }
}
$prsCtr = new ProductsController();
if(isset($_GET['action'])){
    switch($_GET['action']){
        case '0': //get all products
            $prsCtr->getProducts();
            break;
        case '1': //get product by id
            $prsCtr->getProductsById($_GET['id']);
            break;
        case '2': //delete product by id
            $prsCtr->delProductsById($_GET['id']);
            break;
        case '3': //edit product by id
            $info = [
                'id' => $_POST['id'],
                'title' => $_POST['title'],
                'price' => $_POST['price'],
                'description' => $_POST['description'],
                'thumbnail' => $_POST['thumbnail'],
                'category' => $_POST['category'],
                'attribute' => $_POST['attribute'],
            ];
            $prsCtr->editProducts($info);
            break;
        case '4': //add product
            $info = [
                'title' => $_POST['title'],
                'price' => $_POST['price'],
                'description' => $_POST['description'],
                'thumbnail' => $_POST['thumbnail'],
                'category' => $_POST['category'],
                'attribute' => $_POST['attribute'],
            ];
            $prsCtr->addProducts($info);
            break;
        default:
            echo "action:\n 0 get all elements,\n 1 - get element by id,\n 2 - delete element by id,\n 3 - edit element by info, \n 4 - add element by info";
            break;
    }
}

?>