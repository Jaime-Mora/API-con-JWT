const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'apirest',
  password: ''
});

connection.connect();
module.exports = connection;