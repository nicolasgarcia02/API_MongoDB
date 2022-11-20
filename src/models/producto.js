const mongoose = require("mongoose");

const productoSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    precio: {
        type: Number,
        require: true
    },
    codigo: {
        type: Number,
        require: true
    },
    marca: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Producto', productoSchema);