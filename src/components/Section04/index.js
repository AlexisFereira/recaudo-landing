import React from "react";
import Flex from "../Flex";
import TitleDesc from "../titleDesc";
import styled from "@emotion/styled";
import pasos from "./../../img/Pasos.png";

const Container =styled.div`
    position-relative;
    with:100%;
`;

function Section04() {
    return (
        <Container name={"cuatro"}>
            <Flex className={"container px-lg-0 py-4 py-lg-5"} >
                    <div className="col-12 col-md-6 pl-md-0 order-2 order-md-0 px-0 text-center text-md-left">
                        <img src={pasos} alt="" width={"80%"} height={"auto"} className={"mx-auto mx-md-auto"} />
                    </div>
                    <div className="col-12 col-md-6 px-md-0 px-0">
                        <div className="wc m460 mx-0 mx-md-auto pb-4 pb-md-0">
                            <TitleDesc
                                direction={"left"}
                                text={"Archivo"}
                                description={"Ideal para empresas que emiten facturación de manera recurrente como servicios públicos, educación, administración de edificios o simplemente controlar cuento y que clientes deben pagar."}
                            />
                        </div>
                    </div>
            </Flex>
        </Container>
    )
};

export default Section04;
