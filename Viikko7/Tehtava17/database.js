const mysql = require('mysql');
const connection = mysql.createPool({
  host: '127.0.0.1',
  user: 'testuser1',
  password: 'xxxx',
  database: 'test_db1'
});
module.exports = connection;