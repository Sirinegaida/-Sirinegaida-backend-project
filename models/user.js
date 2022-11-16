const mongoose = require("mongoose");

const User = mongoose.model("User", {
  name: String,
  lastname: String,
  email: String,
  password: String,
});



/*il fault exporter chaque fichier autre que server.js*/
module.exports = User;
