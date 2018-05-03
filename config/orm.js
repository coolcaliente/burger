
// Import the MySQL connection object
var connection = require('./connection.js');


var orm = {

    // Returns everything from the "burgers" table.
    selectAll: function (table, callback) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function (err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    // Creates a new record in the "burgers" table.
    insertOne: function (table, column, value, callback) {
        var queryString = "INSERT INTO ?? VALUES ?";
        connection.query(queryString, [table, column, value], function (err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    // updates a specified record in the "burgers" table.
    updateOne: function (table, value, condition, callback) {
        var queryString = "UPDATE ?? SET ?? WHERE ?? = ?";
        connection.query(queryString, [table, value, condition], function (err, result) {
            if (err) throw err;
            callback(result);
        });
    }
};

// Here, we export our "orm" object.
module.exports = orm;