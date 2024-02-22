// src/routes/modbusRouter.js
const express = require("express");
const router = express.Router();
const modbusController = require("../controllers/modbusController");

router.get('/write', (req, res) => {
    modbusController.writeAndReset(10,1, 0, 2000); // Usamos 10 ya que los registros comienzan desde 0
    res.send("Operación de escritura y reinicio iniciada.");
});

module.exports = router;
