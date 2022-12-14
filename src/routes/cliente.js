const express = require("express");
const clienteSchema = require("../models/cliente")

const router = express.Router();

router.post('/clientes', (req, res) => {
    const cliente = clienteSchema(req.body);
    cliente
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.get('/clientes', (req, res) => {
    clienteSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.get('/clientes/:id', (req, res) => {
    const { id } = req.params;
    clienteSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.put('/clientes/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, edad, cedula, puntos } = req.body;
    clienteSchema
    .updateOne({ _id: id }, { $set: { nombre, edad, cedula, puntos } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.delete('/clientes/:id', (req, res) => {
    const { id } = req.params;
    clienteSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;