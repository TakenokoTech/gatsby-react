<?php

require_once("BaseController.php");

class CategoryController extends BaseController {

    public function index () {
        $json = array();
        $key = ["count", "name", "id", "parent_id"];
        foreach ($this->model->index() as $row) {
            $arr = array();
            foreach ($key as $k) $arr[$k] = $row[$k];
            array_push($json, $arr);
        }
        print_r( json_encode($json, JSON_PRETTY_PRINT));
    }

}