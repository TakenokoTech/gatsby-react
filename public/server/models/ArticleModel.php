<?php

// IMPORT BASE
require_once("BaseModel.php");

/*
 * 検索
 */
class ArticleModel extends BaseModel{

  public $INI, $DB, $FILE;

  function __construct() {
    $this->INI = parse_ini_file("./server.ini");
    $this->DB = new SQL();

    $analysis = explode('/', $_SERVER['PATH_INFO']);
    foreach ($analysis as $key => $value) {
      if ( ($call = $analysis[$key]) !== "") {
        $this->id = @$analysis[$key + 1] ? $analysis[$key + 1] : null;
        break;
      }
    }
  }

  public function index() {
    $query = "SELECT * FROM blog JOIN category WHERE blog.category = category.name";
    if($this->id !== null) $query .= " AND blog.article_id = " .$this->id;
    $result = $this->DB->query($query);
    $arr = array();
    while ($row = $result->fetchArray()) array_push($arr, $row);
    $this->DB->close();
    return $arr;
  }
}