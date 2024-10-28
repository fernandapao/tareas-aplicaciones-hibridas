import express from 'express';
import librosRoutes from './routes/librosRoutes.js';
import autoresRoutes from './routes/autoresRoutes.js';

const app = express();
const port = 3000;


app.use(express.json());

// Rutas
app.use('/libros', librosRoutes);
app.use('/autores', autoresRoutes);

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
