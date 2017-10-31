


const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: String,
    desc: String,
    author: String,
    ingredients: [ String ],
    steps: [
        {
            img: String,
            text: String
        }
    ],
    tags: [ String ],
    created: Date,
    last_updated: Date
});

const Recipe = mongoose.model('Recipe', recipeSchema);


mongoose.connect('mongodb://localhost:27017/test');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
    console.log("WE're connected? i guess?");
    app.listen(3000);

    app.get('/', function(req, res) {
        
        console.log('YAY DONE!');
    })
})