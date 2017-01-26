<?php

// IMPORT BASE
require("ModelComponent.php");

/*
 * 初期化処理
 */
class init extends ModelComponent{

  private $INI, $DB, $FILE;

  function __construct() {
    $this->INI = parse_ini_file("./server.ini");
    $this->DB = new SQL();
    $this->FILE = new FILE();
  }

  function index() {
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
        $VALUES = "VALUES ('$date', '$title', '$category', '$description', '$sentence')";

        $sql = $INSERT . " " . $VALUES . ";";
        $result_flag = $this->DB->query($sql);
    }
    //==================================================================
    // CHECK RESULT
    $result = $this->DB->query("SELECT * FROM blog");
    echo('<table>');
    while ($row = $result->fetchArray()){
        echo("<tr>");
            echo("<td>".$row["date"]."</td>");
            echo("<td>".$row["title"]."</td>");
            echo("<td>".$row["category"]."</td>");
            echo("<td>".$row["description"]."</td>");
        echo("</tr>");
    }
    echo('</table>');
    $this->DB->close();

    echo renderXML();
  }
}