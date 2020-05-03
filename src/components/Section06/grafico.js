import React from "react";
import Slider from "react-slick";
import styled from "@emotion/styled";
import p1 from "./../../img/g06/Paso1.png";
import p2 from "./../../img/g06/Paso2.png";
import p3 from "./../../img/g06/Paso3.png";
import p4 from "./../../img/g06/Paso4.png";
import p5 from "./../../img/g06/Paso5.png";
import TabTable from "../Prices/helper";
import {Container,Slide,settings} from "../sliderHelpers";
import AnimatedEle from "../animaEle";
import Hojas from "../animaEle/hojas";

function Grafico() {
    return (
        <Container>
            <div className="cont-slider">
                <AnimatedEle height={"20%"} width={"25%"} top={"auto"} bottom={"-3%"} zI={"2"} origin={"bottom center"} left={"-5%"} >
                    <Hojas height={"100%"}/>
                </AnimatedEle>
                <AnimatedEle height={"25%"} width={"25%"} top={"auto"} bottom={"-3%"} zI={"3"} origin={"bottom center"} left={"-5%"} >
                    <Hojas height={"100%"} icon={2}/>
                </AnimatedEle>
                <AnimatedEle height={"30%"} width={"25%"} top={"auto"} bottom={"-3%"} zI={"3"} origin={"bottom center"} left={"-3%"} time={"2.5s"} nameAnima={"saluda2"}>
                    <Hojas height={"100%"} icon={6}/>
                </AnimatedEle>
                <AnimatedEle height={"25%"} width={"25%"} top={"auto"} bottom={"-3%"} zI={"3"} origin={"bottom center"} left={"-3%"} time={"2s"} nameAnima={"saluda2"}>
                    <Hojas height={"100%"} icon={7}/>
                </AnimatedEle>
                <AnimatedEle height={"40%"} width={"25%"} top={"auto"} bottom={"-3%"} zI={"2"} origin={"bottom center"} left={"-3%"} time={"3s"} nameAnima={"saluda2"}>
                    <Hojas height={"100%"} icon={8}/>
                </AnimatedEle>


                <TabTable size={"25px"}/>
                <Slider {...settings}>
                    <Slide>
                        <img src={p1} alt="" className={"imgr"}/>
                    </Slide>
                    <Slide>
                        <img src={p2} alt="" className={"imgr"}/>
                    </Slide>
                    <Slide>
                        <img src={p3} alt="" className={"imgr"}/>
                    </Slide>
                    <Slide>
                        <img src={p4} alt="" className={"imgr"}/>
                    </Slide>
                    <Slide>
                        <img src={p5} alt="" className={"imgr"}/>
                    </Slide>

                </Slider>
            </div>
        </Container>
    )
};

export default Grafico;
