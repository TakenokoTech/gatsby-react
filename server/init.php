<?php
//==================================================================
// INIT
require("SQL.php");
require("FILE.php");
$INI = parse_ini_file("server.ini");
$DB = new SQL();
$FILE = new FILE();

//==================================================================
// IMPORT PATH
$dir = $INI["ARTICLES_URL"];
$FILE->searchFile($dir);
$path = $FILE->getFilePath();
print_r($path);

//==================================================================
// IMPORT XML
foreach($path as &$p) {
    echo("<hr/>");
    if (!preg_match("/\.xml$/i", $p)) continue;
    $xmlData = @simplexml_load_file($p);

    $date        = json_encode(@$xmlData->date);
    $title       = json_encode(@$xmlData->title);
    $category    = json_encode(@$xmlData->category);
    $description = json_encode(@$xmlData->description);
    $sentence    = json_encode(@$xmlData->sentence);

    $INSERT = "INSERT INTO blog (date, title, category, description, sentence)";
    $VALUES = "VALUES ($date, $title, $category, $description, $sentence)";

    echo("<p>$date<p>");
    echo("<p>$title<p>");
    echo("<p>$category<p>");
    echo("<p>$description<p>");
    echo("<p>$xmlData->sentence<p>");

    // $sql = $INSERT + " " + $VALUES + ";";
    // $result_flag = $DB->query($sql);
}
echo("<hr/>");

//==================================================================
// CHECK RESULT
// $result = $DB->query("SELECT * FROM blog");
echo('<table>');
while ($row = $result->fetchArray()){
    echo("<tr>");
        echo("<td>$row->date</td>");
        echo("<td>$row->title</td>");
        echo("<td>$row->category</td>");
        echo("<td>$row->description</td>");
        echo("<td>$row->sentence</td>");
    echo("</tr>");
}
echo('</table>');

$DB->close();