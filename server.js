const express = require("express");

/*--import de fichier externe que server.js
pour connection*/
require("./config/connect.js");

/*import de fichier router de chaque model*/
const articleRoute = require("./routes/article");
const productRoute = require("./routes/product");
//const userRoute = require("./routes/user");

const app = express();
/* on demand the express to use json files*/
app.use(express.json());
//http://127.0.0.1:3000
//app.use("/article", articleRoute);
app.use("/product", productRoute);
//app.use("/user", userRoute);*/

/*requete toujours reste en mode active */
app.listen(3000, (req, res) => {
  console.log("server work");
});
