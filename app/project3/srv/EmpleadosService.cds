namespace project3.service;
service EmpleadosService3 {
    @cds.persistence.skip
    @Capabilities.DeleteRestrictions.Deletable : false
      entity EmpleadosDirecto {
          key ID_EMPLEADO : Integer;
              NOMBRE          : String(100);
                  APELLIDO        : String(100);
                      SUELDO          : Decimal(10,2);
                        }
}