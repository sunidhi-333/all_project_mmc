const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient, ObjectId } = require('mongodb');
 
const app = express();
app.use(bodyParser.json());
 
// MongoDB connection URI
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
 
// Database and collection
let db, productsCollection;
 
async function connectDB() {
    try {
        await client.connect();
        db = client.db('shoppingDB'); // ✅ Changed to shoppingDB   
        productsCollection = db.collection('productList'); // ✅ Changed to productList
        console.log("✅ Connected to MongoDB");
    } catch (error) {
        console.error("❌ DB connection failed", error);
    }
}
connectDB();
 
// CREATE - Add new product
app.post('/products', async (req, res) => {
    try {
        const result = await productsCollection.insertOne(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
 
// READ - Get all products
app.get('/products', async (req, res) => {
    try {
        const products = await productsCollection.find().toArray();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
 
// READ - Get single product by ID
app.get('/products/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const query = isNaN(id) ? { _id: new ObjectId(id) } : { _id: parseInt(id) };
 
        const product = await productsCollection.findOne(query);
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// app.get('/products/:id', async (req, res) => {
//     try {
//         const product = await productsCollection.findOne({ _id: new ObjectId(req.params.id) });
//         if (!product) return res.status(404).json({ message: "Product not found" });
//         res.json(product);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });
 
// UPDATE - Update product by ID
// app.put('/products/:id', async (req, res) => {
//     try {
//     
app.put('/products/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const query = isNaN(id) ? { _id: new ObjectId(id) } : { _id: parseInt(id) };
 
        const result = await productsCollection.updateOne(
            query,
            { $set: req.body }
        );
 
        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Product not found" });
        }
 
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
 
 
 
// DELETE - Remove product by ID
// app.delete('/products/:id', async (req, res) => {
//     try {
//         const result = await productsCollection.deleteOne({ _id: new ObjectId(req.params.id) });
//         res.json(result);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });
app.delete('/products/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const query = isNaN(id) ? { _id: new ObjectId(id) } : { _id: parseInt(id) };
 
        const result = await productsCollection.deleteOne(query);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
 
// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});