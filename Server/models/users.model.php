<?php
include_once "db.model.php";
class UserModel{
    private $db;
    private $userstable;
    public function __construct(){
        $this->db = new DB();
        $this->userstable = $this->db->connect();
    }
    private function DecodeUsername($username){
        $sql = "SELECT username, ID  FROM user";
        $result = $this->userstable->query($sql);
        $userID ;
        while($row = $result->fetch_assoc()) {
            $hashusername = hash('sha256',$row['username']);
            if($hashusername == $username){
                $userID = $row['ID'];
            }
        }
        return $userID;
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

    public function updateUserInfo($info){
        $user_id = $this->DecodeUsername($info['username']);
        $name = $info['name'];
        $email = $info['email'];
        $phone_number = $info['phone_number'];
        $address = $info['address'];
        $dob = $info['dob'];
        $gender = $info['gender'];
        $sql = "UPDATE user_info SET name = '$name', address = '$address', phone_number = '$phone_number', email = '$email', gender ='$gender', dob = '$dob' WHERE user_id = '$user_id'";
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

    public function getUserInfo($username) {
        $user_id = $this->DecodeUsername($username);
        $sql = "SELECT * FROM user_info WHERE user_id = $user_id";
        $result = $this->userstable->query($sql);
        $list = [];
        while($row = $result->fetch_assoc()) {
            $list[] = [
                'name' => $row['name'],
                'address' => $row['address'],
                'phone_number' => $row['phone_number'],
                'email' => $row['email'],
                'gender' => $row['gender'],
                'dob' => $row['dob'],
                'avatar' => $row['avatar']
            ];
        }
        if(count($list) == 0) {
            return null;
        }
        
        echo json_encode($list);
    }
}
?>