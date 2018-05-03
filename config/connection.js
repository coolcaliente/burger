//connection to mysql

var mysql = require("mysql");

var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "andirules", 
    database: "burgers_db"

});

  // initialize our connection.
  connection.connect(function(err) {
    if (err) {
      console.error("MySQL error connecting: " + err.stack);
      return;
    }
    console.log("connected to MySQL as id " + connection.threadId);
  });
  
  // export the connection for ORM 
  module.exports = connection;