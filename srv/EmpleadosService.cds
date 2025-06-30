service EmpleadosService {
    @cds.persistence.skip
    @Capabilities.DeleteRestrictions.Deletable : false
    entity EmpleadosDirecto {
        key ID_EMPLEADO : Integer;
        NOMBRE          : String(100);
        APELLIDO        : String(100);
        SUELDO          : Decimal(10,2);

        @cds.persistence.skip
        SueldoCriticality : Integer; // campo calculado para color
    }
}