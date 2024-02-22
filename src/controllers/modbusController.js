// src/controllers/modbusController.js
const modbusClient = require("../models/modbusClient");

async function writeAndReset(address, initialValue, finalValue, duration) {
    await modbusClient.writeRegister(address, initialValue);
    setTimeout(async () => {
        await modbusClient.writeRegister(address, finalValue);
    }, duration);
}

module.exports = { writeAndReset };
