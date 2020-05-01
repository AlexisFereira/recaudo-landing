import React from "react";
import Slider from "react-slick";
import styled from "@emotion/styled";
import base from "./../../img/g06/base.png";
import p1 from "./../../img/g06/p01.png";
import p2 from "./../../img/g06/p02.png";
import p3 from "./../../img/g06/p03.png";
import p4 from "./../../img/g06/p04.png";
import p5 from "./../../img/g06/p05.png";



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={"arrow right"}
            onClick={onClick}
        >
            <i className="material-icons">keyboard_arrow_right</i>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={"arrow left"}
            onClick={onClick}
        >
            <i className="material-icons">keyboard_arrow_left</i>
        </div>
    );
}


const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
};

const Slide = styled.div`
    width:100%;
    position:relative;
    
    img{
        width:100%;
        height:auto;
        display:block;
    }
    
    .number{
        position:absolute;
        bottom:25px;
        right:25px;
        height:30px;
        width:30px;
        border-radius:50%;
        border:2px solid #F1A34F;
        color:#F1A34F;
        background:white;
        text-align:center;
        font-size:20px;
        line-height:28px;
    }
`;

const Container = styled.div`
    position:relative;
    width:100%;
    
    .imgr{
    width:100%;
    height:auto;
    display:block;    
    }
    
    .cont-slider{
        width:100%;
        position:absolute;
        bottom:0;
        left:0;
    }
    
    .arrow{
        position:absolute;
        z-index:10;
        top:calc(50% - 10px);
        left:5%;
        cursor:pointer;
        width:20px;
        height:20px;
        text-align:center;
        background:white;
        color:#F1A34F;
        border-radius:50%;
        
        .material-icons{
            height:20px;
            line-height:18px;
        }
    }
    
    .slick-dots{
    
    li{
        width:5px;
        height:5px;
        background:#cbcbcb;
        border-radius:50%;
        }
        
        .slick-active{
        background:#F1A34F;
        }
        
        
        button{
            opacity:0;
        }
    }
    
    .arrow.right{
        left:93%;
    }
`;

function Grafico() {
    return (
        <Container>
            <img src={base} alt="" className={"imgr"}/>
            <div className="cont-slider">
                <Slider {...settings}>
                    <Slide>
                        <div className="number">1</div>
                        <img src={p1} alt="" className={"imgr"}/>
                    </Slide>
                    <Slide>
                        <div className="number">2</div>
                        <img src={p2} alt="" className={"imgr"}/>
                    </Slide>
                    <Slide>
                        <div className="number">3</div>
                        <img src={p3} alt="" className={"imgr"}/>
                    </Slide>
                    <Slide>
                        <div className="number">4</div>
                        <img src={p4} alt="" className={"imgr"}/>
                    </Slide>
                    <Slide>
                        <div className="number">5</div>
                        <img src={p5} alt="" className={"imgr"}/>
                    </Slide>

                </Slider>
            </div>
        </Container>
    )
};

export default Grafico;
