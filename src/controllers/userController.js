const jwt = require("jsonwebtoken");
const { User, users } = require("../models/userModel");

const SECRET = "clave_super_secreta";

function register(req, res) {
    const { name, email, password, role } = req.body;
    const newUser = new User(users.length + 1, name, email, password, role);
    users.push(newUser);
    res.status(201).json({ message: "Usuario registrado", user: newUser });
}

function login(req, res) {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) return res.status(401).json({ message: "Credenciales inválidas" });

    const token = jwt.sign({ id: user.id, role: user.role }, SECRET, { expiresIn: "1h" });
    res.json({ message: "Login exitoso", token });
}

module.exports = { register, login, SECRET };
