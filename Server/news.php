<?php
include_once 'db.php';
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Requested-With, Authorization, X-Auth-Token');
class Post{
    private $db;
    private $conn;
    public function __construct(){
        $this->db = new DB();
        $this->conn = $this->db->connect();
    }
    public function getProducts(){
        $sql = "SELECT * FROM news";
        $result = $this->conn->query($sql);
        $list = [];
        while($row = $result->fetch_assoc()) {
            //return list json
            $list[] = [
                'title' => $row['title'],
                'content' => $row['content'],
                'image' => $row['thumbnail'],
                'time_up' => $row['time_up'],
                'id' => $row['ID'],
            ];
            
        }
        echo json_encode($list);
      
    }
    public function addUser($info){
        $sql = "INSERT INTO user (username, password, role) VALUES ('".$info['username']."', '".$info['password']."', '".$info['role']."')";
        $result = $this->conn->query($sql);
        if($result){
            echo "Add successfully";
        }
        else{
            echo "fail";
        }
    }
}
$p = new Post();
$p->getProducts();
?>