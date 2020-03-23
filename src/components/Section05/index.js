import React from "react";
import Flex from "../Flex";
import TitleDesc from "../titleDesc";
import styled from "@emotion/styled";
import iconos from "./../../img/Iconos.png"

const Icon = styled.div`
    background:transparent url(${iconos}) no-repeat;
    background-position: 0 ${props=> props.number};
    background-size:100% auto;
    width: 50px;
    height: 50px;
    margin-bottom:15px;
`;

function Section05() {
    return (
        <div className={"wc pb-4 pb-lg-5"}>
            <div style={{maxWidth:"600px",margin:"auto"}} className={"pb-4 px-3"}>
                <TitleDesc
                    text={"Características de Archivo"}
                    description={"Adicional a las características previas, el servicio de Archivo de Recaudo ofrece las siguientes características que facilitan el proceso de recaudo."}
                />
            </div>
            <Flex className={"container px-md-0"} alg={"flex-start"}>
                <div className="col-12 col-md-6 col-lg-4 px-0 pr-md-2 mb-3">
                    <Icon
                        number={"0"}
                    />
                    <TitleDesc
                        direction={"left"}
                        litle
                        text={"Fechas de vencimiento"}
                        description={"Configuración desde una y hasta tres fechas de vencimiento en cada factura con su respectivo valor de mora, impuesto y descripción."}
                    />
                </div>

                <div className="col-12 col-md-6 col-lg-4 px-0 pl-md-2 px-lg-1 mb-3 ">
                    <Icon
                        number={"20%"}
                    />
                    <TitleDesc
                        direction={"left"}
                        litle
                        text={"Pagos parciales"}
                        description={"Los usuarios pueden modificar el valor a pagar de una factura por encima o por debajo del valor de esta."}
                    />
                </div>

                <div className="col-12 col-md-6 col-lg-4 px-0 pl-md-2 mb-3">
                    <Icon
                        number={"40%"}
                    />
                    <TitleDesc
                        direction={"left"}
                        litle
                        text={"Consecutivos a los números de factura"}
                        description={"Se permite agregar fácilmente un consecutivo a las facturas cargadas en caso de no contar con un número de factura."}
                    />
                </div>

                <div className="col-12 col-md-6 col-lg-4 px-0 pr-md-2 mb-3">
                    <Icon
                        number={"60%"}
                    />
                    <TitleDesc
                        direction={"left"}
                        litle
                        text={"Múltiples valores para pago"}
                        description={"Un usuario puede seleccionar entre uno y tres valores para realizar el pago."}
                    />
                </div>

                <div className="col-12 col-md-6 col-lg-4 px-0 pl-md-2 px-lg-1  mb-3 ">
                    <Icon
                        number={"60%"}
                    />
                    <TitleDesc
                        direction={"left"}
                        litle
                        text={"Múltiples pagos a una misma factura"}
                        description={"Con esta opción los usuarios pueden realizar varios pagos a una misma factura hasta completar la totalidad de esta."}
                    />
                </div>

                <div className="col-12 col-md-6 col-lg-4 px-0 pl-md-2">
                    <Icon
                        number={"80%"}
                    />
                    <TitleDesc
                        direction={"left"}
                        litle
                        text={"Agrupar facturas para pago"}
                        description={"Los usuarios pueden seleccionar más de una factura y realizar el pago de estas de forma agrupada y no una a una."}
                    />
                </div>

            </Flex>
        </div>
    )
};

export default Section05;
