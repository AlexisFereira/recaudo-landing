import React from "react";
import styled from "@emotion/styled";

import chica from "./../../img/g02/Chica.png";
import hojas  from "./../../img/g02/Plantas.png";
import dash from "./../../img/g02/Dashboard.png";
import AnimatedEle from "./../animaEle";
import Hojas from "./../animaEle/hojas";

let GraficoS = styled.div`
    position:relative;
    
    
   
   .dash{
        width:100%;
        position:relative;
   }
   
   .imgr{
        width:100%;
        height:auto;
        display:block;
    }
    
    .hojas{
        position:absolute;
        bottom:0;
        right:95%;
        width:20%;
    }
    
    .chica{
        position:absolute;
        bottom:0;
        right:0%;
        width:45%;
    }
`;

function Grafico() {
    return (
        <GraficoS className={"wc"}>
            <AnimatedEle width={"15%"} height={"25%"} top={"auto"} zI={2} bottom={"-2%"}  left={"5%"} nameAnima={"saluda2"} origin={"bottom center"}>
                <Hojas height={"100%"} icon={7}/>
            </AnimatedEle>
            <AnimatedEle width={"20%"} height={"30%"} top={"auto"} bottom={"-2%"} left={"5%"} time={"2s"} nameAnima={"saluda2"} origin={"bottom center"}>
                <Hojas height={"100%"} icon={8}/>
            </AnimatedEle>
            <AnimatedEle width={"20%"} height={"30%"} top={"auto"} bottom={"-2%"} left={"4%"} time={"2s"} nameAnima={"saluda"} origin={"bottom center"}>
                <Hojas height={"100%"} icon={6}/>
            </AnimatedEle>
            <div className="dash">
                <img src={dash} alt="" className={"imgr"}/>
            </div>
            <div className="chica">
                <img src={chica} alt="" className={"imgr"}/>
            </div>
        </GraficoS>
    )
};

export default Grafico;
