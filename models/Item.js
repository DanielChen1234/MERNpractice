const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Item = mongoose.model('item', ItemSchema) //export Item and create mongo db thing called item with its defination set to Itemschema.
