<?php
//==================================================================
// INIT
require("SQL.php");
require("FILE.php");
$INI = parse_ini_file("server.ini");

$DB = new SQL();
$FILE = new FILE();

//==================================================================
// IMPORT XML
$dir = $INI["ARTICLES_URL"];
$FILE->searchFile($dir);
$path = $FILE->getFilePath();
print_r($path);
$xmlData = simplexml_load_file($path[1]);

echo('<pre>');
var_dump($xmlData, 2);
echo('</pre>');

//==================================================================
$sql = "INSERT INTO a (id, name) VALUES (1, 'テレビ');";
$result_flag = $DB->query($sql);

$result = $DB->query("SELECT * FROM a");
echo('<pre>');
while ($row = $result->fetchArray()) var_dump($row, 2);
echo('</pre>');

$DB->close();