const request = require("supertest");
const express = require("express");
const userRoutes = require("../src/routes/userRoutes");

const app = express();
app.use(express.json());
app.use("/api/users", userRoutes);

describe("Registro y login de usuarios", () => {
    it("Debe registrar un usuario", async () => {
        const res = await request(app)
            .post("/api/users/register")
            .send({ name: "Alan", email: "alan@test.com", password: "1234", role: "usuario" });
        expect(res.statusCode).toEqual(201);
        expect(res.body.user.name).toBe("Alan");
    });

    it("Debe iniciar sesión correctamente", async () => {
        await request(app)
            .post("/api/users/register")
            .send({ name: "Test", email: "test@test.com", password: "1234", role: "usuario" });
        const res = await request(app)
            .post("/api/users/login")
            .send({ email: "test@test.com", password: "1234" });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty("token");
    });
});
