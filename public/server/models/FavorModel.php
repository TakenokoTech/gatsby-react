<?php

// IMPORT BASE
require_once("BaseModel.php");

/*
 * カテゴリ取得処理
 */
class FavorModel extends BaseModel{

  public $INI, $DB;

  function __construct() {
    $this->INI = parse_ini_file("./server.ini");
    $this->DB = new SQL();
  }

  public function index() {
    $result = $this->DB->query("SELECT * FROM blog ORDER BY category ASC LIMIT 5");
    $arr = array();
    while ($row = $result->fetchArray()) array_push($arr, $row);
    $this->DB->close();
    return $arr;
  }
}