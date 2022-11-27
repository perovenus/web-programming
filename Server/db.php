<?php
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
