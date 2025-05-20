sap.ui.define([cds
  "sap/ui/core/UIComponent"
], function (UIComponent) {
  "use strict";

  return UIComponent.extend("app.Component", {
    metadata: {
      manifest: "json"
    },

    init: function () {
      // Llamada al init del padre
      UIComponent.prototype.init.apply(this, arguments);
      console.log("✅ Component.js cargado correctamente");
      // 🔥 Esto es lo más importante para activar el router
      this.getRouter().initialize();
    }
  });
});
