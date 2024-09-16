// authorsRoutes.js
import express from 'express';
import { getAllAuthors, getAuthorById, createAuthor, updateAuthor, deleteAuthor } from '../controllers/authorsController.js';

const router = express.Router();

router.get('/', getAllAuthors);      // Obtener todos los autores
router.get('/:id', getAuthorById);   // Obtener un autor por ID
router.post('/', createAuthor);      // Crear un nuevo autor
router.put('/:id', updateAuthor);    // Actualizar un autor por ID
router.delete('/:id', deleteAuthor); // Eliminar un autor por ID

export default router;
