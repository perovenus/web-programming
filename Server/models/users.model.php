<?php
include_once "db.model.php";
class UserModel{
    private $db;
    private $userstable;
    public function __construct(){
        $this->db = new DB();
        $this->userstable = $this->db->connect();
    }
    public function getUsers(){
        $sql = "SELECT * FROM user";
        $result = $this->userstable->query($sql);
        $list = [];
        while($row = $result->fetch_assoc()) {
            //return list json
            $list[] = [
                'id' => $row['ID'],
                'username' => $row['username'],
                'password' => $row['password'],
                'role' => $row['role'],
            ];
            
        }
        echo json_encode($list);
      
    }
    public function getUserByUserName($username){
        
        $sql = "SELECT * FROM user WHERE username = '$username'";
        $result = $this->userstable->query($sql);
        $list = [];
        while($row = $result->fetch_assoc()) {
            //return list json
            $list[] = [
                'id' => $row['ID'],
                'username' => $row['username'],
                'password' => $row['password'],
                'role' => $row['role'],
            ];
            
        }
        if (count($list) == 0){
            return null;
        }
        return $list;
      
    }
    public function updateUser($info){
        $sql = "UPDATE users SET username = '".$info['username']."', password = '".$info['password']."', email = '".$info['email']."', phone = '".$info['phone']."', address = '".$info['address']."', role = '".$info['role']."' WHERE id = ".$info['id'];
        $result = $this->userstable->query($sql);
        if($result){
            echo "Update successfully";
        }
        else{
            echo "fail";
        }
    }
    public function addUser($username, $password){
        //check if username is existed
        $sql = "SELECT * FROM user WHERE username = '$username'";
        $result = $this->userstable->query($sql);
        if($result->num_rows > 0){
            echo "Username is existed";
        }
        else{
            $sql = "INSERT INTO user (username, password, role) VALUES ('$username', '$password',0)";
            $result = $this->userstable->query($sql);
            if($result){
                echo "Add successfully";
            }
            else{
                echo "fail";
            }
        }
    
       
    }
    public function checkrole($username){
        $sql = "SELECT username, role  FROM user";
        $result = $this->userstable->query($sql);
        while($row = $result->fetch_assoc()) {
            $hashusername = hash('sha256',$row['username']);
            if($hashusername == $username){
                echo $row['role'];
            }
        }
    }
}