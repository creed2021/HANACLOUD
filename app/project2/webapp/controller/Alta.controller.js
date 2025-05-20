sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("project2.controller.Alta", {
        onInit() {
        },
        onGuardar:function(){
      const oModel = this.getView().getModel(); // ODataModel
      const oView = this.getView();

      const nuevoEmpleado = {
        NOMBRE: oView.byId("inputNombre").getValue(),
        APELLIDO: oView.byId("inputApellido").getValue(),
        SUELDO: parseFloat(oView.byId("inputSueldo").getValue())
      };

      oModel.create("/EmpleadosDirecto", nuevoEmpleado, {
        success: () => {
          sap.m.MessageToast.show("Empleado creado exitosamente");
          //this.getOwnerComponent().getRouter().navTo("main");
        },
        error: (oError) => {
          sap.m.MessageToast.show("Error al crear el empleado");
          console.error(oError);
        }
      });
        }
    });
});