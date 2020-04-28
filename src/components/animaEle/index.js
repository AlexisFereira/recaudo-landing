import React from "react";
import styled from "@emotion/styled";


const Container = styled.div`
    position:absolute;
    top:${props => props.top};
    left:${props => props.left};
    bottom:${props => props.bottom};
    top:${props => props.right};
    width:${props => props.width};
    transform-origin: ${props => props.origin};
`;

function Animated({
                      children,
                      top    ="0",
                      left   ="0",
                      bottom ="auto",
                      right  ="auto",
                      width  ="100%",
                      origin = "0",
                      className
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
        >
            {children}
        </Container>
    )
}

export default React.memo(Animated);
