const express = require('express');
const port = 3001; //we will serve the content on localhost:3000
const app = express();
app.use(express.json());
let products = [
    { pId: 1, pName: 'Product 1', pPrice: 100 },
    { pId: 2, pName: 'Product 2', pPrice: 200 },
    { pId: 3, pName: 'Product 3', pPrice: 300 },
    { pId: 4, pName: 'Product 4', pPrice: 400 },
    { pId: 5, pName: 'Product 5', pPrice: 500 }
       
];
app.get('/products', (req, res) => {
    res.json(products);
});
app.post('/products/add', (req, res) => {
    const newProduct = {
        pId: req.body.pId,
        pName: req.body.pName,
        pPrice: req.body.pPrice
    };
    products.push(newProduct);  
    res.status(201).json(newProduct);  
});
app.put('/products/:pId', (req, res) => {
    const id = parseInt(req.params.pId);
    const product = products.find(u => u.pId === id);
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    product.pName = req.body.pName;
    product.pPrice = req.body.pPrice;
    res.json(product);
});
app.delete('/products/:pId', (req, res) => {
    const id = parseInt(req.params.pId);
    products = products.filter(u => u.pId !== id);
    res.status(204).send();
});
app.listen(port, () => {
    console.log(`User API listening at http://localhost:${port}`);
});
 