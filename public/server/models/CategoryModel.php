<?php

// IMPORT BASE
require_once("BaseModel.php");

/*
 * カテゴリ取得処理
 */
class CategoryModel extends BaseModel{

  public $INI, $DB;

  function __construct() {
    $this->INI = parse_ini_file("./server.ini");
    $this->DB = new SQL();
  }

  public function index() {
    $result = $this->DB->query(
      //"SELECT COUNT(*) AS count, C.name, C.id, C.parent_id FROM blog B, category C WHERE B.category = C.name GROUP BY c.id"
      "SELECT COUNT(*) AS count, C.name, C.id, C.parent_id FROM category C GROUP BY C.name"
    );
    $arr = array();
    while ($row = $result->fetchArray()) array_push($arr, $row);
    $this->DB->close();
    return $arr;
  }

}