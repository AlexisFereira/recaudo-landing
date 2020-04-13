import React from "react";
import epa from "../../img/epayco-b.png";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Flex from "../Flex";


function MenuFlotante() {

    const scrollTo = (target,offset = 0) => {
        scroller.scrollTo(target, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            containerId:"scroll",
            offset:offset
        })
    };


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

                <button  onClick={()=>  scrollTo("uno")} id="btntwo" className="go07">Características</button>
                <button  onClick={()=> scrollTo("archivo",-80) } id="archivo" >Archivos de recaudo</button>
                <button  onClick={()=> scrollTo('formulario', -90) } id="btnFour">Formulario de recaudo</button>
                <button  onClick={()=> scrollTo('precios') } id="btnFour">Comparar caracteristicas</button>
                <button  onClick={()=>  scrollTo('last')} id="btnfive" className="main">Crear proyecto</button>
            </div>
        </div>
    )
};

export default MenuFlotante;
