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
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
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

