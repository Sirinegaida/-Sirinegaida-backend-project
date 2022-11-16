//1) import mongoose
const mongoose = require("mongoose");

//2) connecter au mongoose
mongoose
  .connect("mongodb://127.0.0.1:27017/bootcampsoir")
    /*in case of succes in connection to database*/
  .then(() => {
    console.log("connected");
  })
        /*in case of failure in connection to database */

  .catch(() => {
    console.log("error in connection");
  });

//3)every code bi5lef server.js il faut export 
module.exports = mongoose;
