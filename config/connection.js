 let mysql = require('mysql	');

 let con = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'MGoblue3!',
    database : 'burgers_db' 
  });

 module.exports = con;