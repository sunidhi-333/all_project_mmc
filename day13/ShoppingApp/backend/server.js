const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
 
const app = express();
app.use(cors());
app.use(bodyParser.json());
 
// MongoDB connection
mongoose.connect('mongodb://localhost:27017/shoppingApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
// Product Schema
const Product = mongoose.model('Product', {
  name: String,
  price: Number,
  description: String,
});
 
// Routes
app.get('/api/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});
 
app.post('/api/products', async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});
 
app.put('/api/products/:id', async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});
 
app.delete('/api/products/:id', async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted successfully' });
});
 
app.listen(3000, () => console.log('Server running on http://localhost:3000'));