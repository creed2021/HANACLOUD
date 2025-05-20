//@ui5-bundle project2/Component-preload.js
sap.ui.require.preload({
	"project2/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent","project2/model/models"],(e,t)=>{"use strict";return e.extend("project2.Component",{metadata:{manifest:"json",interfaces:["sap.ui.core.IAsyncContentCreation"]},init(){e.prototype.init.apply(this,arguments);this.setModel(t.createDeviceModel(),"device");this.getRouter().initialize()}})});
},
	"project2/controller/App.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],e=>{"use strict";return e.extend("project2.controller.App",{onInit(){}})});
},
	"project2/controller/View1.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],e=>{"use strict";return e.extend("project2.controller.View1",{onInit(){}})});
},
	"project2/i18n/i18n.properties":'# This is the resource bundle for project2\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=App Title\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n#XTIT: Main view title\ntitle=App Title',
	"project2/i18n/i18n_en.properties":'',
	"project2/i18n/i18n_es.properties":'',
	"project2/i18n/i18n_es_ES.properties":'',
	"project2/manifest.json":'{"_version":"1.65.0","sap.app":{"id":"project2","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:basic","version":"1.17.5","toolsId":"83047005-7455-4574-b526-f1437874ce41"},"dataSources":{"mainService":{"uri":"/odata/v4/empleados/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.136.0","libs":{"sap.m":{},"sap.ui.core":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"project2.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","controlAggregation":"pages","controlId":"app","transition":"slide","type":"View","viewType":"XML","path":"project2.view","async":true,"viewPath":"project2.view"},"routes":[{"name":"RouteView1","pattern":":?query:","target":["TargetView1"]}],"targets":{"TargetView1":{"id":"View1","name":"View1"}}},"rootView":{"viewName":"project2.view.App","type":"XML","id":"App","async":true}}}',
	"project2/model/models.js":function(){
sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"project2/view/App.view.xml":'<mvc:View controllerName="project2.controller.App"\n    displayBlock="true"\n    xmlns:mvc="sap.ui.core.mvc"\n    xmlns="sap.m"><App id="app"></App></mvc:View>',
	"project2/view/View1.view.xml":'<mvc:View controllerName="project2.controller.View1"\n    xmlns:mvc="sap.ui.core.mvc"\n    xmlns="sap.m"><Page id="page" title="{i18n>title}"><Table id="table" items="{/EmpleadosDirecto}"><columns><Column id="c1"><Text id="lblidEmpleado" text="ID" /></Column><Column id="c2"><Text id="lblnombre" text="Nombre" /></Column><Column id="c3"><Text id="lblapellido" text="Apellido" /></Column></columns><items><ColumnListItem id="cc1"><cells><Text id="txtidempleado" text="{ path: \'ID_EMPLEADO\', targetType: \'any\' }" /><Text id="txtnombre" text="{ path: \'NOMBRE\', targetType: \'any\' }" /><Text id="txtapellido" text="{ path: \'APELLIDO\', targetType: \'any\' }" /></cells></ColumnListItem></items></Table></Page></mvc:View>\n'
});
//# sourceMappingURL=Component-preload.js.map
