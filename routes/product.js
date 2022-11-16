const express = require("express");

/*--import de fichier de model (article)*/
const Product = require("../models/product");

/*import de router  */
const router = express.Router();


router.post("/ajout", (req, res) => {
  let data = req.body;
  let prod = new Product(data);
  prod.save()
    .then((savedProd) => {
      console.log('savedPord')
      res.send(savedProd);
    })
    .catch((err) => {
      console.log('erreur ajout')
      res.send(err);
    });
});

router.put("/update/:id", (req, res) => {
  let myId = req.params.id;
  let newData = req.body;

  Product.findByIdAndUpdate({ _id: myId }, newData)
    .then((updatedProd) => {
      res.send(updatedProd);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/getall", (req, res) => {
  Product.find()
    .then((prods) => {
      res.send(prods);
    })
    .catch((err) => {
      res.send(err);
    });
});

//get product par le prix
router.get("/getall/:price", (req, res) => {
  let p = req.params.price;

  Product.find({ price: p })
    .then((prods) => {
      res.send(prods);
    })
    .catch((err) => {
      res.send(err);
    });
});

///delete le produit aprés la recherche
router.delete("/delete/:id", (req, res) => {
  let myId = req.params.id;
  Product.findByIdAndDelete({ _id: myId })
    .then((deletedProd) => {
      res.send(deletedProd);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.export = Product;
