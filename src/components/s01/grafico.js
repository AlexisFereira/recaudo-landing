import React from "react";
import styled from "@emotion/styled";
import AnimatedEle from "../animaEle";
import Hojas from "./../animaEle/hojas";
import Factura from "./../../img/factura.png";


const Container = styled.div`
    position:relative;
    max-width:500px;
    margin: 0 0 0 auto;
    
    .facturaBack{
    position: absolute;
    width: 56%;
    background: #cbcbcb;
    height: 80%;
    top: 6%;
    left: 31%;
    border-radius: 6px;
   }
   
   img{
    width:100%;
    position:relative;
    z-index:5;
   }
`;

function GraficoAnimado() {
    return (
        <Container>
            <img src={Factura} alt="" className={"px-0 col-12"}/>
            <div className="facturaBack"></div>
            <AnimatedEle width={"20%"} origin={"bottom center"} top={"10%"} left={"22%"} time={"1s"} nameAnima={"saluda2"} height={"20%"} left={"20%"}>
                <Hojas  height={"100%"} />
            </AnimatedEle>
            <AnimatedEle origin={"bottom center"} width={"30%"} top={"auto"} bottom={"23%"} left={"70%"} zI={1} height={"35%"}>
                <Hojas icon={"6"} height={"100%"}/>
            </AnimatedEle>
            <AnimatedEle origin={"bottom center"} time={"2s"} width={"28%"} top={"auto"} bottom={"20%"}  left={"65%"} height={"30%"} zI={3}>
                <Hojas icon={"5"} height={"100%"}/>
            </AnimatedEle>
            <AnimatedEle origin={"bottom center"}  zI={2} time={"1s"} width={"28%"} top={"auto"} bottom={"25%"}  left={"68%"} height={"35%"} >
                <Hojas icon={"8"} height={"100%"}/>
            </AnimatedEle>
        </Container>
    )
}

export default React.memo(GraficoAnimado);
