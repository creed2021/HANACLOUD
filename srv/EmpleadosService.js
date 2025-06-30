const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
  const db = await cds.connect.to('db'); // conexión al HDI container

  this.on('READ', 'EmpleadosDirecto', async (req) => {
    console.log('>> READ recibido:', req.data); 

    // Traemos los datos de la tabla
    const empleados = await db.run(`SELECT * FROM "DBADMIN"."EMPLEADOS"`);

    // Agregamos la propiedad calculada SueldoCriticality para color
    empleados.forEach(emp => {
      if (emp.SUELDO >= 50000) {
        emp.SueldoCriticality = 1;  // Verde (Positive)
      } else if (emp.SUELDO >= 30000) {
        emp.SueldoCriticality = 3;  // Amarillo (Critical)
      } else {
        emp.SueldoCriticality = 2;  // Rojo (Negative)
      }
    });

    return empleados;
  });

  this.on('CREATE', 'EmpleadosDirecto', async (req) => {
    console.log('>> CREATE recibido:', req.data); 
    const { ID_EMPLEADO, NOMBRE, APELLIDO, SUELDO } = req.data;

    await db.run(
      `INSERT INTO "DBADMIN"."EMPLEADOS" (ID_EMPLEADO, NOMBRE, APELLIDO, SUELDO)
       VALUES (?, ?, ?, ?)`,
      [ID_EMPLEADO, NOMBRE, APELLIDO, SUELDO]
    );

    // Retornar el registro insertado para confirmación
    return req.data;
  });

  this.on('UPDATE', 'EmpleadosDirecto', async (req) => {
    console.log('>> UPDATE recibido:', req.data); 
  
    const { ID_EMPLEADO, NOMBRE, APELLIDO, SUELDO } = req.data;
  
    await db.run(
      `UPDATE "DBADMIN"."EMPLEADOS" SET NOMBRE = ?, APELLIDO = ?, SUELDO = ? WHERE ID_EMPLEADO = ?`,
      [NOMBRE, APELLIDO, SUELDO, ID_EMPLEADO]
    );
  
    return req.data;
  });

  this.on('DELETE', 'EmpleadosDirecto', async (req) => {
    console.log('>> DELETE recibido:', req.data);
  
    const { ID_EMPLEADO } = req.data;
  
    await db.run(
      `DELETE FROM "DBADMIN"."EMPLEADOS" WHERE ID_EMPLEADO = ?`,
      [ID_EMPLEADO]
    );
  
    return { ID_EMPLEADO };
  });
  
});