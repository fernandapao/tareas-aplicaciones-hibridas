import fs from 'fs';
import path from 'path';


const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);
const archivoAutoresPath = path.join(__dirname, '../data/autores.json');


export const leerArchivoAutores = () => {
    const data = fs.readFileSync(archivoAutoresPath, 'utf-8');
    return JSON.parse(data);
};


export const escribirArchivoAutores = (data) => {
    fs.writeFileSync(archivoAutoresPath, JSON.stringify(data, null, 2));
};