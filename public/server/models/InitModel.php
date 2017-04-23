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
    // Rebuild
    $this->DB->migration();
  }

  public function index() {
    //==================================================================
    // IMPORT PATH
    $cat = $this->INI["CATEGORY_URL"];
    $dir = $this->INI["ARTICLES_URL"];
    $this->FILE->searchFile($dir);
    $path = $this->FILE->getFilePath();
    //==================================================================
    // IMPORT CATEGORY XML
    $xmlData = @simplexml_load_file($cat);

    foreach ($xmlData->category as $data) {
      $id         = @$data->id;
      $parent_id  = @$data->parent_id;
      $name       = @$data->name;

      $INSERT = "INSERT INTO category (id, parent_id, name)";
      $VALUES = "VALUES ('$id', '$parent_id', '$name')";

      $sql = $INSERT . " " . $VALUES . ";";
      $result_flag = $this->DB->query($sql);
    }
    //==================================================================
    // IMPORT ARTICLE XML
    $article_id = -1;
    foreach($path as &$p) {
        if (!preg_match("/\.xml$/i", $p)) continue;
        $xmlData = @simplexml_load_file($p);

        if(@$xmlData->title == "") continue;
        $title       = @$xmlData->title;
        $article_id  = @$article_id + 1;
        $file_path   = $p;
        $date        = @$xmlData->date;
        $category    = @$xmlData->category;
        $description = @$xmlData->description;
        $sentence    = @$xmlData->sentence->asXML();

        $INSERT = "INSERT INTO blog (article_id, file_path, date, title, category, description, sentence)";
        $VALUES = "VALUES ('$article_id', '$file_path', '$date', '$title', '$category', '$description', '')";

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