<?php 
session_start();
$username = "root";
$password = "";
$hostname = "localhost";
$dbname = "test";
//connection to the database
$conn = mysqli_connect($hostname, $username, $password, $dbname) or die("Unable to connect to MySQL");
//query the database


if (isset($_POST['username']) && isset($_POST['password'])) {
    function validate($data){
        $data = trim($data);
        $data = stripcslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
    $username = validate($_POST['username']);
    $password = validate($_POST['password']);

    if (empty($username)){
        echo 'hay nhap username';
        exit();
    }
    else if(empty($password)){
        echo 'hay nhap password';
        exit();
    }
    else{
        $query = "SELECT * FROM `user` WHERE `username` = '$username'";
        $result = mysqli_query($conn,$query);

        if (mysqli_num_rows($result) > 0){
            $row = mysqli_fetch_array($result);
            if ($password === $row['password']) {
                $id = $row['ID'];
                $payload = [
                    'iss' => "localhost",
                    'aud' => 'localhost',
                    'exp' => time() + 100, 
                    'data' => [
                        'id' => $id,
                        'username' => $username, 
                    ],
                ];
                echo json_encode($payload);
            }
            else{
                echo 'sai mat khau';
            }
        }
        else{
            echo 'username khong ton tai';
            exit();
        }
    }
}
?>

?>