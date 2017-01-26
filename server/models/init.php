<?php
//==================================================================
// INIT
require("../compornents/SQL.php");
require("../compornents/FILE.php");
$INI = parse_ini_file("../server.ini");
$DB = new SQL();
$FILE = new FILE();

//==================================================================
// IMPORT PATH
$dir = $INI["ARTICLES_URL"];
$FILE->searchFile($dir);
$path = $FILE->getFilePath();

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
    $result_flag = $DB->query($sql);
}

//==================================================================
// CHECK RESULT
$result = $DB->query("SELECT * FROM blog");
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

$DB->close();