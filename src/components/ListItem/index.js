import React from "react";
import Flex from "../Flex";
import styled from "@emotion/styled";
import check from "./../../img/Check.png"


const Numerito = styled.div`
        width:30px;
        height:30px;
        border-radius:50%;
        line-height:30px;
        color:white;
        text-align:center;
        background:#F1A34F;
`;

function ListItem({number,text,...props}) {
    return (
        <Flex
            jc={"flex-start"}
            alg={"flex-start"}
            className={"mb-3"}

        >
            <Flex flex={"0 0 30px"}>
                {number ?
                    <Numerito>{number}</Numerito>:
                    <img
                        src={check} alt=""
                        width={"15px"}
                        height={"auto"}
                    />
                }
            </Flex>
            <Flex
                flex={"1 0 80%"}
                jc={"flex-start"}
                className={"pl-2"}
                style={{color: !number ? "#030F51" : "initial"}}
            >
                {text}
            </Flex>
        </Flex>
    )
};

export default ListItem;
