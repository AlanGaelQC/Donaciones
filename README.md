# Proyecto Donaciones

Este proyecto es una aplicación backend en Node.js que permite manejar usuarios con autenticación mediante JWT. Incluye un flujo básico de CI/CD usando GitHub Actions y pruebas unitarias con Jest.

---

## Estructura del proyecto

Donaciones/
├─ src/
│ ├─ controllers/
│ ├─ models/
│ ├─ routes/
│ └─ middleware/
├─ tests/
├─ .github/workflows/ci.yml
├─ package.json
├─ package-lock.json
└─ .gitignore


---

## Tecnologías usadas

- Node.js
- Express
- JSON Web Token (JWT)
- Jest (pruebas unitarias)
- GitHub Actions (CI/CD)

---

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/AlanGaelQC/Donaciones.git
cd Donaciones
npm install
node src/index.js
El servidor corre en: http://localhost:3000

Endpoints disponibles:

Registro de usuario: POST /api/users/register

Login de usuario: POST /api/users/login

Ejemplo de body para registro/login:
{
  "name": "Alan",
  "email": "alan@test.com",
  "password": "1234",
  "role": "usuario"
}
Pruebas unitarias

Para correr los tests:

npm test


Incluye un test simple para verificar que Jest y el workflow de CI/CD funcionan correctamente.

CI/CD

Workflow configurado en .github/workflows/ci.yml

Se ejecuta automáticamente en cada push o pull request.

Corre los tests unitarios con Jest y muestra el resultado en GitHub Actions.

Autor

Alan Gael QC
