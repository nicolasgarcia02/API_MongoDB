const express = require("express");
const ventaSchema = require("../models/venta")

const router = express.Router();

router.post('/ventas', (req, res) => {
    const venta = ventaSchema(req.body);
    venta
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.get('/ventas', (req, res) => {
    ventaSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.get('/ventas/:id', (req, res) => {
    const { id } = req.params;
    ventaSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.put('/ventas/:id', (req, res) => {
    const { id } = req.params;
    const { tamaño, total, cantidad_de_productos, mensaje } = req.body;
    ventaSchema
    .updateOne({ _id: id }, { $set: { tamaño, total, cantidad_de_productos, mensaje } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.delete('/ventas/:id', (req, res) => {
    const { id } = req.params;
    ventaSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;