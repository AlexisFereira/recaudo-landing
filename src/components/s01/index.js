
import React from "react";
import Flex from "../Flex";
import styled from "@emotion/styled";
import boy from "./../../img/Frame.png"
import calc from "./../../img/Recaudo.png";
import ep from "./../../img/epayco-b.png";
import curva from "./../../img/curva01.png";
import Monedas from "./monedas";
import GraficoAnimado from "./grafico"


let Grafico = styled.div`
    position:relative;
    
    .chico{
        position:absolute;
        max-width:200px;
        width:35%;
        right:60%;
        bottom:3%;
    }  
    
    .calculadora{
        width:100%;
        height:auto;
    }
    @media all and (max-width:768px){
    .chico{
            width:30%;
        }
    
    }
`;

let Contenedor = styled(Flex)`
    position:relative;
    height:auto;
    background:transparent url(${curva}) no-repeat center;
    background-size: cover;
    padding-top:50px;
    min-height: calc(100vh - 65px);
   
  
    
    @media all and (max-width:768px){
        padding-top:80px;
        background-size: auto 55%;
        background-position: center top;
    }
    
`;

function S01() {
    return (
        <Contenedor
            direction={"column"}
            jc={ window.innerWidth > 766 ? "center" : "flex-start" }
        >
            <Flex
                className="container px-md-0"

            >
                    <div className="col-12 col-md-6 px-0 position-relative order-2 order-md-0">
                        {/*<Monedas*/}
                        {/*    left={"auto"}*/}
                        {/*    right={"20%"}*/}
                        {/*/>*/}
                        <img
                            src={ep} alt=""
                            height={"50px"}
                            width={"auto"}
                            className={"mb-3"}
                        />
                        <p className={"ttl"}>Portal de recaudo</p>
                        <p className={"m460"}>
                            Con nuestra amplia experiencia en el procesamiento de pagos, recaudo, resuelve las principales
                            necesidades de su empresa al necesitar recibir pagos sobre la emisión de facturas o prestación de
                            servicios.
                            <br/><br/>
                            Portal de recaudo le permite a empresas pequeñas o grandes controlar los pagos de sus facturas o recibir
                            recaudos de forma simplificada a través de diferentes opciones y reglas.
                        </p>
                    </div>
                    <Grafico className="col-12 col-md-6 px-0 mb-4 mb-md-0" id={"g01"}>
                        {/*<img src={calc} alt="" className={"calculadora"}/>*/}
                        <GraficoAnimado/>
                        <img src={boy} alt=""   className={"chico"}/>
                    </Grafico>
            </Flex>
        </Contenedor>
    )
};

export default S01;
