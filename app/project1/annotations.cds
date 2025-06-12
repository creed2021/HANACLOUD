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
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
        {
             $Type : 'UI.ReferenceFacet',
        ID : 'SalarySection',
        Label : 'Sueldo y Otros',
        Target : '@UI.FieldGroup#SueldoGroup',
        },
         {
             $Type : 'UI.ReferenceFacet',
        ID : 'SalarySection2',
        Label : 'Sueldo y Otros2',
        Target : '@UI.FieldGroup#SueldoGroup',
        },
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
        },
    ],
    UI.SelectionFields : [
        SUELDO,
        APELLIDO,
    ],
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
                    ValueListProperty : 'NOMBRE',
                },
            ],
        },
        Common.ValueListWithFixedValues : true,
    )
};

annotate service.EmpleadosDirecto with {
    SUELDO @Common.Label : 'SUELDO'
};

annotate service.EmpleadosDirecto with {
    NOMBRE @Common.Text : {
        $value : APELLIDO,
        ![@UI.TextArrangement] : #TextOnly,
    }
};

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

