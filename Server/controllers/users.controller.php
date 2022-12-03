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
    public function updateUser($info){
        $this->userModel->updateUser($info);
    }
    public function addUser($info){
        $this->userModel->addUser($info);
    }
    public function checkrole($username){
        $this->userModel->checkrole($username);
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
            $usrCtr->updateUser($_POST['info']);
            break;
        case 3:
            $usrCtr->addUser($_POST['info']);
            break;
        case 4:
            $usrCtr->checkrole($_POST['username']);
            break;  
    }   
}
?>