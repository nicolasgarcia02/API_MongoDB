const express = require("express");
const productoSchema = require("../models/producto")

const router = express.Router();

router.post('/productos', (req, res) => {
    const producto = productoSchema(req.body);
    producto
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.get('/productos', (req, res) => {
    productoSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.get('/productos/:id', (req, res) => {
    const { id } = req.params;
    productoSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.put('/productos/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, precio, codigo, marca } = req.body;
    productoSchema
    .updateOne({ _id: id }, { $set: { nombre, precio, codigo, marca } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.delete('/productos/:id', (req, res) => {
    const { id } = req.params;
    productoSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;