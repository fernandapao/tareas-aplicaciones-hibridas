import express from "express"

const app = express()

app.get("/", (req, res) =>{
    res.end("Fernanda Paoliello")
})

app.get("/materia", (req, res) =>{
    res.end("Aplicaciones Hibridas")
})

app.get("/profesora", (req, res) =>{
    res.end("Camila Galban")
})

const peliculas = [
    "La familia del futuro",
    "Monster Inc",
    "Los increibles",
    "Star Wars",
    "La cenicienta"
]

app.use(express.json());

app.get('/peliculas/:titulo', (req, res) => {
    const {titulo} = req.params;

    if (peliculasFavoritas.includes(titulo)) {
        res.send('La película seleccionada ya está en favoritos');
    } else {
        res.status(404).send('404 – película no encontrada');
    }
});

const productos = [
    { id: 1, nombre: 'Producto A', precio: 100 },
    { id: 2, nombre: 'Producto B', precio: 200 },
    { id: 3, nombre: 'Producto C', precio: 150 },
    { id: 4, nombre: 'Producto D', precio: 250 },
    { id: 5, nombre: 'Producto E', precio: 50 },
    { id: 6, nombre: 'Producto F', precio: 300 },
    { id: 7, nombre: 'Producto G', precio: 80 },
    { id: 8, nombre: 'Producto H', precio: 220 },
    { id: 9, nombre: 'Producto I', precio: 90 },
    { id: 10, nombre: 'Producto J', precio: 110 },
];

// Mostrar listado de productos o uno por ID
app.get('/productos/:id?', (req, res) => {
    const { id } = req.params;
    const { min, max } = req.query;

    if (id) {
        const producto = productos.find(p => p.id === parseInt(id));
        if (producto) {
            res.json(producto);
        } else {
            res.status(404).send('Producto no encontrado');
        }
    } else if (min || max) {
        const minPrecio = min ? parseFloat(min) : 0;
        const maxPrecio = max ? parseFloat(max) : Infinity;
        const productosFiltrados = productos.filter(p => p.precio >= minPrecio && p.precio <= maxPrecio);
        res.json(productosFiltrados);
    } else {
        res.json(productos);
    }
});

app.listen(3000, () => console.log("server running on port http://localhost:3000"))
