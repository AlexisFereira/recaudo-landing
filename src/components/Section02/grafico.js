import React from "react";
import styled from "@emotion/styled";
import direccion  from "./../../img/g01/direccion.png";
import plantilla from "./../../img/g01/Plantilla1.png";
import TabTable from "./../Prices/helper";

let GraficoS = styled.div`   
   .barra,.direccion,.plantilla{
        width:100%;
        position:relative;
        
        .imgr{
            width:100%;
            height:auto;
            display:block;
        }
   }
`;

function Grafico() {
    return (
        <GraficoS className={"wc"}>
            <TabTable/>
            <div className="direccion">
                <img src={direccion} alt="" className={"imgr"}/>
            </div>
            <div className="plantilla">
                <img src={plantilla} alt="" className={"imgr"}/>

            </div>
        </GraficoS>
    )
};

export default Grafico;
