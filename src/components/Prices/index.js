import React, {useState} from "react";
import styled from "@emotion/styled";
import TabTable from "./helper";
import {Plan,PlanSelectorTime,ListOfItems} from "./helper";
import TitleDesc from "../titleDesc";
import Flex from "../Flex";
import {
    gratis,
    basico,
    pro,
    plus,
    NamesF
}from "./plansFeatures"


const Container = styled.div`
    position:relative;
    width:100%;
    padding-top:100px;
`;

function PricesTable() {

    const [pirceType,setPrice] = useState("anual");

    return (
        <Container id={"tabla"} name={"table"}>
            <div className="container px-2 px-md-0">
                <div className="wc pb-4">
                    <TitleDesc text={"Compare todas las características"}/>
                </div>

                <div className="tablaShadow">
                    <TabTable/>
                    <Flex alg={"flex-start"}>
                        <Flex flex={" 1 0 220px"} >
                            <PlanSelectorTime
                                active={pirceType}
                                onClick={ x => setPrice(x)}
                            />

                            <ListOfItems
                                names={NamesF}
                            />
                        </Flex>

                        <Plan
                            name={"Gratis"}
                            price={"0"}
                            priceMonth={"0"}
                            description={"Para empresas que inician en la automatización y se preparan para un rápido crecimiento."}
                            featuresNames={NamesF}
                            features={gratis}
                        />
                        <Plan
                            name={"Básico"}
                            price={"69.900"}
                            priceMonth={"34.950"}
                            description={"Para empresas que inician en la automatización y se preparan para un rápido crecimiento."}
                            featuresNames={NamesF}
                            features={basico}

                        />
                        <Plan
                            pro={true}
                            name={"Pro"}
                            price={"99.900"}
                            priceMonth={"49.950"}
                            description={"Para empresas que inician en la automatización y se preparan para un rápido crecimiento."}
                            featuresNames={NamesF}
                            features={pro}

                        />
                        <Plan
                            name={"Plus"}
                            price={"169.900"}
                            priceMonth={"84.950"}
                            description={"Para empresas que inician en la automatización y se preparan para un rápido crecimiento."}
                            featuresNames={NamesF}
                            features={plus}
                        />
                    </Flex>
                </div>
            </div>
        </Container>
    )
}

export default React.memo(PricesTable);
