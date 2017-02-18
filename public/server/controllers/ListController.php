<link href="../server/style.css" rel="stylesheet" type="text/css">
<?php

require_once("BaseController.php");

class ListController extends BaseController {

    public function index () {
        // =======================================================
        echo '<h1>記事一覧</h1>';
        foreach ($this->model->index() as $row) {
            echo '<div class="list-item">';
            echo '<div class="list-item-left"><img class="_img" src="../articles/img/article.bmp" /></div>';
            echo '<div class="list-item-right">';
                echo "<a class='_title' href=''>{$row["title"]}</a>";
                echo '<div class="list-item-right-middle">';
                    echo "<span class='_date'>".$row["date"]."</span>";
                    echo "<span class='_category'>".$row["category"]."</span>";
                echo "</div>";
                echo "<div class='list-item-right-bottom'>".$row["description"]."</div>";
            echo "</div>";
            echo "</div>";
        }
    }

}