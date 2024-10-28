import fs from 'fs';
import path from 'path';

// Obtener el __dirname de la URL del módulo
const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const archivoLibrosPath = path.join(__dirname, '../data/libros.json');

// Funciones para leer y escribir archivos de libros
export const leerArchivoLibros = () => {
    const data = fs.readFileSync(archivoLibrosPath, 'utf-8');
    return JSON.parse(data);
};

export const escribirArchivoLibros = (data) => {
    fs.writeFileSync(archivoLibrosPath, JSON.stringify(data, null, 2));
};
