import React from "react";
import Flex from "../Flex";
import TitleDesc from "../titleDesc";
import styled from "@emotion/styled";
import pasos from "./../../img/Pasos.png";
import ListItem from "../ListItem";
import Section05 from "../Section05";
import Section06 from "../Section06";

const Container = styled.div`
    position-relative;
    with:100%;
`;

function Section04() {
    return (
        <Container className={"py-5"}>
            <div className="col-12 col-md-8 col-lg-7 mx-auto pb-4">
                <TitleDesc
                    sizeT={"28px"}
                    text={"Archivo"}
                    description={"Ideal para empresas que emiten facturación de manera recurrente como servicios públicos, educación, administración de edificios o simplemente controlar cuanto y que clientes deben pagar."}
                />
            </div>
            <Flex className={"container px-lg-0 py-3"}>
                <div className="col-12 col-md-6 pl-md-0 order-2 order-md-0 px-0 text-center text-md-left">
                    <img src={pasos} alt="" width={"80%"} height={"auto"} className={"mx-auto mx-md-auto"}/>
                </div>
                <div className="col-12 col-md-6 px-md-0 px-0">
                    <div className="wc m460 mx-0 mx-md-auto pb-4 pb-md-0">
                        <p>Con Recaudo a través de Archivo, no pierda ningún pago, cargue un archivo
                            en cualquier formato, defina que información verán y como consultaran sus obligaciones los
                            clientes, apropiado para el cobro de:
                        </p>
                        <ListItem text={"Arrendamiento."}/>
                        <ListItem text={"Administración horizontal."} />
                        <ListItem text={"Educación."} />
                        <ListItem text={"Impuestos."} />
                        <ListItem text={"Servicios de agua, gas y luz."} />
                        <ListItem text={"Telefónica fija y celular."} />
                        <ListItem text={"TV por cable y satélite."} />
                        <ListItem text={"Créditos."} />
                        <ListItem text={"Muchos más…"} />

                        <p className={"mb-0"}>Administre un proyecto de recaudo según sus necesidades, Recaudo Archivo
                            es 100% administrable y se ajustes a todos sus requisitos para cobrar fácilmente.</p>
                    </div>
                </div>
            </Flex>
            <Section05/>
            <Section06/>
        </Container>
    )
};

export default Section04;
