import React from "react";

export const NamesF = {
    todos:[
        {name:"Múltiples medios de pago",
            tool:"Sus clientes pueden realizar pagos por los diferentes medios de pago que tenemos disponibles," +
                "Tarjetas de Crédito, PSE, Internacional, Efectivo, Daviplata y Davivienda, según el tipo de" +
                "vinculación a ePayco." ,
            height:50
        },
        {
            name:"Múltiples monedas de pago",
            tool:"Puede recibir pagos en Pesos Colombianos y Dólares Estadounidenses." ,
            height:50
        },
        {
            name:"Número de proyectos a configurar sin importar el tipo de recaudo",
            tool:"Reciba pagos en sitios diferentes y personalizados, configure los tipos de recaudo que requiera.",
            height:76
        },
        {
            name:"Personalización del sitio web de pagos o recaudos",
            tool:"Seleccione una plantilla y cambie el orden de los campos, colores, imágenes y mucho más del sitio de pago o recaudos." ,
            height:52
        },
        {
            name:"Construcción y descarga de reportes detallados",
            tool:"Construya y descargue los pagos recibidos y pendientes en múltiples formatos para su fácil conciliación y validación." ,
            height:52
        },
        {
            name:"Texto de ayuda o información",
            tool:"Incluya un texto de ayuda a cada campo para facilitar el diligenciamiento de la información." ,
            height:50
        },
        {
            name:"URL de confirmación de pagos",
            tool:"Configure una URL por proyecto a la cual se le enviará la confirmación de un pago por Get o Post.",
            height:50
        },
        {
            name:"Consulta de registros en línea",
            tool:"Consulte y visualice en línea la información del estado de los pagos y las facturas o registros.",
            height:50
        }
    ],
    archivo:[
        {
            name:"Número de registros o facturas máximos a cargar",
            tool:"Corresponde al número de registros o facturas que puede crear o cargar para que sus clientes las paguen.",
            height:52
        },
        {
            name:"Soporte a múltiples tipos de archivos para el cargue de registros o facturas",
            tool:"Se permiten cargar archivos en diferentes estructuras como Excel, Asobancaria (98, 2001 y 2011), txt y csv, también puede personalizar el tipo de separador de columnas (|,-./; y más).",
            height:74
        },
        {
            name:"Creación de registros o facturas manualmente",
            tool:"Puede crear un registro o factura a través de un formulario sin requerir el cargue de un archivo.",
            height:52
        },
        {
            name:"Hasta tres fechas de vencimiento por registro o factura",
            tool:"Registre hasta 3 fechas de vencimiento de una factura con sus respectivos conceptos y valores de pago.",
            height:74
        },
        {
            name:"Modificación de registros o facturas en línea",
            tool:"Consulte las facturas cargadas, modifique el valor a pagar, fechas de vencimiento, entre otros. También puede deshabilitar los registros para que no se muestre al usuario, en caso de realizar pagos en otro canal.",
            height:52
        },
        {
            name:"Múltiples valores para la consulta de facturas",
            tool:"Defina diferentes criterios para que sus clientes consulten las facturas pendientes por pago, por ejemplo, numero de factura, número de identificación y referencia de pago.",
            height:52
        },
        {
            name:"Administración de facturas por Api",
            tool:"Consulte y cree las facturas a través de un servicio sin cargar o crear registros de forma manual.",
            height:52
        },
        {
            name:"Pagos parciales",
            tool:"Permita que sus clientes puedan modificar el valor a pagar de una factura por encima o por debajo del valor de esta.",
            height:50
        },
        {
            name:"Consecutivos a los números de factura",
            tool:"Agregue fácilmente un consecutivo a las facturas cargadas en caso de no contar con un número de factura.",
            height:52
        },
        {
            name:"Múltiples valores para pago",
            tool:"Su cliente puede seleccionar entre uno y tres valores para realizar el pago, en caso de manejar múltiples valores en un solo registro o factura.",
            height:50
        },
        {
            name:"Múltiples pagos a una misma factura",
            tool:"Permita a sus clientes realizar varios pagos a una misma factura hasta completar la totalidad de esta.",
            height:52
        },
        {
            name:"Agrupar facturas para pago",
            tool:"Permita a sus clientes seleccionar más de una factura y realizar el pago de estas de forma agrupada y no una a una.",
            height:50
        },
    ],
    web:[
        {
            name:"Múltiples medios de pago",
            tool:"Defina un título y descripción personalizada al formulario de recaudo.",
            height:50
        },
        {
            name:"Múltiples monedas de pago",
            tool:"Personalice el formulario con campos tipo texto, moneda, fecha y hora.",
            height:50
        },
        {
            name:"Numero de proyectos a configurar sin importar el tipo de recaudo",
            tool:"Defina el comportamiento del campo como una lista desplegable, cacilla de verificación múltiple, botón de única selección y descripción larga.",
            height:74
        },
        {
            name:"Personalización del sitio web de pagos o recaudos",
            tool:"Defina fácilmente que campos son obligatorios y que campos son opcionales.",
            height:50
        },
    ]
};

