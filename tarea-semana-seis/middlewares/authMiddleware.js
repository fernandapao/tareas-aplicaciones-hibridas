// authMiddleware.js
export const verificarAutenticacion = (req, res, next) => {
    // Suponiendo que tienes un usuario autenticado en req.user
    if (req.isAuthenticated && req.user) {
        return next();
    } else {
        return res.status(401).json({ mensaje: 'No estás autenticado' });
    }
};

// Middleware para verificar el rol del usuario
export const verificarRol = (rolesPermitidos) => (req, res, next) => {
    // Verifica si el usuario tiene uno de los roles permitidos
    const { rol } = req.user; // Suponiendo que el rol del usuario está en req.user

    if (rolesPermitidos.includes(rol)) {
        return next(); // Si el rol es permitido, pasa al siguiente middleware o controlador
    } else {
        return res.status(403).json({ mensaje: 'No tienes permiso para realizar esta acción' });
    }
};
