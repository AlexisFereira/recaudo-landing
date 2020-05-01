import React from "react";
import styled from "@emotion/styled";
import AnimatedEle from "../animaEle";


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
            <img src="/img/g00/factura.png" alt="" className={"px-0 col-12"}/>
            <div className="facturaBack"></div>
            <AnimatedEle width={"10%"} origin={"bottom center"} top={"10%"} left={"22%"} time={"1s"} nameAnima={"saluda2"}>
                <img src="/img/g00/hoja01.png" alt="" className={"imgr"}/>
            </AnimatedEle>
            <AnimatedEle origin={"bottom center"} width={"30%"} top={"auto"} bottom={"23%"} left={"63%"} zI={"3"}>
                <img src="/img/g00/hoja02.png" alt="" className={"imgr"}/>
            </AnimatedEle>
            <AnimatedEle origin={"bottom center"} time={"2s"} width={"28%"} top={"auto"} bottom={"35%"}  left={"60%"}>
                <img src="/img/g00/hoja03.png" alt="" className={"imgr"}/>
            </AnimatedEle>
        </Container>
    )
}

export default React.memo(GraficoAnimado);