export const gratis = {
    todos:[
        {
            value:1,
            type:"bool",

        },
        {
            value:1,
            type:"bool",

        },
        {
            value:1,
            type:"text",
        },
        {
            value:1,
            type:"bool",

        },
        {
            value:1,
            type:"bool",

        },
        {
            value:1,
            type:"bool",

        },
        {
            value:1,
            type:"bool",

        },
        {
            value:1,
            type:"bool",

        },
    ],
    archivo:[
        {
            type:"text",
            value: <b>300/Mes <br/> 3.600/año</b>
        },
        {
            value:1,
            type:"bool",
        },
        {
            value:0,
            type:"bool",
        },
        {
            value:0,
            type:"bool",

        },
        {
            value:0,
            type:"bool",

        },
        {
            value:1,
            type:"bool",

        },
        {
            value:0,
            type:"bool",

        },
        {
            value:1,
            type:"bool",

        },
        {
            value:1,
            type:"bool",

        },
        {
            value:0,
            type:"bool",
        },
        {
            value:0,
            type:"bool",

        },
        {
            value:0,
            type:"bool",
        },
    ],
    web: [
        {
            value:1,
            type:"bool",
        },
        {
            value:1,
            type:"bool",

        },
        {
            value:1,
            type:"bool",
        },
        {
            value:1,
            type:"bool",
        },
    ]
};

export const basico = {
    todos:[
        {
            value:1,
            type:"bool",

        },
        {
            value:1,
            type:"bool",

        },
        {
            type:"text",
            value:"2"
        },
        {
            value:1,
            type:"bool",

        },
        {
            value:1,
            type:"bool",

        },
        {
            value:1,
            type:"bool",

        },
        {
            value:1,
            type:"bool",

        },
        {
            value:1,
            type:"bool",

        },
    ],
    archivo:[
        {

            type:"text",
            value: <b>1000/Mes <br/> 12.000/año</b>
        },
        {
            value:1,
            type:"bool",
        },
        {
            value:1,
            type:"bool",
        },
        {
            value:1,
            type:"bool",

        },
        {
            value:1,
            type:"bool",

        },
        {
            value:1,
            type:"bool",

        },
        {
            value:0,
            type:"bool",

        },
        {
            value:1,
            type:"bool",

        },
        {
            value:1,
            type:"bool",

        },
        {
            value:0,
            type:"bool",
        },
        {
            value:1,
            type:"bool",

        },
        {
            value:1,
            type:"bool",

        },
    ],
    web: [
        {
            value:1,
            type:"bool",
        },
        {
            value:1,
            type:"bool",

        },
        {
            value:1,
            type:"bool",
        },
        {
            value:1,
            type:"bool",
        },
    ]
};

export const pro = {
    todos:[
        {
            value:1,
            type:"bool",

        },
        {
            value:1,
            type:"bool",

        },
        {
            value:1,
            type:"text",
            text:"3"
        },
        {
            value:1,
            type:"bool",

        },
        {
            value:1,
            type:"bool",

        },
        {
            value:1,
            type:"bool",

        },
        {
            value:1,
            type:"bool",

        },
        {
            value:1,
            type:"bool",

        },
    ],
    archivo:[
        {

            type:"text",
            value: <b>300/Mes <br/> 36.000/año</b>
        },
        {
            value:1,
            type:"bool",
        },
        {
            value:1,
            type:"bool",
        },
        {
            value:1,
            type:"bool",

        },
        {
            value:1,
            type:"bool",

        },
        {
            value:1,
            type:"bool",

        },
        {
            value:0,
            type:"bool",

        },
        {
            value:1,
            type:"bool",

        },
        {
            value:1,
            type:"bool",

        },
        {
            value:0,
            type:"bool",
        },
        {
            value:1,
            type:"bool",

        },
        {
            value:1,
            type:"bool",

        },
    ],
    web: [
        {
            value:1,
            type:"bool",
        },
        {
            value:1,
            type:"bool",

        },
        {
            value:1,
            type:"bool",
        },
        {
            value:1,
            type:"bool",
        },
    ]
};

export const plus = {
    todos:[
        {
            value:1,
            type:"bool",

        },
        {
            value:1,
            type:"bool",

        },
        {
            type:"text",
            value:"Ilimitado"
        },
        {
            value:1,
            type:"bool",

        },
        {
            value:1,
            type:"bool",

        },
        {
            value:1,
            type:"bool",

        },
        {
            value:1,
            type:"bool",

        },
        {
            value:1,
            type:"bool",

        },
    ],
    archivo:[
        {

            type:"text",
            value:<b>Ilimitado</b>
        },
        {
            value:1,
            type:"bool",
        },
        {
            value:1,
            type:"bool",
        },
        {
            value:1,
            type:"bool",

        },
        {
            value:1,
            type:"bool",

        },
        {
            value:1,
            type:"bool",

        },
        {
            value:1,
            type:"bool",

        },
        {
            value:1,
            type:"bool",

        },
        {
            value:1,
            type:"bool",

        },
        {
            value:1,
            type:"bool",
        },
        {
            value:1,
            type:"bool",

        },
        {
            value:1,
            type:"bool",

        },
    ],
    web: [
        {
            value:1,
            type:"bool",
        },
        {
            value:1,
            type:"bool",

        },
        {
            value:1,
            type:"bool",
        },
        {
            value:1,
            type:"bool",
        },
    ]
};


