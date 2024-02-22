

// src/models/modbusClient.js
const ModbusRTU = require("modbus-serial");
const client = new ModbusRTU();

async function connect(ipAddress, port = 502) {
    try {
         // Cierra la conexión existente si está abierta antes de reconectar
         if (client.isOpen) {
            await disconnect();
        }
        await client.connectTCP(ipAddress, { port });
        console.log("Conexión Modbus TCP establecida.");
    } catch (error) {
        console.error("Error al conectar:", error);
    }
}

async function writeRegister(address, value) {
      // Verifica si el cliente está conectado antes de intentar escribir
      if (!client.isOpen) {
        console.log("Cliente no conectado. Intentando reconectar...");
        // Intenta reconectar aquí con los valores predeterminados o configurables
        await connect("192.168.0.107", 502); // Asegúrate de ajustar la IP y el puerto según sea necesario
    }
    try {
        await client.writeRegister(address, value);
        console.log(`Registro ${address} escrito con valor ${value}.`);
    } catch (error) {
        console.error("Error al escribir en el registro:", error);
    }
}
const disconnect = async () => {
    try {
        client.close();
        console.log("Conexión con el dispositivo Modbus TCP cerrada.");
    } catch (error) {
        console.error("Error al cerrar la conexión:", error);
    }
};
module.exports = { connect, disconnect,writeRegister };


