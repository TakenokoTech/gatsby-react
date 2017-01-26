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
// INCLUDE MODEL
//===============================================================
if (file_exists('./models/'.$call.'.php')) {
  include('./models/'.$call.'.php');
  $class = new $call();
  $ret = $class->index($analysis);
  if (!is_null($ret) && is_array($ret)) extract($ret);
}

//===============================================================
// INCLUDE CONTROLLER
//===============================================================
// file_exists('./controllers/'.$call.'.php') 
  // ? include('./controllers/'.$call.'.php') : include('./controllers/error.php');