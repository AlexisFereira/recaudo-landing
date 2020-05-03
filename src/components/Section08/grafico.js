import React from "react";
import Slider from "react-slick";
import p01 from "./../../img/g08/Pago1.png";
import p02 from "./../../img/g08/Pago2.png";
import p03 from "./../../img/g08/Pago3.png";
import p04 from "./../../img/g08/Pago4.png";
import TabTable from "../Prices/helper";
import {Container,Slide,settings} from "../sliderHelpers";
import AnimatedEle from "../animaEle";
import Hojas from "../animaEle/hojas";



function Grafico() {
    return (
        <Container>
            <TabTable size={"25px"}/>
            <div className="cont-slider">
                <AnimatedEle height={"20%"} width={"25%"} top={"auto"} bottom={"-3%"} zI={"1"} origin={"bottom center"} left={"-5%"}  time={"2.5s"} >
                    <Hojas height={"100%"} icon={6}/>
                </AnimatedEle>
                <AnimatedEle height={"35%"} width={"25%"} top={"auto"} bottom={"-3%"} zI={"1"} origin={"bottom center"} left={"-5%"}  time={"2s"} nameAnima={"saluda2"}>
                    <Hojas height={"100%"} icon={8}/>
                </AnimatedEle>
                <AnimatedEle height={"25%"} width={"25%"} top={"auto"} bottom={"-3%"} zI={"3"} origin={"bottom center"} left={"-5%"}  time={"3s"} nameAnima={"saluda2"}>
                    <Hojas height={"100%"} icon={7}/>
                </AnimatedEle>

                <Slider {...settings}>
                    <Slide>
                        <img src={p01} alt="" className={"imgr"}/>
                    </Slide>
                    <Slide>
                        <img src={p02} alt="" className={"imgr"}/>
                    </Slide>
                    <Slide>
                        <img src={p03} alt="" className={"imgr"}/>
                    </Slide>
                    <Slide>
                        <img src={p04} alt="" className={"imgr"}/>
                    </Slide>
                </Slider>
            </div>
        </Container>
    )
};

export default Grafico;
