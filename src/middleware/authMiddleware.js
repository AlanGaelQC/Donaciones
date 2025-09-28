const jwt = require("jsonwebtoken");
const { SECRET } = require("../controllers/userController");

function auth(role) {
    return (req, res, next) => {
        const authHeader = req.headers["authorization"];
        if (!authHeader) return res.status(401).json({ message: "No autorizado" });

        const token = authHeader.split(" ")[1];
        try {
            const payload = jwt.verify(token, SECRET);
            if (role && payload.role !== role) return res.status(403).json({ message: "Rol no autorizado" });
            req.user = payload;
            next();
        } catch (e) {
            res.status(401).json({ message: "Token inválido" });
        }
    };
}

module.exports = auth;
