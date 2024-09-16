// booksRoutes.js
import express from 'express';
import { getAllBooks, getBookById, createBook, updateBook, deleteBook } from '../controllers/booksController.js';

const router = express.Router();

router.get('/', getAllBooks);      // Obtener todos los libros
router.get('/:id', getBookById);   // Obtener un libro por ID
router.post('/', createBook);      // Crear un nuevo libro
router.put('/:id', updateBook);    // Actualizar un libro por ID
router.delete('/:id', deleteBook); // Eliminar un libro por ID

export default router;
