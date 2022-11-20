const mongoose = require("mongoose");

const ventaSchema = mongoose.Schema({
    tamaño: {
        type: String,
        require: true
    },
    total: {
        type: Number,
        require: true
    },
    cantidad_de_productos: {
        type: Number,
        require: true
    },
    mensaje: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Venta', ventaSchema);