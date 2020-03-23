import React from "react";
import styled from "@emotion/styled";
import moneda from "../../img/moneda.png";


const MonedaCont = styled.div`
    position:absolute;
    top:${props => props.top};
    left:${props => props.left};
    right:${props => props.right};
    width:80px;
    height:100px;
    overflow:hidden;
    
    img{
        position:absolute;
        top:0;
    }
    .m01{
        width:45px;
        animation: coins 2s ease-out infinite;
        right:10px;    
    }
    .m02{
        width:40px;
        animation: coins 2s ease-out infinite .5s;
        right:15px;    
    }
    .m03{
        width:35px;
        margin:auto;
        animation: coins 2s ease-out infinite 1s;
        right:5px;    
    }
    
`;

function Monedas({top=0,left=0,right=0}) {
    return (
        <MonedaCont
            top   = {top  }
            left  = {left }
            right = {right}
            className={"d-none d-md-block"}
        >

            <div className="wc">
                <img src={moneda} alt="" className={"m01"}/>
            </div>
            <div className="wc">
                <img src={moneda} alt="" className={"m02"}/>
            </div>
            <div className="wc">
                <img src={moneda} alt="" className={"m03"}/>
            </div>

        </MonedaCont>
    )
};

export default Monedas;
