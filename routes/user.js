const { genSalt } = require("bcrypt");
const express = require("express");

/*--import de fichier de model (article)*/
const User = require("../models/user");

/*import de router */
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("register:/", (req, res) => {
  let userData = req.body;
  let user = new userData();
  //crtyptage pass

  let salt = bcrypt.genSaltSync(10); /*clé de cryptage */
  /*décryptage de password pour user */

  let cryptedPass = bcrypt.hashSync(userData.password, genSalt);

  user.password = cryptedPass;

  user
    .save()
    .then((savedUser) => {
      res.send(savedUser);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.post("./login", (req, res) => {
  /*1étape :read data */
  let data = req.body;
  /*2étape :test by emai l=>recherche quelqu'un qui a cet email */

  User.findOne({ email: data.email })
    .then((user) => {
      /*3èeme étape test  by password if true or not  */
      let valid = bcrypt.compareSync(data.password, user.password);
      /*comare crypted password coming from 
        database and the password typed by the use  */
      if (valid == false) {
        res.send("email or password invalid");
      } else {
        //kdbkcjdbcdjkcbdkcbjdkcbkjdbcdkcbkdjcbdkc
        /*création de token (payload) contains id d user  */
        let payload = {
          _id: user.id,
        };
        /*jwt bibliothèque pour création de token */
        let token = jwt.sign(payload, "123456789");
            /*send the token in object format w*/
        res.send({ mytoken: token });
      }
    })
    .catch((err) => {
      res.send(err);
    });
});

router.update

module.exports = router;
