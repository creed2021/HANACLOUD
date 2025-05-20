sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], function (Controller) {
    "use strict";
  
    return Controller.extend("app.controller.Main", {
      onInit: function () {
        console.log("✅ Main.controller cargado");
      }
    });
  });
  