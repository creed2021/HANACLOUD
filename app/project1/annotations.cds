using EmpleadosService as service from '../../srv/EmpleadosService';
annotate service.EmpleadosDirecto with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'ID_EMPLEADO',
                Value : ID_EMPLEADO,
            },
            {
                $Type : 'UI.DataField',
                Label : 'NOMBRE',
                Value : NOMBRE,
            },
            {
                $Type : 'UI.DataField',
                Label : 'APELLIDO',
                Value : APELLIDO,
            },
            {
                $Type : 'UI.DataField',
                Label : 'SUELDO',
                Value : SUELDO,
            },
        ],
    },
    UI.FieldGroup #SueldoGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : SUELDO,
                Label : 'Sueldo mensual',
            },
            {
                $Type : 'UI.DataField',
                Value : ID_EMPLEADO,
                Label : 'ID Empleado',
            }
        ]
    },
    UI.Facets : [
        {
            $Type : 'UI.CollectionFacet',
            ID : 'GeneralTab',
            Label : 'Datos Generales',
            Facets : [
                {
                    $Type : 'UI.ReferenceFacet',
                    ID : 'GeneralSection',
                    Label : 'General',
                    Target : '@UI.FieldGroup#GeneratedGroup'
                }
            ]
        },
        {
            $Type : 'UI.CollectionFacet',
            ID : 'SalaryTab',
            Label : 'Sueldo',
            Facets : [
                {
                    $Type : 'UI.ReferenceFacet',
                    ID : 'SalarySection',
                    Label : 'Información Salarial',
                    Target : '@UI.FieldGroup#SueldoGroup'
                }
            ]
        },
        {
            $Type : 'UI.CollectionFacet',
            ID : 'PruebaTab',
            Label : 'Prueba',
            Facets : [
                {
                    $Type : 'UI.ReferenceFacet',
                    ID : 'PruebaSection',
                    Label : 'Datos de Prueba',
                    Target : '@UI.FieldGroup#GeneratedGroup'
                }
            ]
        },
        {
            $Type : 'UI.CollectionFacet',
            ID : 'OtraInfoTab',
            Label : 'Otra Información',
            Facets : [
                {
                    $Type : 'UI.ReferenceFacet',
                    ID : 'OtraInfoSection',
                    Label : 'Extra',
                    Target : '@UI.FieldGroup#GeneratedGroup'
                }
            ]
        }
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'ID_EMPLEADO',
            Value : ID_EMPLEADO,
        },
        {
            $Type : 'UI.DataField',
            Label : 'NOMBRE',
            Value : NOMBRE,
        },
        {
            $Type : 'UI.DataField',
            Label : 'APELLIDO',
            Value : APELLIDO,
        },
        {
            $Type : 'UI.DataField',
            Label : 'SUELDO',
            Value : SUELDO,
            Criticality: SueldoCriticality
        },
    ],
    UI.SelectionFields : [
        SUELDO,
        APELLIDO,
    ],
);

annotate service.EmpleadosDirecto with @UI.Identification : [
    { $Type: 'UI.DataField', Value: ID_EMPLEADO },
    { $Type: 'UI.DataField', Value: NOMBRE },
    { $Type: 'UI.DataField', Value: APELLIDO }
];

annotate service.EmpleadosDirecto with @UI.HeaderInfo : {
  TypeName : 'Empleado',
  TypeNamePlural : 'Empleados',
  Title : {
    $Type : 'UI.DataField',
    Value : NOMBRE
  },
  Description : {
    $Type : 'UI.DataField',
    Value : APELLIDO
  }
};

@Capabilities.DeleteRestrictions.Deletable : false
entity EmpleadosDirecto {
    key ID_EMPLEADO : Integer;
    NOMBRE          : String(100);
    APELLIDO        : String(100);
    SUELDO          : Decimal(10,2);
}

annotate service.EmpleadosDirecto with @Capabilities.FilterRestrictions : {
    Filterable : true,
    NonFilterableProperties : []
};
