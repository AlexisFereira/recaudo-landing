import React from "react";
import styled from "@emotion/styled";


const Container = styled.div`
    position:absolute;
    top:${props => props.top};
    left:${props => props.left};
    bottom:${props => props.bottom};
    right:${props => props.right};
    width:${props => props.width};
    transform-origin: ${props => props.origin};
    z-index:${props => props.zI};
    animation: ${props=> props.nameAnima} ${props => props.time} ease-in-out infinite alternate;
    height:${props => props.height};
`;

function AnimatedEle({
                      children,
                      top       = "0",
                      left      = "0",
                      bottom    = "auto",
                      right     = "auto",
                      width     = "100%",
                      origin    = "0",
                      className,
                      zI        = "1",
                      time      = "3s",
                      nameAnima ="saluda",
                      height    = "auto"
}) {
    return (
        <Container
            className = {className}
            top       = {top}
            left      = {left}
            bottom    = {bottom}
            right     = {right}
            width     = {width}
            origin    = {origin}
            zI        = {zI}
            time      = {time}
            nameAnima = {nameAnima}
            height    = {height}
        >
            {children}
        </Container>
    )
}

export default React.memo(AnimatedEle);
