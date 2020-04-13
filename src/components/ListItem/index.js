import React from "react";
import Flex from "../Flex";
import styled from "@emotion/styled";
import check from "./../../img/Check.png"
import {Colors} from "../Btn";


const Numerito = styled.div`
        width:22px;
        height:22px;
        border-radius:50%;
        line-height:22px;
        color:white;
        font-size:14px;
        text-align:center;
        background:${Colors.azul};
`;

function ListItem({number,text,...props}) {
    return (
        <Flex
            jc={"flex-start"}
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
