<?php
include_once "db.model.php";
class NewsModel{
    private $db;
    private $newstable;
    public function __construct(){
        $this->db = new DB();
        $this->newstable = $this->db->connect();

    }
    public function getNews(){
        $sql = "SELECT * FROM news";
        $result = $this->newstable->query($sql);
        $list = [];
        while($row = $result->fetch_assoc()) {
            //return list json
            $list[] = [
                'id' => $row['ID'],
                'title' => $row['title'],
                'time_up' => $row['time_up'],
                'content' => $row['content'],
                "image" => $row['thumbnail'],
            ];
            
        }
        echo json_encode($list);
      
    }
    public function getNewsById($id){
        $sql = "SELECT * FROM news WHERE id = $id";
        $result = $this->newstable->query($sql);
        $list = [];
        while($row = $result->fetch_assoc()) {
            //return list json
            $list[] = [
                'id' => $row['ID'],
                'title' => $row['title'],
                'time_up' => $row['time_up'],
                'content' => $row['content'],
                "image" => $row['thumbnail'],
                "type" => $row['type']
            ];
            
        }
        echo json_encode($list);
      
    }
    public function delNewsById($id){
        $sql = "DELETE FROM news WHERE ID = $id";
        $result = $this->newstable->query($sql);
        if($result){
            echo "Delete successfully";
        }
        else{
            echo "fail";
        }
    }
    public function editNewsById($info){
        var_dump($info);
        // $sql = "UPDATE news SET title = ".$info['title'].", thumbnail = ".$info['image'].", content = ".$info['content'].", type = ".$info['type']." WHERE ID = ".$info['id'];
        // $sql = "UPDATE news SET title = ".$info['title']. "WHERE ID = ". $info['id'];
        $id = $info['id'];
        $title = $info['title'];
        $thumbnail = $info['image'];
        $content = $info['content'];
        $type = $info['type'];
        $sql = "UPDATE news SET title = '$title', thumbnail = '$thumbnail', content = '$content', type = '$type' WHERE id = '$id'";
        $result = $this->newstable->query($sql);
        if($result){
            echo "Update successfully";
        }
        else{
            echo "fail";
        }
    }
    public function addNews($info){
        $sql = "INSERT INTO news (ID, title, content, thumbnail, type , time_up) VALUES (NULL, '".$info['title']."', '".$info['content']."', '".$info['image']."', '".$info['type']."', CURRENT_TIMESTAMP)";
        $result = $this->newstable->query($sql);
        if($result){
            echo "Add successfully";
        }
        else{
            echo "fail";
        }
    }
}