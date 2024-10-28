import express from "express"
import { getTodosUsuarios, getTodosUsuariosId, crearUsuario, loginUsuario, actualizarUsuario, eliminarUsuario } from "../controllers/usuariosControllers.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { verificarRol } from '../middlewares/authMiddleware.js';


dotenv.config();

const claveSecreta = process.env.SECRET;
const router = express.Router();


const autenticacion = (req, res, next) => {
    const getToken = req.headers.authorization;

    if (getToken) {
        const token = getToken.split(" ")[1];
        jwt.verify(token, claveSecreta, (err, paylod) => {
            if (err) {
                return res.status(403).send("Acceso denegado")
            }
            // console.log(playlod);
            req.user = {id: paylod.id, email: paylod.email}
            next();
        })
    }
}

const verificarToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ message: "Acceso denegado" });

    jwt.verify(token, claveSecreta, (err, user) => {
        if (err) return res.status(403).json({ message: "Token no válido" });
        req.user = user;
        next();
    });
};



router.get('/', autenticacion, getTodosUsuarios)

router.get('/:id', getTodosUsuariosId)

router.post('/', crearUsuario)

router.post('/login', loginUsuario)

router.put('/:id', actualizarUsuario)

router.delete('/:id', verificarRol(['admin']), eliminarUsuario);


export default router;