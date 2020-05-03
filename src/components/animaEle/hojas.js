import React from "react";
import styled from "@emotion/styled";
import hojas from "./../../img/hojas.png";
import docs from "./../../img/docs.png";

const Container = styled.div`
    position:relative;
    background:transparent url(${hojas}) no-repeat;
    background-size: auto 800%;
    background-position:center ${props => props.icon};
    width: ${props => props.width};
    height: ${props => props.height};
`;

function Hojas({width="100%",height="70px",icon=0}) {

    let icons = {
        1:0,
        2:14.258,
        3:14.258*2,
        4:14.258*3,
        5:14.258*4,
        6:14.258*5,
        7:14.258*6,
        8:100,
    };

    return  (
        <Container
            width  = {width }
            height = {height }
            icon   = {icons[icon]+ "%" }
        >
        </Container>
    )
}

export default React.memo(Hojas);

const ContainerDocs = styled.div`
    position:relative;
    background:transparent url(${docs}) no-repeat;
    background-size: auto 400%;
    background-position:center ${props => props.icon};
    width: ${props => props.width};
    height: ${props => props.height};
`;

export function Docs({width="100%",height="70px",icon=0}) {

    let icons = {
        1:0,
        2:33.33,
        3:33.33*2,
        4:100
    };

    return  (
        <ContainerDocs
            width  = {width }
            height = {height }
            icon   = {icons[icon]+ "%" }
        >
        </ContainerDocs>
    )
}
