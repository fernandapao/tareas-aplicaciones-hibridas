const mongoose = require('mongoose');

const cursoSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    estudiantes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Estudiante' }]
});

module.exports = mongoose.model('Curso', cursoSchema);
