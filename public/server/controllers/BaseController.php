<?php

class BaseController {

  public $model;

  function __construct() {
    $class = explode("Controller", get_class($this));
    $modelName = ucfirst ($class[0]) . "Model";
    $this->model = new $modelName();
  }

}