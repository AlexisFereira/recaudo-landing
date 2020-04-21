import React from "react";
import styled from "@emotion/styled";


const Container = styled.div`
    position:relative;
    width:100%;
`;

function PricesTable() {
    return (
        <Container id={"tabla"}>
            <div className="container px-2 px-md-0">

            </div>
        </Container>
    )
}

export default React.memo(PricesTable);
