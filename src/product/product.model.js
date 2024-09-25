const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    companyname: { type: String, required: true },
    modelname: { type: String, required: true, unique: true },
    price: { type: String, required: true },
    shopname: { type: String,required: true},
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
