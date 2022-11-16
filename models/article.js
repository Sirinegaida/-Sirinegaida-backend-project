const mongoose = require('mongoose');


const Article = mongoose.model('Article',
    {
    
        title: String,
        description: String,
        category: String,
        image: String,
        likes:Number
    })
/*il fault exporter chaque fichier autre que server.js*/
module.exports = Article;