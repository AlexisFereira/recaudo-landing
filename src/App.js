import React from 'react';
import "./index.scss";
import S01 from "./components/s01";
import Section02 from "./components/Section02";
import Section03 from "./components/Section03";
import Section04 from "./components/Section04";
import Section05 from "./components/Section05";
import Section06 from "./components/Section06";
import Section07 from "./components/Section7";
import Section08 from "./components/Section08";
import Section09 from "./components/Section09";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import MenuFlotante from "./components/MenuFlotante";
import styled from "@emotion/styled";
import {Element} from "react-scroll";



const Bigc = styled.div`
    background-image: url(img/Onda2.png);
    background-position:top center;
    background-size:100% auto;
    background-repeat:no-repeat;
    width:100%;
    psoition:relative;
`;

function App() {
  return (
    <div className="main-container" id={"scroll"}>
        <Menu/>

        <S01/>
        <div className={"wc"} name={"uno"}></div>
        <MenuFlotante/>
        <Section02/>

        <Bigc>
        <Element name={"archivo"}/>
        <Section04/>


        <Element name={"formulario"}/>
        <Section07/>
        </Bigc>

        <div className={"wc"} name={"precios"}/>
        <Section09/>

        <Footer/>
    </div>
  );
}

export default App;
