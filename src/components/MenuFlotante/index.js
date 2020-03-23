import React from "react";
import epa from "../../img/epayco-b.png";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



function MenuFlotante() {

    const scrollTo = (target) => {
        scroller.scrollTo(target, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            containerId:"scroll"
        })
    };


    return (
        <div className="menuFlotante f01 jcfs px-3 py-2 d-none d-md-flex mb-3">
            <div className="logo">
                <img src={epa} alt="" height={"30px"} width={"auto"} />
            </div>
            <div className="enlaces f01 jcfe">

                <button onClick={()=>  scrollTo("uno")} id="btntwo" className="go07">Características</button>
                <button onClick={()=> scrollTo("cuatro") } id="btnthree">Archivos de recaudo</button>
                <button  onClick={()=> scrollTo('seis') } id="btnFour">Formulario de recaudo</button>
                <button onClick={()=>  scrollTo('last')} id="btnfive" className="main">Crear proyecto</button>
            </div>
        </div>
    )
};

export default MenuFlotante;
