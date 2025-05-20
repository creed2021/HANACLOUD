const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
  const db = await cds.connect.to('db'); // conexión al HDI container

  this.on('READ', 'EmpleadosDirecto', async (req) => {
    return await db.run(`SELECT * FROM "DBADMIN"."EMPLEADOS"`); // acceso directo
  });
});
