import express from "express";
import dotenv from 'dotenv';
import librosRoutes from './routes/librosRoutes.js';
import autoresRoutes from './routes/autoresRoutes.js';
import usuariosRoutes from './routes/usuariosRoutes.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use('/libros', librosRoutes);
app.use('/autores', autoresRoutes);
app.use('/usuarios', usuariosRoutes);

function verificarRol(rolesAdmitidos) {
    return function(req, res, next){
        const rolUsuario =req.headers['x-rol'];

        if(rolesAdmitidos.includes(rolUsuario)){
            next();
        } else {
            res.status(403).json({mesaje: "Acceso denegado"})
        }
    }
}

app.get("/panel", verificarRol(["admin", "super-admin"]), (req, res) =>{
    res.send("Acceso permitido")
});


app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
