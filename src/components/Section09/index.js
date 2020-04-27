import React from "react";
import Flex from "../Flex";
import Btn from "../Btn";
import styled from "@emotion/styled";
import hombre from "./../../img/Hombre.png";
import onda from "./../../img/Onda.png";
import desk from "./../../img/Escritorio.png";
import repisa from "./../../img/Repisa.png";


const Container = styled.div`
    display:flex;
    flex-flow:column wrap;
    justify-content:flex-start;
    align-item:center;
    padding-top:80px;
    background-image: 
        url(${onda}),
        url(${desk}),
        url(${repisa})
    ;
    background-repeat:   no-repeat;
    background-position: bottom center, 80% center,20% center;
    background-size:     100% auto, 30% auto,10% auto;
    width:100%;
    min-height:75vh;
    
    @media all and (max-width:768px){
        .man{
            max-width:100px;
        }
    } 
    
    @media all and (min-height:600px){
        justify-content:center;
    }
`;



function Section09() {
    return (
        <Container className={"wc"} name="last" id={"creaCuenta"}>
                <div className="container px-0 ">
                    <Flex className={"wc px-lg-0 py-4 py-lg-5 px-sm-0"}>
                        <Flex flex={"0 0 180px"} className={"man"}>
                            <img src={hombre} alt="" width={"100%"} height={"auto"} className={"d-flex"}/>
                        </Flex>
                        <div className="col-12 col-md-6 text-center ">
                            <h2>Cree su primer proyecto de Recaudo</h2>
                            <p>y comience a disfrutar nuestros servicios</p>

                            <Flex className={"pt-4"} flex={"1 0 50%"}>
                                <div className="col-12 col-sm-6 col-lg-6 mb-3 mb-sm-0 px-0 pr-sm-2">
                                    <Btn onClick={()=>
                                        window.location.href = "https://dashboard.epayco.co/login#registro"
                                    }>Crear cuenta</Btn>
                                </div>
                                <div className="col-12 col-sm-6 mb-3 mb-sm-0 px-0 pl-sm-2">
                                    <Btn
                                        onClick={()=>
                                            window.location.href = "https://dashboard.epayco.co/login"
                                        }
                                        type={"line"}>Iniciar sesión
                                    </Btn>
                                </div>
                            </Flex>
                        </div>
                    </Flex>
                </div>
        </Container>
    )
};

export default Section09;
