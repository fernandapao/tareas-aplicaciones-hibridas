import { leerArchivoLibros, escribirArchivoLibros } from "../models/librosModel.js";

const getLibros = (req, res) => {
    let libros = leerArchivoLibros();
    res.status(200).json(libros);
}


const getLibrosId = (req, res) => {
    const libroId = parseInt(req.params.id);
    let libros = leerArchivoLibros();
    const libro = libros.find(a => a.id === libroId);

    if(libro) {
        res.status(200).json(libro);
    } else {
        res.status(404).json({message: "Libro no encontrado"});
    }
}


const crearLibros = (req, res) => {
    let libros = leerArchivoLibros();
    const nuevoLibro = {
        id: libros.length > 0 ? libros.length + 1 : 1,
        libro: req.body.libro
    }
   libros.push(nuevoLibro);
   escribirArchivoLibros(libros);
   res.status(201).json(nuevoLibro);
}


const actualizarLibros = (req, res) => {
    const libroId = parseInt(req.params.id);
    let libros = leerArchivoLibros();
    const libroIndex = libros.findIndex(a => a.id === libroId);

    if(libroIndex !== -1) {
        libros[libroIndex] = {id: libroId, ...req.body};
        escribirArchivoLibros(libros);
        res.status(200).json(libros[libroIndex])
    } else {
        res.status(404).json({message: "Libro no encontrado"});
    }
}


const borrarLibros = (req, res) => {
    const libroId = parseInt(req.params.id);
    let libros = leerArchivoLibros();
    const libroIndex = libros.findIndex(a => a.id === libroId);

    if(libroIndex !== -1) {
        libros.splice(libroIndex, 1)
        escribirArchivoLibros(libros);
        res.status(204).send();
    } else {
        res.status(404).json({message: "Libro no encontrado"});
    }
}


export {getLibros, getLibrosId, crearLibros, actualizarLibros, borrarLibros}