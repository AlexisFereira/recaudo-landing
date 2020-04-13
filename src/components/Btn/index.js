import React from "react";
import styled from "@emotion/styled";

export const Colors = {
    naranja:"#FC5A08",
    azul: "#030F51",
};

const Btnt = styled.div`
    width:100%;
    
    button{
        background: ${props=>  props.bg};
        color: ${props=>  props.color};
        border:1px solid  ${props=>  props.borde};
        width:100%;
        min-height:40px;
        border-radius:25px;
    }
`;




function Btn({type="none",text,children, onClick,disabled}) {

    const color = {
        line: disabled ? "#999999" : Colors.naranja,
        none: disabled ? "#999999" : "white",
    };

    const bg = {
        line: disabled ? "#cbcbcb" : "white",
        none: disabled ? "#cbcbcb" : Colors.naranja,
    };

    const borde = {
        line: disabled ? "#cbcbcb" : Colors.naranja,
        none: disabled ? "#cbcbcb" : "white"
    };

    return (
        <Btnt
            color={color[type]}
            bg={bg[type]}
            borde={borde[type]}
        >
            <button
                onClick={onClick}
                disabled={disabled}
            >
                {children ? children:text}
            </button>
        </Btnt>
    )
};

export default Btn;
