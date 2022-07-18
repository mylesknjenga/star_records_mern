import express from "express";
import dotenv from "dotenv";
import mysql from "mysql2";
import path from "path";
// import products from "./data/products.js";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_ADMIN,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
}).promise();

const getProducts = async () => {
    const [ rows ] = await pool.query("SELECT * FROM products");
    return rows;
};

const getProduct = async (id) => {
    const [ rows ] = await pool.query(`
        SELECT *
        FROM products
        WHERE id = ?`,
        [id])
    return rows[0]
}

app.get("/api/products", async (req, res) => {
    const products = await getProducts();
    console.log(products);
    res.json(products);
});

app.get("/api/products/:id", async (req, res) => {
    const product = await getProduct(req.params.id)
    res.json(product)
});

const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
    })
} else {
    app.get("/", (req,res) => {
        res.send("API is running....")
    })
};

app.listen(PORT, () => {
    console.log(`Listening in ${process.env.NODE_ENV} on ${PORT}`)
});