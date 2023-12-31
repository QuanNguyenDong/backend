const express = require("express");
const connectDB = require('./config/db');
const dotenv = require("dotenv").config();
const cookies = require("cookie-parser");

const app = express();
const port = process.env.PORT || 3000;

connectDB()

app.enable("trust proxy");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookies());

app.use("/api/menu", require("./routes/menuRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
