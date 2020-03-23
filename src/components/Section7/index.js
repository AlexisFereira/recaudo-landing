import React from "react";
import TitleDesc from "../titleDesc";
import Flex from "../Flex";
import formu from "./../../img/formulario.png";

function Section07() {
    return (
        <div className={"wc"}>
            <Flex className={"container px-md-0 py-4 py-lg-5"}>
                <div className="col-12 col-md-6 px-0">
                    <div className="wc m460 mx-0 mx-md-auto pb-4 pb-md-0">
                        <TitleDesc
                            direction={"left"}
                            text={"Formulario"}
                            description={"La opción más simplificada de recibir pagos, defina los campos del formulario y sus clientes ingresan el valor de esta información requerida, ideal para recibir donaciones o cualquier otro tipo de pago que no requiere una previa validación."}
                        />
                    </div>
                </div>
                <div className="col-12 col-md-6 pl-md-0 px-0">
                    <img src={formu}
                         alt=""
                         width={"100%"}
                         height={"auto"}
                    />
                </div>
            </Flex>
        </div>
    )
}

export default Section07;
