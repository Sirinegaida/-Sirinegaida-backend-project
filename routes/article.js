const express = require("express");

/*--import de fichier de model (article)*/
const Article = require("../models/article");

const router = express.Router();

const multer = require("multer");
/*fichier vide */
filename = "";

const myStorage = multer.diskStorage({
  /*storage neccesite destination path of the files uploded */
  destination: "./uploads",
  /*fonction de nommage de chaque fichier*/
  
  filename: (req, file, redirect) => {
    //8484894948373.png
    //image/jpg
    let fl = Date.now() + "." + file.mimetype.split("/")[1];
    filename = fl;
    redirect(null, fl);
  },
});

const upload = multer({ storage: myStorage });


//upload d'image aprés l'ajout se fait par middle wear (=>uplod.any('image '))
router.post("/ajoutarticlephoto", upload.any("image"), (req, res) => {


  let data = req.body;
  let article = new Article(data);


  //changement de nom d'image
  article.image = filename;

  article 
    .save()
    .then((savedArticle) => {
      res.send(savedArticle);
    })
    .catch((err) => {
      res.send(err);
    });
});

//ajoutarticle
router.post("/ajoutarticle", (req, res) => {
  let data = req.body;
  let article = new Article(data);

  article
    .save()
    .then((savedArticle) => {
      res.send(savedArticle);
    })
    .catch((err) => {
      res.send(err);
    });
});

//get article à partir de id
router.get("/getallarticle", (req, res) => {
  Article.find()
    .then((articles) => {
      res.send(articles);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/getarticlebyid/:id", (req, res) => {
  let myIdArticle = req.params.id;
  //send en forme de tableau
  Article.findOne({ _id: myIdArticle })
    .then((articles) => {
      res.send(articles);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/getarticlebycategorie/:category", (req, res) => {
  let cat = req.params.category;
  /*rous les categories qui ont cette categorie */
  Article.find({ _category: cat })
    .then((articles) => {
      res.send(articles);
    })
    .catch((err) => {
      res.send(err);
    });
});
/* update d'un  article */
router.put("/update/:id", (req, res) => {
  let myIdArticle = req.params.id;
  let newArticle = req.body;

  Article.findByIdAndUpdate({ _category: cat }, newArticle)
    .then((articles) => {
      res.send(articles);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.delete("/deletearticle/:id", (req, res) => {
  let myIdArticle = req.params.id;

  Article.findOneAndDelete({ _id: myIdArticle })
    .then((deletedArticle) => {
      res.send(deletedArticle);
    })
    .catch((err) => {
      res.send(err);
    });
});
router.export = Article;
