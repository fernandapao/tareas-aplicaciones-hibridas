
import express from 'express';
import { getAutores, getAutoresId, crearAutor, actualizarAutor, borrarAutor } from '../controllers/autoresController.js';

const router = express.Router();

router.get('/', getAutores);  
router.get('/:id', getAutoresId);  
router.post('/', crearAutor); 
router.put('/:id', actualizarAutor);
router.delete('/:id', borrarAutor); 

export default router;
