
// Import the ORM to implement functions that will interact with the database
var orm = require('../config/orm.js');

var burger = {
    selectAll: function (callback) {
      orm.selectAll("burgers", function(res) {
        callback(res);
      });
    },
    insertOne: function (column, value, callback) {
        orm.insertOne("burgers", column, value, function (res) {
          callback(res);
        });
      },
      updateOne: function (value, condition, callback) {
        orm.updateOne("burgers", value, condition, function (res) {
          callback(res);
        });
      }
    };
    
    module.exports = burger;