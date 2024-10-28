const express = require('express');
const Joi = require('joi');
const Curso = require('../models/cursoModel');

const router = express.Router();

// Validación con Joi
const cursoSchema = Joi.object({
    titulo: Joi.string().required(),
    descripcion: Joi.string().required()
});

// Crear un nuevo curso
router.post('/', async (req, res) => {
    const { error } = cursoSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let curso = new Curso(req.body);
    curso = await curso.save();
    res.send(curso);
});

// Leer todos los cursos
router.get('/', async (req, res) => {
    const cursos = await Curso.find().populate('estudiantes');
    res.send(cursos);
});

// Actualizar un curso
router.put('/:id', async (req, res) => {
    const { error } = cursoSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const curso = await Curso.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!curso) return res.status(404).send('Curso no encontrado');
    res.send(curso);
});

// Eliminar un curso
router.delete('/:id', async (req, res) => {
    const curso = await Curso.findByIdAndRemove(req.params.id);
    if (!curso) return res.status(404).send('Curso no encontrado');
    res.send(curso);
});

module.exports = router;
