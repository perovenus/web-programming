<?php
include_once '.././models/news.model.php';
class NewsController{
    private $newsController;
    public function __construct(){
        $this->newsController = new NewsModel();
    }
    public function getNews(){
        $this->newsController->getNews();
    }
    public function getNewsById($id){
        $this->newsController->getNewsById($id);
    }
    public function delNewsById($id){
        $this->newsController->delNewsById($id);
    }
    public function editNewsById($info){
        $this->newsController->editNews($info);
    }
    public function addNews($info){
        $this->newsController->addNews($info);
    }
}
$newsCtr = new NewsController();
if(isset($_GET['action'])){
    switch($_GET['action']){
        case 0: //get all news
            $newsCtr->getNews();
            break;
        case 1: //get news by id
            $newsCtr->getNewsById($_GET['id']);
            break;
        case 2: //delete news by id
            $newsCtr->delNewsById($_GET['id']);
            break;
        case 3: //edit news by id
            $info = [
                'id' => $_POST['id'],
                'title' => $_POST['title'],
                'image' => $_POST['image'],
            ];
            $newsCtr->editNewsById($info);
            break;
        case 4: //add news
            $info = [
                'title' => $_POST['title'],
                'content' => $_POST['content'],
                'image' => $_POST['image'],
            ];
            $newsCtr->addNews($info);
            break;
        default:
            echo "action:\n 0 get all elements,\n 1 - get element by id,\n 2 - delete element by id,\n 3 - edit element by info, \n 4 - add element by info";
            break;
    }
}
?>