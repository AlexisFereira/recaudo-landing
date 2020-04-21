import React, {useEffect, useState} from "react";
import epa from "../../img/epayco-b.png";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Flex from "../Flex";


function MenuFlotante() {

    const [current,setCurrent] =useState("");

    const scrollTo = (target,offset = 0) => {
        scroller.scrollTo(target, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            containerId:"scroll",
            offset:offset
        })
    };

    let distancia = "";

    useEffect(()=>{

        let caracteristicas    = document.getElementById("caracteristicas").offsetTop - 90;
        let archivo            = document.getElementById("Archivo").offsetTop - 90;
        let formulario         = document.getElementById("formulario").offsetTop - 90;
        let creaCuenta         = document.getElementById("creaCuenta").offsetTop - 90;
        let tabla              = document.getElementById("tabla").offsetTop - 90;

        document.getElementById("scroll").addEventListener("scroll",function () {

            distancia = document.getElementById("scroll").scrollTop;
            console.log(caracteristicas,archivo,formulario,creaCuenta)

            if ((distancia > caracteristicas) && (distancia < archivo) ) { setCurrent("caracteristicas")}
            else if((distancia > archivo) && (distancia < formulario) ) { setCurrent("archivo")}
            else if((distancia > formulario) && (distancia < tabla) ) {setCurrent("formulario")}
            else if((distancia > tabla) && (distancia < creaCuenta) ) {setCurrent("tabla")}
            else{setCurrent("")}
        }, false)

    },[ ]);

    return (
        <div className="menuFlotante f01 jcfs px-3 py-2 d-none d-md-flex mb-3">
            <Flex flex={"0 0 150px"} jc={"flex-start"} className={"py-1"}>
                <Flex flex={"1 0 100%"} jc={"flex-start"}>
                    <span style={{fontSize:"22px",fontWeight:"bold"}}>Recaudo</span>
                </Flex>
                <Flex alg={"flex-start"}>
                    <span className={"pr-2"}>by </span><img src={epa} alt="" height={"18px"} width={"auto"} className={"mt-1"}/>
                </Flex>
            </Flex>
            <div className="enlaces f01 jcfe">

                <button
                    onClick={()=>  scrollTo("uno")}
                    id="btntwo"
                    className={`go07 ${current === "caracteristicas" && "active"}`}
                >
                    Características
                </button>
                <button
                    onClick={()=> scrollTo("archivo",-60) }
                    id="archivo"
                    className={`go07 ${current === "archivo" && "active"}`}

                >
                    Archivos de recaudo
                </button>
                <button
                    onClick={()=> scrollTo('formulario', -60) }
                    id="btnFour"
                    className={`go07 ${current === "formulario" && "active"}`}
                >
                    Formulario de recaudo
                </button>
                <button
                    onClick={()=> scrollTo('precios') }
                    id="btnFour"
                    className={`go07 ${current === "tabla" && "active"}`}
                >
                    Comparar caracteristicas
                </button>
                <button
                    onClick={()=>  scrollTo('last')} id="btnfive" className="main"
                >
                    Crear proyecto
                </button>
            </div>
        </div>
    )
};

export default MenuFlotante;
