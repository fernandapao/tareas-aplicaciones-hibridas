import { leerArchivoAutores, escribirArchivoAutores } from "../models/autorModel.js";

const getAutores = (req, res) => {
    let autores = leerArchivoAutores();
    res.status(200).json(autores);
}


const getAutoresId = (req, res) => {
    const autorId = parseInt(req.params.id);
    let autores = leerArchivoAutores();
    const autor = autores.find(a => a.id === autorId);

    if(autor) {
        res.status(200).json(autor);
    } else {
        res.status(404).json({message: "Autor no encontrado"});
    }
}


const crearAutor = (req, res) => {
    let autores = leerArchivoAutores();
    const nuevoAutor = {
        id: autores.length > 0 ? autores.length + 1 : 1,
        autor: req.body.autor
    }
   autores.push(nuevoAutor);
   escribirArchivoAutores(autores);
   res.status(201).json(nuevoAutor);
}


const actualizarAutor = (req, res) => {
    const autorId = parseInt(req.params.id);
    let autores = leerArchivoAutores();
    const autorIndex = autores.findIndex(a => a.id === autorId);

    if(autorIndex !== -1) {
        autores[autorIndex] = {id: autorId, ...req.body};
        escribirArchivoAutores(autores);
        res.status(200).json(autores[autorIndex])
    } else {
        res.status(404).json({message: "Autor no encontrado"});
    }
}


const borrarAutor = (req, res) => {
    const autorId = parseInt(req.params.id);
    let autores = leerArchivoAutores();
    const autorIndex = autores.findIndex(a => a.id === autorId);

    if(autorIndex !== -1) {
        autores.splice(autorIndex, 1)
        escribirArchivoAutores(autores);
        res.status(204).send();
    } else {
        res.status(404).json({message: "Autor no encontrado"});
    }
}


export {getAutores, getAutoresId, crearAutor, actualizarAutor, borrarAutor }