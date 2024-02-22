// src/app.js
const express = require("express");
const app = express();
const modbusRouter = require("./src/routers/modbusRouter");
const modbusClientRegister = require("./src/models/modbusClient");

const port = 3000;

// Establecer conexión Modbus TCP
modbusClientRegister.connect("192.168.0.107");

app.use("/", modbusRouter);

app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
