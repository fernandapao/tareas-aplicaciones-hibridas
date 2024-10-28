const mongoose = require('mongoose');

const estudianteSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    correo: { type: String, required: true, unique: true },
    cursos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Curso' }]
});

module.exports = mongoose.model('Estudiante', estudianteSchema);
