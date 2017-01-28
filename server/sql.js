// import * as mysql from "mysql";
let mysql = require('mysql');

// http://qiita.com/PianoScoreJP/items/7ed172cd0e7846641e13

let connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'pass',
  database : 'react'
});

connection.connect((err) => {
  err ? console.error('error connecting: ' + err.stack) : console.log('connected as id ' + connection.threadId);
});

/**
 * データ取得
 * @param {string} query - クエリ
 * @returns {Object}
 */
export function getQuery(query) {
  new Promise((resolve, reject) => {
    connection.query("SELECT * FROM ", (error, results, fields) => {
      error ? reject(null) : resolve(results);
    });
  });
}