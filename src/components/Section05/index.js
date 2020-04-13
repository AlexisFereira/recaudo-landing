import React from "react";
import Flex from "../Flex";
import TitleDesc from "../titleDesc";
import styled from "@emotion/styled";
import iconos from "./../../img/Iconos.png"
import {Colors} from "../Btn";

const Icon = styled.div`
    background:transparent url(${iconos}) no-repeat;
    background-position: 0 ${props => props.number};
    background-size:100% auto;
    width: 50px;
    height: 50px;
    margin-bottom:15px;
`;

function Section05() {
    return (
        <Flex className={"container px-md-0"} alg={"flex-start"}>
            <Flex
                className="col-12 col-md-7 px-0 pr-md-2 mb-3"
                jc={"flex-start"}
                alg={"flex-start"}
            >
                <TitleDesc
                    sizeT={"20px"}
                    direction={"left"}
                    className={"pb-4"}
                    colorT={Colors.naranja}
                    text={"Características de Archivo"}
                    description={"Adicional a las características previas, el servicio de Archivo de Recaudo ofrece las siguientes características que facilitan el proceso de recaudo."}
                />
                <Flex flex={"1 0 250px"} className={"p-2"}>
                    <TitleDesc
                        sizeT={"16px"}
                        direction={"left"}
                        litle
                        text={"Fechas de vencimiento"}
                        description={"Configuración desde una y hasta tres fechas de vencimiento en cada factura con su respectivo valor de mora, impuesto y descripción."}
                    />
                </Flex>
                <Flex flex={"1 0 250px"} className={"p-2"}>
                    <TitleDesc
                        sizeT={"16px"}
                        direction={"left"}
                        litle
                        text={"Pagos parciales"}
                        description={"Los usuarios pueden modificar el valor a pagar de una factura por encima o por debajo del valor de esta."}
                    />
                </Flex>
                <Flex flex={"1 0 250px"} className={"p-2"}>
                    <TitleDesc
                        sizeT={"16px"}
                        direction={"left"}
                        litle
                        text={"Consecutivos a los números de factura"}
                        description={"Se permite agregar fácilmente un consecutivo a las facturas cargadas en caso de no contar con un número de factura."}
                    />
                </Flex>
                <Flex flex={"1 0 250px"} className={"p-2"}>
                    <TitleDesc
                        sizeT={"16px"}
                        direction={"left"}
                        litle
                        text={"Múltiples valores para pago"}
                        description={"Un usuario puede seleccionar entre uno y tres valores para realizar el pago."}
                    />
                </Flex>
                <Flex flex={"1 0 250px"} className={"p-2"}>
                    <TitleDesc
                        sizeT={"16px"}
                        direction={"left"}
                        litle
                        text={"Múltiples pagos a una misma factura"}
                        description={"Con esta opción los usuarios pueden realizar varios pagos a una misma factura hasta completar la totalidad de esta."}
                    />
                </Flex>
                <Flex flex={"1 0 250px"} className={"p-2"}>
                    <TitleDesc
                        sizeT={"16px"}
                        direction={"left"}
                        litle
                        text={"Agrupar facturas para pago"}
                        description={"Los usuarios pueden seleccionar más de una factura y realizar el pago de estas de forma agrupada y no una a una."}
                    />
                </Flex>
            </Flex>
            <Flex className={"col-12 col-md-5"} flex={"1 0 auto"}>

            </Flex>
        </Flex>
    )
};

export default Section05;
