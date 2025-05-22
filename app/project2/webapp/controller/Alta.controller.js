sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "sap/m/MessageToast",
    "sap/m/MessageBox"
], (Controller,MessageToast,MessageBox) => {
    "use strict";

    return Controller.extend("project2.controller.Alta", {
        onInit() {
            console.log("Alta Controller Init")
        },
        onGuardar: function () {
            const oView = this.getView();
            const oModel = oView.getModel();
            console.log("Entro guardar");
          
            const nuevoEmpleado = {
              ID_EMPLEADO: oView.byId("inputidempleado").getValue(),
              NOMBRE: oView.byId("inputNombre").getValue(),
              APELLIDO: oView.byId("inputApellido").getValue(),
              SUELDO: parseFloat(oView.byId("inputSueldo").getValue())
            };
          
            // Indicar explícitamente el grupo de actualización (debe coincidir con updateGroupId en manifest)
            const oListBinding = oModel.bindList("/EmpleadosDirecto", null, [], null, {
              $$updateGroupId: "myUpdateGroup"
            });
            
            const oContext = oListBinding.create(nuevoEmpleado);
          
            // Enviar el batch indicando el grupo correcto
            oModel.submitBatch("myUpdateGroup")
              .then(() => {
                MessageToast.show("Empleado creado exitosamente");
                console.log("Empleado creado exitosamente");
              })
              .catch((err) => {
                MessageBox.error("Error al crear el empleado");
                console.error("Error en submitBatch():", err);
              });
          },
      onLimpiar:function(){

        this.getView().byId("inputidempleado").setValue("");
        this.getView().byId("inputNombre").setValue("");
        this.getView().byId("inputApellido").setValue("");
        this.getView().byId("inputSueldo").setValue("");

      },
      onActualizar: function () {
        const oView = this.getView();
        const oModel = oView.getModel();
    
        const sId = oView.byId("inputidempleado").getValue();
        if (!sId) {
            MessageBox.warning("Ingrese un ID de empleado para actualizar.");
            return;
        }
    
        const sPath = `/EmpleadosDirecto(ID_EMPLEADO=${sId})`; // Ajusta según tipo clave
    
        // Crear binding para el contexto del empleado a actualizar
        const oContextBinding = oModel.bindContext(sPath, null, {
            $$updateGroupId: "myUpdateGroup"
        });
    
        oContextBinding.requestObject()
            .then(() => {
                const oContext = oContextBinding.getBoundContext();
                if (!oContext) {
                    throw new Error("No se encontró el empleado para actualizar.");
                }
    
                // Actualizar propiedades
                oContext.setProperty("NOMBRE", oView.byId("inputNombre").getValue());
                oContext.setProperty("APELLIDO", oView.byId("inputApellido").getValue());
                oContext.setProperty("SUELDO", parseFloat(oView.byId("inputSueldo").getValue()));
    
                // Submit automático si hay cambios pendientes
                if (oModel.hasPendingChanges("myUpdateGroup")) {
                    oModel.submitBatch("myUpdateGroup")
                        .then(() => {
                            MessageToast.show("Empleado actualizado exitosamente");
                        })
                        .catch((err) => {
                            MessageBox.error("Error al actualizar el empleado");
                            console.error(err);
                        });
                } else {
                    MessageToast.show("No hubo cambios que guardar");
                }
            })
            .catch((err) => {
                MessageBox.error("Error al obtener el empleado");
                console.error(err);
            });
    },
    onEliminar: function () {
        const oView = this.getView();
        const oModel = oView.getModel();
        console.log("Empleado 2 Eliminar");
        const sId = oView.byId("inputidempleado").getValue();
      console.log("entro");
        if (!sId) {
          sap.m.MessageBox.warning("Ingrese un ID de empleado para eliminar.");
          return;
        }
      
        const sPath = `/EmpleadosDirecto(ID_EMPLEADO=${sId})`;
        console.log("Empleado 1 eliminar");
        const oContextBinding = oModel.bindContext(sPath, null, {
          $$updateGroupId: "myUpdateGroup"
        });
      
        oContextBinding.requestObject()
          .then(() => {
            const oContext = oContextBinding.getBoundContext();
            if (!oContext) throw new Error("Empleado no encontrado");
      
            // Marcar el contexto para borrado
            oContext.delete("myUpdateGroup");
      
            // Enviar batch para ejecutar DELETE
            oModel.submitBatch("myUpdateGroup")
              .then(() => {
                MessageToast.show("Empleado eliminado correctamente");
              })
              .catch((err) => {
                MessageBox.error("Error al eliminar el empleado");
                console.error(err);
              });
          })
          .catch((err) => {
            MessageBox.error("Error al obtener el empleado");
            console.error(err);
          });
      }
    });
});