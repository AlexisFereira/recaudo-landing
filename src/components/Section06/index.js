import React from "react";
import Flex from "../Flex";
import TitleDesc from "../titleDesc";
import ListItem from "../ListItem";
import Grafico from "./grafico";
import {Colors} from "../Btn";

function Section6() {
    return (
        <Flex className={"container px-lg-0 pt-4"}>
            <div className="col-12 col-md-6 pl-md-0 order-2 order-md-0 px-0">
                <Grafico/>
            </div>
            <div className="col-12 col-md-6 px-0 pl-md-4 pl-xl-0">
                <div className="wc m460 mx-0 mx-md-auto pb-4 pb-md-0">
                    <TitleDesc
                        direction={"left"}
                        className={"pb-3"}
                        colorT={Colors.naranja}
                        text={"Proceso de pago"}
                        sizeT={"20px"}
                        description={"Al configurar y cargar en ePayco las facturas pendientes de pago, el usuario ingresa en la URL del proyecto y realiza el siguiente proceso para completar el pago:"}
                    />
                    <ListItem
                        number={"1"}
                        text={"Ingresa los criterios de consulta definidos por la empresa."}
                    />
                    <ListItem
                        number={"2"}
                        text={"Selecciona la factura a pagar en caso de traer más de una."}
                    />
                    <ListItem
                        number={"3"}
                        text={"Verifica la información para realizar el pago."}
                    />
                    <ListItem
                        number={"4"}
                        text={"Obtiene un comprobante de la transacción."}
                    />
                </div>
            </div>
        </Flex>
    )
};

export default Section6;
