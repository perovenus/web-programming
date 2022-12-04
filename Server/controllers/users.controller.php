<?php
include_once ".././models/db.model.php";
include_once ".././models/users.model.php";
class UserController {
    private $userModel;
    public function __construct(){
        $this->userModel = new UserModel();
    }
    public function getUsers(){
        $this->userModel->getUsers();
    }
    public function getUserByUserName($username){
        return $this->userModel->getUserByUserName($username);
    }
    public function updateUserInfo($info){
        $this->userModel->updateUserInfo($info);
    }
    public function addUser($username, $password){
        $this->userModel->addUser($username, $password);
    }
    public function checkrole($username){
        $this->userModel->checkrole($username);
    }
    public function getUserInfo($username) {
        $this->userModel->getUserInfo($username);
    }
}

$usrCtr = new UserController();
$_POST = json_decode(file_get_contents("php://input"),true);
if(isset($_POST['action'])){
    switch($_POST['action']){
        case 0:
            $usrCtr->getUsers();
            break;
        case 1:
            $info = $usrCtr->getUserByUserName($_POST['username']);
            if($info === null){
                echo "User not found";
            }
            else{
                $password = $info[0]['password'];
                if($password == $_POST['password']){
    
                    echo json_encode(["username" =>hash('sha256',$info[0]['username']), "role" => $info[0]['role']]);
                }
                else{
                    echo "Password is incorrect";
                }
            }
            break;
        case 2:
            $usrCtr->updateUserInfo($_POST['info']);
            break;
        case 3:
            $usrCtr->addUser($_POST['username'], $_POST['password']);
            break;
        case 4:
            $usrCtr->checkrole($_POST['username']);
            break;
        case 5:
            $usrCtr->getUserInfo($_POST['username']);
            break;
    }   
}
?>