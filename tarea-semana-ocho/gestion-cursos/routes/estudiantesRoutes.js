const express = require('express');
const Joi = require('joi');
const Estudiante = require('../models/estudiantesModel.js');
const Curso = require('../models/cursoModel.js');

const router = express.Router();

// Validación con Joi
const estudianteSchema = Joi.object({
    nombre: Joi.string().required(),
    correo: Joi.string().email().required()
});

// Crear un nuevo estudiante
router.post('/', async (req, res) => {
    const { error } = estudianteSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let estudiante = new Estudiante(req.body);
    estudiante = await estudiante.save();
    res.send(estudiante);
});

// Leer todos los estudiantes
router.get('/', async (req, res) => {
    const estudiantes = await Estudiante.find().populate('cursos');
    res.send(estudiantes);
});

// Actualizar un estudiante
router.put('/:id', async (req, res) => {
    const { error } = estudianteSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const estudiante = await Estudiante.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!estudiante) return res.status(404).send('Estudiante no encontrado');
    res.send(estudiante);
});

// Eliminar un estudiante
router.delete('/:id', async (req, res) => {
    const estudiante = await Estudiante.findByIdAndRemove(req.params.id);
    if (!estudiante) return res.status(404).send('Estudiante no encontrado');
    res.send(estudiante);
});

// Inscribir estudiante a un curso
router.post('/:id/inscribir', async (req, res) => {
    const estudiante = await Estudiante.findById(req.params.id);
    const curso = await Curso.findById(req.body.cursoId);

    if (!estudiante || !curso) return res.status(404).send('Estudiante o curso no encontrado');

    estudiante.cursos.push(curso._id);
    curso.estudiantes.push(estudiante._id);

    await estudiante.save();
    await curso.save();
    res.send(estudiante);
});

// Remover estudiante de un curso
router.post('/:id/remover', async (req, res) => {
    const estudiante = await Estudiante.findById(req.params.id);
    const curso = await Curso.findById(req.body.cursoId);

    if (!estudiante || !curso) return res.status(404).send('Estudiante o curso no encontrado');

    estudiante.cursos = estudiante.cursos.filter(c => c.toString() !== curso._id.toString());
    curso.estudiantes = curso.estudiantes.filter(e => e.toString() !== estudiante._id.toString());

    await estudiante.save();
    await curso.save();
    res.send(estudiante);
});

module.exports = router;
