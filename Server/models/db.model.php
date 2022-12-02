<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json charset=utf-8');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Requested-With, Authorization, X-Auth-Token');
class DB{
    private $servername = "localhost";
    private $username="root";
    private $password="";
    private $db_name="web_programming";
    private $conn;
    public function __construct(){
    }
    public function connect(){
        $this->conn = mysqli_connect($this->servername, $this->username, $this->password, $this->db_name);
        if(!$this->conn){
            die("Connection failed: " . mysqli_connect_error());
        }
        else{
            return $this->conn;
        }
    }
}
?>
