import React from "react";
import styled from "@emotion/styled";
import campos  from "./../../img/g04/campos.png";
import AnimatedEle from "./../animaEle";
import Hojas from "./../animaEle/hojas";


const Container = styled.div`
    position:relative;
    max-width:400px;
    
    img{
        width:100%;
        height:auto;
        display:block;
        position:relative;
        z-index:5;
    }
    
    .capa{
        position:absolute;
        width:90%;
        height:90%;
        border-radius:5px;
        background:#999999;
        z-index:2;
        top:2%;
        left:3%;
        transform:rotate(-3deg);
    }
    
   
    .capa.dos{
        top:5%;
        left:5%;
        background:#cbcbcb;
        transform:rotate(3deg);
    }
`;

function Grafico() {
    return (
        <Container>
            <AnimatedEle height={"20%"} width={"25%"} top={"50%"} zI={"3"} origin={"bottom center"} left={"-5%"} nameAnima={"saluda2"}>
                <Hojas height={"100%"}/>
            </AnimatedEle>
            <AnimatedEle height={"25%"} width={"25%"} top={"45%"} zI={"3"} origin={"bottom center"} left={"-5%"} nameAnima={"saluda2"}>
                <Hojas height={"100%"} icon={2}/>
            </AnimatedEle>
            <AnimatedEle height={"30%"} width={"25%"} top={"30%"} zI={"3"} origin={"bottom center"} left={"80%"} time={"2.5s"}>
                <Hojas height={"100%"} icon={6}/>
            </AnimatedEle>
            <AnimatedEle height={"25%"} width={"25%"} top={"45%"} zI={"3"} origin={"bottom center"} left={"77%"} time={"2s"}>
                <Hojas height={"100%"} icon={5}/>
            </AnimatedEle>

            <div className="capa"></div>
            <div className="capa dos"></div>
            <img src={campos} alt=""/>
        </Container>
    )
}

export default React.memo(Grafico);
