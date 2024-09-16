const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');

const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/alumno') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Nombre: Fernanda Paoliello, Comision: DWN4AV');
    } else if (req.url === '/info') {
        const systemInfo = {
            platform: os.platform(),
            cpuArch: os.arch(),
            cpuCores: os.cpus().length,
            freeMemory: os.freemem(),
            totalMemory: os.totalmem()
        };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(systemInfo));
    } else if (req.url === '/static') {
        const filePath = path.join(__dirname, 'index.html');
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error al leer el archivo');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Ruta no encontrada');
    }
});

server.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
