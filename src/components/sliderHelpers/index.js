import styled from "@emotion/styled";
import React from "react";

export function SampleNextArrow(props) {
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

export function SamplePrevArrow(props) {
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


export const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />

};

export const Slide = styled.div`
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

export const Container = styled.div`
    position:relative;
    width:100%;
    
    .imgr{
    width:100%;
    height:auto;
    display:block;    
    }
    
    .cont-slider{
        width:100%;
        box-shadow:0 1px 5px rgba(0,0,0,.3);
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
    .arrow.left{
        .material-icons{
            margin-left:-3px;
        }
    }
`;
