<?php
include_once '.././models/db.model.php';
if(isset($_SESSION['username'])){
    $username = $_SESSION['username'];
    $role = $_SESSION['role'];
    echo json_encode(["username" => $username, "role" => $role]);
}
else{
    echo "fail";
}
?>