const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/product-db');

const productRoutes = require('./routes/products');

app.use('/', productRoutes);

app.listen(PORT, () => {
  console.log(`Product Inventory API Server`);
  console.log(`Server is running on: http://localhost:${PORT}`);
});



module.exports = app;
