const users = [];

class User {
    constructor(id, name, email, password, role = "usuario") {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password; // en producción, se debería hashear
        this.role = role;
    }
}

module.exports = { User, users };
