const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const clienteRoutes = require("./routes/cliente");
const productoRoutes = require("./routes/producto");
const ventaRoutes = require("./routes/venta");

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use('/api', clienteRoutes);
app.use('/api', productoRoutes);
app.use('/api', ventaRoutes);

app.get("/", (req,res) =>{
    res.send("Welcome to my API")
});

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((error) => console.error(error))

app.listen(port, () => console.log("server listening on port", port));