const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const product_controller = require('./product_controller');
const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());
mongoose.connect(
    'mongodb://localhost:27017/products',
    { useNewUrlParser: true });
app.use('/product', product_controller);
app.listen(3000);
