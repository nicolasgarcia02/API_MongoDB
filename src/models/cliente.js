const mongoose = require("mongoose");

const clienteSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    edad: {
        type: Number,
        require: true
    },
    cedula: {
        type: Number,
        require: true
    },
    puntos: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Cliente', clienteSchema);