using { project3.service.EmpleadosService3 as service } from './EmpleadosService';


annotate service.EmpleadosDirecto with @(
  UI.FieldGroup #GeneratedGroup : {
    $Type : 'UI.FieldGroupType',
    Data : [
      { $Type : 'UI.DataField', Label : 'ID_EMPLEADO', Value : ID_EMPLEADO },
      { $Type : 'UI.DataField', Label : 'NOMBRE', Value : NOMBRE },
      { $Type : 'UI.DataField', Label : 'APELLIDO', Value : APELLIDO },
      { $Type : 'UI.DataField', Label : 'SUELDO', Value : SUELDO },
    ],
  },
  UI.FieldGroup #SueldoGroup : {
    $Type : 'UI.FieldGroupType',
    Data : [
      { $Type : 'UI.DataField', Value : SUELDO, Label : 'Sueldo mensual' },
      { $Type : 'UI.DataField', Value : ID_EMPLEADO, Label : 'ID Empleado' }
    ]
  },
  UI.Facets : [
    { $Type : 'UI.ReferenceFacet', ID : 'GeneratedFacet1', Label : 'General Information', Target : '@UI.FieldGroup#GeneratedGroup' },
    { $Type : 'UI.ReferenceFacet', ID : 'SalarySection', Label : 'Detalles Sueldo', Target : '@UI.FieldGroup#SueldoGroup' }
  ],
  UI.LineItem : [
    { $Type : 'UI.DataField', Label : 'ID_EMPLEADO', Value : ID_EMPLEADO },
    { $Type : 'UI.DataField', Label : 'NOMBRE', Value : NOMBRE },
    { $Type : 'UI.DataField', Label : 'APELLIDO', Value : APELLIDO },
    { $Type : 'UI.DataField', Label : 'SUELDO', Value : SUELDO }
  ],
  UI.SelectionFields : [ APELLIDO ]
);

annotate service.EmpleadosDirecto with {
  APELLIDO @(
    Common.Label : 'APELLIDO',
    Common.ValueList : {
      $Type : 'Common.ValueListType',
      CollectionPath : 'EmpleadosDirecto',
      Parameters : [
        {
          $Type : 'Common.ValueListParameterInOut',
          LocalDataProperty : APELLIDO,
          ValueListProperty : 'NOMBRE'
        }
      ]
    },
    Common.ValueListWithFixedValues : true
  )
};

annotate service.EmpleadosDirecto with {
  SUELDO @Common.Label : 'SUELDO'
};

annotate service.EmpleadosDirecto with @UI.Identification : [
  { $Type: 'UI.DataField', Value: ID_EMPLEADO },
  { $Type: 'UI.DataField', Value: NOMBRE },
  { $Type: 'UI.DataField', Value: APELLIDO }
];

annotate service.EmpleadosDirecto with @UI.HeaderInfo : {
  TypeName : 'Empleado',
  TypeNamePlural : 'Empleados',
  Title : { $Type : 'UI.DataField', Value : NOMBRE },
  Description : { $Type : 'UI.DataField', Value : APELLIDO }
};