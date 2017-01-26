<?php

class SQL extends SQLite3 {

  private $table = [
    'DELETE FROM blog',
    'CREATE TABLE blog (date TIMESTAMP, title TEXT, category TEXT, description TEXT, sentence TEXT)',
  ];

  function __construct() {
    $this->open('../data.db');
    foreach ($this->table as &$q) @$this->exec($q);
  }

}
