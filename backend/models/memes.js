const mongoose = require('mongoose')

//.........creating schema................
const memeSchema = new mongoose.Schema({
    name: {type : String, required : true },
    caption: {type : String, required: true},
    url: [{type: mongoose.SchemaTypes.Url, required: true}]

});

//.........creating collection................
module.exports = mongoose.model('meme',memeSchema)

