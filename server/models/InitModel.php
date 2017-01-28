<?php

// IMPORT BASE
require_once("BaseModel.php");

/*
 * 初期化処理
 */
class InitModel extends BaseModel{

  public $INI, $DB, $FILE;

  function __construct() {
    $this->INI = parse_ini_file("./server.ini");
    $this->DB = new SQL();
    $this->FILE = new FILE();
  }

  public function index() {
    //==================================================================
    // IMPORT PATH
    $dir = $this->INI["ARTICLES_URL"];
    $this->FILE->searchFile($dir);
    $path = $this->FILE->getFilePath();
    //==================================================================
    // IMPORT XML
    foreach($path as &$p) {
        if (!preg_match("/\.xml$/i", $p)) continue;
        $xmlData = @simplexml_load_file($p);

        $date        = @$xmlData->date;
        $title       = @$xmlData->title;
        $category    = @$xmlData->category;
        $description = @$xmlData->description;
        $sentence    = @$xmlData->sentence->asXML();

        $INSERT = "INSERT INTO blog (date, title, category, description, sentence)";
        $VALUES = "VALUES ('$date', '$title', '$category', '$description', '')";

        $sql = $INSERT . " " . $VALUES . ";";
        $result_flag = $this->DB->query($sql);
    }
    //==================================================================
    // CHECK RESULT
    $result = $this->DB->query("SELECT * FROM blog");

    $arr = array();
    while ($row = $result->fetchArray()) array_push($arr, $row);
    $this->DB->close();
    return $arr;
  }
}