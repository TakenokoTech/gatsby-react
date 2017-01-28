<?php
//
if (empty($_SERVER['PATH_INFO'])) {
  include('./controllers/index.php');
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
file_exists('./models/'.$modelName.'.php') ? include('./models/'.$modelName.'.php') : require_once('./error.php');
file_exists('./controllers/'.$controllerName.'.php') ? include('./controllers/'.$controllerName.'.php') : require_once('./error.php');

$class = new $controllerName();
$ret = $class->index($analysis);
if (!is_null($ret) && is_array($ret)) extract($ret);