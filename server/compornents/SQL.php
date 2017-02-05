<?php

class SQL extends SQLite3 {

  private $table = [
    'DELETE FROM blog',
    'DELETE FROM category',
    'CREATE TABLE blog (date TIMESTAMP, title TEXT, category TEXT, description TEXT, sentence TEXT)',
    'CREATE TABLE category (id INT, parent_id INT, name TEXT)'
  ];

  function __construct() {
    $this->open('./data.db');
  }

  function migration() {
    foreach ($this->table as &$q) @$this->exec($q);
  }

}
