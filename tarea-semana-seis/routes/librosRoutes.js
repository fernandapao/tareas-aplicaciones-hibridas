
import express from 'express';
import { getLibros, getLibrosId, crearLibros, actualizarLibros, borrarLibros } from '../controllers/librosController.js';

const router = express.Router();

router.get('/', getLibros);
router.get('/:id', getLibrosId);
router.post('/', crearLibros);
router.put('/:id', actualizarLibros); 
router.delete('/:id', borrarLibros); 

export default router;
