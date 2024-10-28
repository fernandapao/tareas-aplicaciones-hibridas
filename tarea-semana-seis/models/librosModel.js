import fs from 'fs';
import path from 'path';

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);


const archivoLibrosPath = path.join(__dirname, '../data/libros.json');



export const leerArchivoLibros = () => {
   try {
    const data = fs.readFileSync(archivoLibrosPath, 'utf-8');
    return JSON.parse(data);
} catch (error) {
    console.error('Error al leer el archivo de libros:', error);
    return [];
}
};

export const escribirArchivoLibros = (data) => {
    fs.writeFileSync(archivoLibrosPath, JSON.stringify(data, null, 2));
};
