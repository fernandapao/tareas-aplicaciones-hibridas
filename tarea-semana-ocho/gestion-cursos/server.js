const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/gestion_cursos')
    .then(() => console.log('Conectado a MongoDB'))
    .catch((error) => console.error('Error al conectar a MongoDB:', error));

const estudiantesRoutes = require('./routes/estudiantesRoutes.js');
const cursosRoutes = require('./routes/cursosRoutes.js');

app.use('/api/estudiantes', estudiantesRoutes);
app.use('/api/cursos', cursosRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor ejecutándose en el puerto ${PORT}`));
