<?php
header('Access-Control-Allow-Origin: *');

require_once("./server/compornents/SQL.php");
require_once("./server/compornents/FILE.php");
require_once("./server/compornents/XML.php");

//
if (empty($_SERVER['PATH_INFO'])) {
  include('./server/controllers/index.php');
  exit;
}

//スラッシュで区切られたurlを取得します
$analysis = explode('/', $_SERVER['PATH_INFO']);
foreach ($analysis as $value) if ( ($call = $value) !== "") break;

//===============================================================
// CREATE NAME
$className = ucfirst ($call);
$controllerName = ucfirst ($className) . "Controller";
$modelName = ucfirst ($className) . "Model";

//===============================================================
// INCLUDE MODEL & CONTROLLER
file_exists('./server/models/'.$modelName.'.php') ? include('./server/models/'.$modelName.'.php') : require_once('./server/error.php');
file_exists('./server/controllers/'.$controllerName.'.php') ? include('./server/controllers/'.$controllerName.'.php') : require_once('./server/error.php');

$class = new $controllerName();
$ret = $class->index($analysis);
if (!is_null($ret) && is_array($ret)) extract($ret);
