<?php

require_once("BaseController.php");

class FavorController extends BaseController {

    public function index () {
        $json = array();
        $key = ["article_id", "file_path", "date", "title", "category", "description"];
        foreach ($this->model->index() as $row) {
            $arr = array();
            foreach ($key as $k) $arr[$k] = $row[$k];
            array_push($json, $arr);
        }
        print_r( json_encode($json, JSON_PRETTY_PRINT) );
    }

}