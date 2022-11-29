<?php
include_once "db.model.php";
class ProductsModel{
    private $db;
    private $productstable;
    public function __construct(){
        $this->db = new DB();
        $this->productstable = $this->db->connect();

    }
    public function getProducts(){
        $sql = "SELECT * FROM product";
        $result = $this->productstable->query($sql);
        $list = [];
        while($row = $result->fetch_assoc()) {
            //return list json
            $list[] = [
                'name' => $row['name'],
                'image' => $row['thumbnail'],
                'id' => $row['ID'],
                'attribute' => $row['attr'],
            ];
            
        }
        echo json_encode($list);
      
    }
    public function getProductsById($id){
        $sql = "SELECT * FROM product WHERE ID = $id";
        $result = $this->productstable->query($sql);
        $list = [];
        while($row = $result->fetch_assoc()) {
            //return list json
            $list[] = [
                'id' => $row['ID'],
                "title" => $row['title'],
                "price" => $row['price'],
                'name' => $row['name'],
                "description" => $row['description'],
                'image' => $row['thumbnail'],
                "category" => $row['category_id'],
                'attribute' => $row['attr'],
            ];
            
        }
        echo json_encode($list);
      
    }
    public function delProductsById($id){
        $sql = "DELETE FROM product WHERE ID = $id";
        $result = $this->productstable->query($sql);
        if($result){
            echo "Delete successfully";
        }
        else{
            echo "fail";
        }
    }
    public function editProducts($info){
        $sql = "UPDATE product SET title = '".$info['title']."', price = '".$info['price']."', description = '".$info['description']."', thumbnail = '".$info['thumbnail']."', category_id = '".$info['category']."', attr = '".$info['attribute']."' WHERE ID = ".$info['id'];
        $result = $this->productstable->query($sql);
        if($result){
            echo "Edit successfully";
        }
        else{
            echo "fail";
        }
    }
    public function addProducts($info){
        $sql = "INSERT INTO product (title, price, description, thumbnail, category_id, attr) VALUES ('".$info['title']."', '".$info['price']."', '".$info['description']."', '".$info['thumbnail']."', '".$info['category']."', '".$info['attribute']."')";
        $result = $this->productstable->query($sql);
        if($result){
            echo "Add successfully";
        }
        else{
            echo "fail";
        }
    }
}