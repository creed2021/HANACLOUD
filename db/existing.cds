namespace db;

@cds.persistence.exists
entity EMPLEADOS {
  key ID_EMPLEADO: Integer;
  NOMBRE: String(100);
  APELLIDO: String(100);
  SUELDO: Decimal(10,2);
}
