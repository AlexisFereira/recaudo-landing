import React from "react";
import styled from "@emotion/styled";
import formulario  from "./../../img/g07/Formulario.png";
import AnimatedEle from "./../animaEle";
import Hojas from "./../animaEle/hojas";


const Container = styled.div`
    position:relative;
    max-width:500px;
    margin: 0 0 0 auto;
    
    img{
        width:100%;
        height:auto;
        display:block;
        position:relative;
        z-index:5;
    }
    
    .capa{
        position:absolute;
        width:100%;
        height:100%;
        border-radius:5px;
        background:#999999;
        z-index:2;
        top:0;
        left:0;
        transform:rotate(-3deg);
    }
    
   
    .capa.dos{
        top:0;
        left:0;
        background:#cbcbcb;
        transform:rotate(1deg);
    }
`;

function Grafico() {
    return (
        <Container>
            <AnimatedEle height={"20%"} width={"25%"} top={"auto"} bottom={"0"} zI={"2"} origin={"bottom center"} left={"90%"} >
                <Hojas height={"100%"}/>
            </AnimatedEle>
            <AnimatedEle height={"25%"} width={"25%"} top={"auto"} bottom={"0"} zI={"3"} origin={"bottom center"} left={"85%"} >
                <Hojas height={"100%"} icon={2}/>
            </AnimatedEle>
            <AnimatedEle height={"30%"} width={"25%"} top={"auto"} bottom={0} zI={"3"} origin={"bottom center"} left={"-10%"} time={"2.5s"} nameAnima={"saluda2"}>
                <Hojas height={"100%"} icon={6}/>
            </AnimatedEle>
            <AnimatedEle height={"25%"} width={"25%"} top={"auto"} bottom={0} zI={"3"} origin={"bottom center"} left={"-10%"} time={"2s"} nameAnima={"saluda2"}>
                <Hojas height={"100%"} icon={5}/>
            </AnimatedEle>
            <AnimatedEle height={"40%"} width={"25%"} top={"auto"} bottom={0} zI={"2"} origin={"bottom center"} left={"-4%"} time={"3s"} nameAnima={"saluda2"}>
                <Hojas height={"100%"} icon={8}/>
            </AnimatedEle>

            <div className="capa"></div>
            <div className="capa dos"></div>
            <img src={formulario} alt=""/>
        </Container>
    )
}

export default React.memo(Grafico);
