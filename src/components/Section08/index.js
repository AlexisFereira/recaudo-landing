import React from "react";
import TitleDesc from "../titleDesc";
import ListItem from "../ListItem";
import Flex from "../Flex";
import Grafico from "./grafico";
import {Colors} from "../Btn";
function Section08() {
    return (
         <Flex className={"wc pt-4"}>
                <div className="col-12 col-md-6 pl-md-0 order-2 order-md-0 px-0">
                    <Grafico/>
                </div>
                <div className="col-12 col-md-6 px-md-0 px-0">
                    <div className="wc m460 mx-0 mx-md-auto pb-4 pb-md-0">
                        <TitleDesc
                            colorT={Colors.naranja}
                            sizeT={"20px"}
                            className={"pb-3"}
                            direction={"left"}
                            text={"Proceso de pago"}
                            description={"Al configurar y cargar en ePayco las facturas pendientes de pago, el usuario ingresa en la URL del proyecto y realiza el siguiente proceso para completar el pago:"}
                        />

                        <ListItem
                            number={"1"}
                            text={"Ingresa los criterios de consulta definidos por la empresa."}
                        />

                        <ListItem
                            number={"2"}
                            text={"Verifica las facturas pendientes."}
                        />

                        <ListItem
                            number={"3"}
                            text={"Realiza el pago."}
                        />

                        <ListItem
                            number={"4"}
                            text={"Verifica el detalle de la transacción."}
                        />


                    </div>

                </div>

            </Flex>
    )
};

export default Section08;
