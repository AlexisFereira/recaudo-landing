import React, {useState} from "react";
import styled from "@emotion/styled";
import TabTable from "./helper";
import {Plan,PlanSelectorTime,ListOfItems} from "./helper";
import TitleDesc from "../titleDesc";
import Slider from "react-slick";
import Flex from "../Flex";
import {
    gratis,
    basico,
    pro,
    plus,
    NamesF
}from "./plansFeatures"
import AnimatedEle from "../animaEle";
import Hojas from "../animaEle/hojas";


const Container = styled.div`
    position:relative;
    width:100%;
    padding-top:100px;
`;

const TableShadow = styled.div`
    box-shadow:0 3px 10px rgba(0,0,0,.3);
    width:100%;
    padding-bottom:15px;
`;

const ContSlider = styled.div`
    width:100%;
    flex:7 0 250px;
    
    .arrow{
        position:absolute;
        top:50%;
    }
`;


const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow:1,
    variableWidth: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
};




function PricesTable() {

    const [pirceType,setPrice] = useState("anual");

    return (
        <Container id={"tabla"} name={"table"}>
            <div className="container px-2 px-md-0">
                <div className="wc pb-4">
                    <TitleDesc text={"Compare todas las características"}/>
                </div>

                <TableShadow>

                    <TabTable/>
                    <Flex alg={"flex-start"} className={"position-relative"} style={{zIndex:"10"}}>
                        <div className={"wc pt-4 d-lg-none" }>
                            <PlanSelectorTime
                                active={pirceType}
                                onClick={ x => setPrice(x)}
                            />
                        </div>
                        <Flex flex={"0 0 250px"} className={"d-none d-lg-flex"} >
                            <PlanSelectorTime
                                active={pirceType}
                                onClick={ x => setPrice(x)}
                            />
                            <ListOfItems
                                names={NamesF}
                            />
                        </Flex>

                        <ContSlider className="wc d-xl-none" style={{flex:"1 0 250px",overflow:"hidden"}}>
                            <Slider {...settings}>
                                <Plan
                                    name={"Gratis"}
                                    price={"0"}
                                    priceMonth={"0"}
                                    description={"Las funcionalidades escenciales para empezar a recibir pagos o recaudar a través de internet."}
                                    featuresNames={NamesF}
                                    features={gratis}
                                    priceType={pirceType}
                                    flex={"1 0 220px"}
                                />
                                <Plan
                                    name={"Plus"}
                                    price={"69.900"}
                                    priceMonth={"34.900"}
                                    description={"Funcionalidades adicionales para recibir pagos o recaudar a través de internet."}
                                    featuresNames={NamesF}
                                    features={basico}
                                    priceType={pirceType}
                                    flex={"1 0 220px"}

                                />
                                <Plan
                                    pro={true}
                                    name={"Ultra"}
                                    price={"99.900"}
                                    priceMonth={"49.950"}
                                    description={"Cuandos e requiere ir más allá al recibir pagos o recaudar a través de internet."}
                                    featuresNames={NamesF}
                                    features={pro}
                                    priceType={pirceType}
                                    flex={"1 0 220px"}
                                />
                                <Plan
                                    name={"Pro"}
                                    price={"169.900"}
                                    priceMonth={"84.950"}
                                    description={"La más completa solución de recaudo sin límites, le ayudará a llegar al siguiente nivel."}
                                    featuresNames={NamesF}
                                    features={plus}
                                    priceType={pirceType}
                                    flex={"1 0 220px"}
                                />
                            </Slider>
                        </ContSlider>
                        <Plan
                            name={"Gratis"}
                            price={"0"}
                            priceMonth={"0"}
                            description={"Las funcionalidades escenciales para empezar a recibir pagos o recaudar a través de internet."}
                            featuresNames={NamesF}
                            features={gratis}
                            priceType={pirceType}
                            flex={"1 0 200px"}
                            className={"d-none d-xl-block"}
                        />
                        <Plan
                            name={"Plus"}
                            price={"69.900"}
                            priceMonth={"34.900"}
                            description={"Funcionalidades adicionales para recibir pagos o recaudar a través de internet."}
                            featuresNames={NamesF}
                            features={basico}
                            priceType={pirceType}
                            flex={"1 0 200px"}
                            className={"d-none d-xl-block"}
                        />
                        <Plan
                            pro={true}
                            name={"Ultra"}
                            price={"99.900"}
                            priceMonth={"49.950"}
                            description={"Cuandos e requiere ir más allá al recibir pagos o recaudar a través de internet."}
                            featuresNames={NamesF}
                            features={pro}
                            priceType={pirceType}
                            flex={"1 0 200px"}
                            className={"d-none d-xl-block"}
                        />
                        <Plan
                            name={"Pro"}
                            price={"169.900"}
                            priceMonth={"84.950"}
                            description={"La más completa solución de recaudo sin límites, le ayudará a llegar al siguiente nivel."}
                            featuresNames={NamesF}
                            features={plus}
                            priceType={pirceType}
                            flex={"1 0 200px"}
                            className={"d-none d-xl-block"}
                        />
                    </Flex>

                </TableShadow>
            </div>
        </Container>
    )
}

export default React.memo(PricesTable);
