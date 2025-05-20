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
);

