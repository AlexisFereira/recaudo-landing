import React from "react";
import styled from "@emotion/styled";

import chica from "./../../img/g02/Chica.png";
import hojas  from "./../../img/g02/Plantas.png";
import dash from "./../../img/g02/Dashboard.png";

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
            <div className="hojas">
                <img src={hojas} alt="" className={"imgr"}/>
            </div>
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
