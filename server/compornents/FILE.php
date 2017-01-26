<?php

class FILE {

  private $filePath = array();

  function searchFile($dir) {
    if( !is_dir($dir) || !$handle = opendir($dir) ) return;
    while( ($file = readdir($handle)) !== false ) {
      if($file == "." || $file == "..") continue;
      if( filetype( $path = $dir . "/". $file ) == "dir" ) {
        $this->searchFile($path);
      } else {
        array_push($this->filePath, $path);
      }
    }
  }

  function getFilePath () {
    return $this->filePath;
  }
}
