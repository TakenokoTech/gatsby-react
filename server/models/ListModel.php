<?php

// IMPORT BASE
require_once("BaseModel.php");

/*
 * 初期化処理
 */
class ListModel extends BaseModel{

  public $INI, $DB;

  function __construct() {
    $this->INI = parse_ini_file("./server.ini");
    $this->DB = new SQL();
  }

  public function index() {
    $result = $this->DB->query("SELECT * FROM blog");
    $arr = array();
    while ($row = $result->fetchArray()) array_push($arr, $row);
    $this->DB->close();
    return $arr;
  }
}