import React from "react";
import TitleDesc from "../titleDesc";
import ListItem from "../ListItem";
import Flex from "../Flex";
import Grafico from "./grafico";
function Section08() {
    return (
        <div className={"wc"}>
            <Flex className={"container px-lg-0 py-4 py-lg-5"}>
                <div className="col-12 col-md-6 pl-md-0 order-2 order-md-0 px-0">
                    <Grafico/>
                </div>
                <div className="col-12 col-md-6 px-md-0 px-0">
                    <div className="wc m460 mx-0 mx-md-auto pb-4 pb-md-0">
                        <TitleDesc
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
        </div>
    )
};

export default Section08;
