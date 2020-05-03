import React from "react";
import styled from "@emotion/styled";
import dominio  from "./../../img/g01/Dominio.png";
import plantilla1 from "./../../img/g01/Plantilla1.png";
import engrane from "./../../img/g01/engrane.png";
import modal from "./../../img/g01/MODAL.png";
import TabTable from "./../Prices/helper";
import AnimatedEle from "./../animaEle";

let GraficoS = styled.div`   
    
    border-radius: 5px 5px 0 0;
    box-shadow:0 1px 5px rgba(0,0,0,.3);

   .barra,.direccion,.plantilla{
        width:100%;
        position:relative;       
   }
   
   .dominio{
       width:100%;
       overflow:hidden;
       
        p{
        display:block;
        overflow:hidden;
        text-overflow:ellipsis;
        word-break:keep-all;
        width:100%;
        margin:0;
        }
   }
   
   .plantilla{
        background-size:cover;
        animation: plantillas 5s linear infinite;
        position:relative;
        
        
        .logo{
            background-size:100% auto;
            background-repeat:no-repeat;
            background-position:center;
            position:absolute;
            width:10%;
            left:10%;
            top:3%;         
            z-index:2;
            height: 15%;
            animation: logos .5s linear infinite;
        }
        
        .forma{
            opacity:0;
        }
        
        
        .form{
        
            position:absolute;
            width:40%;
            left:50%;
            top:50%;         
            z-index:2;
            transform:translate(-50%,-50%);
            img{
                width:100%;
                height:auto;
            }
        }
   }
`;

function Grafico() {
    return (
        <GraficoS className={"wc"}>
            <AnimatedEle nameAnima={"girar"}  origin={"center center"} top={"25%"} width={"13%"} left={"-4%"} zI={0}>
                <img src={engrane} alt="" className={"wc"} style={{height:"auto"}}/>
            </AnimatedEle>

            <AnimatedEle nameAnima={"girar"}  origin={"center center"} top={"40%"} width={"18%"} left={"-8%"} zI={0}>
                <img src={engrane} alt="" className={"wc"} style={{height:"auto"}}/>
            </AnimatedEle>

            <AnimatedEle nameAnima={"girar"}  origin={"center center"} top={"60%"} width={"8%"} left={"-4%"} zI={0}>
                <img src={engrane} alt="" className={"wc"} style={{height:"auto"}}/>
            </AnimatedEle>
            <TabTable size={"25px"}/>
            <div className="wc py-2 px-3 px-lg-4 dominio">
                <p className={"mb-0"}>https://<b>miempresa</b>.epayco.me/recaudos/<b>matriculas</b></p>
            </div>
            <div className="plantilla ">
                <div className="logo">
                </div>
                <div className="form">
                    <img src={modal} alt=""/>
                </div>
                <img src={plantilla1} alt="" className={"imgr forma"} />
            </div>
        </GraficoS>
    )
};

export default Grafico;
