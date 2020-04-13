import React from "react";
import Flex from "../Flex";
import TitleDesc from "../titleDesc";
import ListItem from "../ListItem";
import Grafico from "./grafico";
import Section03 from "../Section03";

function Section02() {
    return (
        <div className={"wc position-relative"}>
            <div className="container py-4 py-lg-5">
                <TitleDesc
                    text={"Principales características "}
                    description={"El servicio de recaudo cuenta con las siguientes opciones que le facilitan el cobro de facturas o recibir pagos:"}
                />
            </div>
            <Flex className={"container pb-4 pb-lg-5"}>
                <div className="col-12 col-md-6 order-2 order-md-0 px-0">
                    <Grafico/>
                </div>
                <div className="col-12 col-md-6 px-0">
                    <div className="m460 mx-0 mx-md-auto pb-4 pb-md-0">
                        <TitleDesc
                            className={"pb-3"}
                            direction={"left"}
                            text={"Personalización del portal de recaudo"}
                            description={"Entendemos que la comunicación con sus clientes es única, por esto nuestra portal de recaudo puede ser personalizado al mas fino detalle, los siguientes son los principales aspectos que puede personalizar en su portal de recaudo."}
                        />
                        <ListItem
                            text={"Defina un logo personalizado por proyecto y por recaudo."}
                        />
                        <ListItem
                            text={"Personalización del nombre de subdominio y nombre del recaudo."}
                        />
                        <ListItem
                            text={"Asigne un nombre personalizado a los campos que visualizarán los usuarios y establezca más de un criterio de consulta para las facturas."}
                        />
                        <ListItem
                            text={"Seleccione una de las 4 plantillas y ajuste el color."}
                        />

                    </div>
                </div>
            </Flex>

            <div className="container">
                <Section03/>
            </div>
        </div>
    )
};

export default Section02;
