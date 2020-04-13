import React from "react";
import styled from "@emotion/styled";
import {Colors} from "../Btn";

const TitleConatiner = styled.div`
    text-align:${props =>  props.direction};
    width:100%;
    
    .titulo{
        color: ${props => props.colorT};
        font-size: ${props => props.sizeT};
        font-weight:bold;
    }
    
    .descripcion{
        color: ${props => props.colorP};
        font-size: ${props => props.sizeP};
        max-width:700px;
        margin:auto;
    }
`;

function TitleDesc ({
          text,
          description,
          direction="center",
          litle,
          children,
          colorT = Colors.azul ,
          colorP = "#3a3a3a",
          sizeT= "24px",
          sizeP= "16px" ,
          className
    }) {
    return (
        <TitleConatiner
            direction={direction}
            colorT={colorT}
            colorP={colorP}
            sizeT={sizeT}
            sizeP={sizeP}
            className={className}
        >
            <p className={"titulo"}>{text}</p>
            {children ? children : (description &&
                <p className={"descripcion"}>{description}</p>
            )}
        </TitleConatiner>
    )
};

export default TitleDesc ;
