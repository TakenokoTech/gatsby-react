<?php

class SQL extends SQLite3 {

  private $table = [
    'DELETE FROM a',
    'CREATE TABLE a (id int, name text)',
    'CREATE TABLE b (id int, name text)'
  ];

  function __construct() {
    $this->open('data.db');
    foreach ($this->table as &$q) @$this->exec($q);
  }

}
