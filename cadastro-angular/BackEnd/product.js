var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var productSchema = new Schema({
    id: Number,
    name: String,
    price: Number
}, {versionKey: false})
module.exports = mongoose.model("Product", productSchema)
