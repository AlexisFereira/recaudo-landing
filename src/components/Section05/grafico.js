import React from "react";
import styled from "@emotion/styled";
import Hojas ,{Docs} from "./../animaEle/hojas";
import AnimatedEle from "./../animaEle";
import chico from "./../../img/g05/chico.png";
import Flex from "../Flex";
import {Colors} from "../Btn";


const Container = styled.div`
    position:relative;
    width:100%;
    max-width:450px;
    min-height:450px;
    
    img{
        display:block;
        width:100%;
        height:auto;
        position:absolute;
        bottom: 0;
        z-index:2;
        left:0;
    }
    
    .card{
        width:80%;
        max-width:300px;
        box-shadow:0 1px 3px rgba(0,0,0,.3);
        margin:auto;         
    }
`;

const Barrita = styled.div`
    width:100%;
    height:5px;
    border-radius:3px;
    background:#e4e4e4;
    text-align:left;
    overflow:hidden;
    position:relative;
    
    .carga {
        height:100%;
        width:100%;
        animation: creceX ${props => props.time} linear infinite;
        background: rgba(0,0,0,.3)};
        margin:0;
    }
`;


const UpFile = ({name,time})=>{
    return(
        <Flex>
            <Flex className={"px-2 py-1"} flex={"0 0 60px"}>
                <Docs icon={2} height={"40px"} />
            </Flex>
            <Flex flex={"1 0 60%"} jc={"flex-start"} className={"p-2"}>
                <small><b>{name}</b></small>
                <div className="wc p-2">
                    <Barrita time={time}>
                        <div className="carga"></div>
                    </Barrita>
                </div>
            </Flex>
        </Flex>
    )
};

function Grafico() {
    return (
        <Container>
            <div className="card">
                <div className="card-header">
                    <b>Archivos recaudo</b>
                </div>
                <div className="wc p-2">
                    <UpFile name={"Archivo Recaudo01.txt"} time={"5s"}/>
                    <UpFile name={"Archivo Recaudo02.xls"} time={"8s"}/>
                    <UpFile name={"Archivo Recaudo03.txt"} time={"12s"}/>
                    <UpFile name={"Archivo Recaudo04.xls"} time={"10s"}/>
                </div>
            </div>
            <img src={chico} alt=""/>

            <AnimatedEle origin={"bottom center"} left={"85%"} height={"30%"} width={"20%"} top={"auto"} bottom={"0"} time={"1.5s"}>
                <Hojas icon={8} height={"100%"}/>
            </AnimatedEle>
            <AnimatedEle origin={"bottom center"} left={"80%"} height={"20%"} width={"20%"} top={"auto"} bottom={"0"} time={"2s"} zI={3}>
                <Hojas icon={7} height={"100%"}/>
            </AnimatedEle>
            <AnimatedEle origin={"bottom center"} left={"85%"} height={"30%"} width={"20%"} top={"auto"} bottom={"0"} nameAnima={"saluda2"} time={"1.8s"}>
                <Hojas icon={6} height={"100%"}/>
            </AnimatedEle>
            <AnimatedEle origin={"bottom center"} left={"85%"} height={"20%"} width={"20%"} top={"auto"} bottom={"0"} nameAnima={"saluda"} time={"1.8s"}>
                <Hojas icon={6} height={"100%"}/>
            </AnimatedEle>
        </Container>
    )
}

export default React.memo(Grafico);
