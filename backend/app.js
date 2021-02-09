const express = require("express");
const  app     = express();
const bodyParser = require("body-parser");
const path = require('path');
const mongoose = require("mongoose");
const port = process.env.PORT || 8081;
const uri = process.env.MONGODB_URI;

//mongoose connecting to mongodb and creating db meme_app
require('mongoose-type-url');
mongoose.connect(uri || "mongodb://localhost:27017/meme_app" , { useNewUrlParser: true , useUnifiedTopology: true });
mongoose.connection.on('error', err => {
    logError(err);
});

app.set('views', path.join(__dirname, '../frontend/views'))
app.set("view engine","ejs");
app.use(express.static('frontend/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
const memesRouter = require('./routes/memes')
app.use(memesRouter)

 //................Listening port......................
 app.listen(port, () => {
    console.log('Meme App Server is up at port ' + port)
});
 