const express = require("express");
const dotenv = require("dotenv").config();
const products = require("./data/products");

const PORT = process.env.PORT || 4000;

const app = express();

app.get("/api/products", (req, res) => {
    res.json(products);
});

app.get("/api/products/:id", (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
});

app.listen(PORT, () => {
    console.log(`Listening in ${process.env.NODE_ENV} on ${PORT}`)
});