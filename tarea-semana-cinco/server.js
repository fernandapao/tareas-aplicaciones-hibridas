import express from 'express';
import booksRoutes from './routes/booksRoutes.js';
import authorsRoutes from './routes/authorsRoutes.js';

const app = express();
const port = 3000;


app.use(express.json());

// Rutas
app.use('/books', booksRoutes);
app.use('/authors', authorsRoutes);

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
