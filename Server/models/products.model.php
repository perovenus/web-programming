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
                'id' => $row['id'],
                'price' => $row['price'],
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
                'id' => $row['id'],
                "brand" => $row['brand'],
                "price" => $row['price'],
                "warranty" => $row['warranty'],
                'name' => $row['name'],
                "description" => $row['description'],
                'image' => $row['thumbnail'],
                "type" => $row['type'],
                'attribute' => $row['attr'],
            ];
            
        }
        echo json_encode($list);
      
    }
    public function delProductsById($id){
        $sql = "DELETE FROM product WHERE id = $id";
        $result = $this->productstable->query($sql);
        if($result){
            echo "Delete successfully";
        }
        else{
            echo "fail";
        }
    }
    public function editProducts($info){
        $id = $info['id'];
        $brand = $info['brand'];
        $warranty = $info['warranty'];
        $price = $info['price'];
        $name = $info['name'];
        $description = $info['description'];
        $thumbnail = $info['thumbnail'];
        $type = $info['type'];
        $attribute = $info['attribute'];
        $sql = "UPDATE product SET brand = '$brand', warranty = '$warranty', price = '$price', name = '$name', description = '$description', thumbnail = '$thumbnail', type = '$type', attr = '$attribute' WHERE id = '$id'";
        $result = $this->productstable->query($sql);
        if($result){
            echo "Edit successfully";
        }
        else{
            echo "fail";
        }
    }
    public function addProducts($info){
        $brand = $info['brand'];
        $warranty = $info['warranty'];
        $price = $info['price'];
        $name = $info['name'];
        $description = $info['description'];
        $thumbnail = $info['thumbnail'];
        $type = $info['type'];
        $attribute = $info['attribute'];
        $get_max_id = $this->productstable->query("SELECT MAX(id) FROM product");
        $id = $get_max_id->fetch_assoc()['MAX(id)'] + 1;
        $sql = "INSERT INTO product (id, brand, warranty, price, name, description, thumbnail, type, attr) VALUES ('$id', '$brand', '$warranty', '$price', '$name', '$description', '$thumbnail', '$type', '$attribute')";
        $result = $this->productstable->query($sql);
        if($result){
            echo "Add successfully";
        }
        else{
            echo "fail";
        }
    }
}