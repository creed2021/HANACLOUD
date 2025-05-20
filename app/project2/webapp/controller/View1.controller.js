sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("project2.controller.View1", {
        onInit() {
        },
        onAlta:function(){

            this.getOwnerComponent().getRouter().navTo("RouteAlta");

        }
    });
});