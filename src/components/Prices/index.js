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

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={"arrow right"}
            onClick={onClick}
        >
            <i className="material-icons">keyboard_arrow_right</i>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={"arrow left"}
            onClick={onClick}
        >
            <i className="material-icons">keyboard_arrow_left</i>
        </div>
    );
}

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
                    <Flex alg={"flex-start"}>
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
                                    description={"Para empresas que inician en la automatización y se preparan para un rápido crecimiento."}
                                    featuresNames={NamesF}
                                    features={gratis}
                                    priceType={pirceType}
                                    flex={"1 0 220px"}
                                />
                                <Plan
                                    name={"Básico"}
                                    price={"69.900"}
                                    priceMonth={"34.950"}
                                    description={"Para empresas que inician en la automatización y se preparan para un rápido crecimiento."}
                                    featuresNames={NamesF}
                                    features={basico}
                                    priceType={pirceType}
                                    flex={"1 0 220px"}

                                />
                                <Plan
                                    pro={true}
                                    name={"Pro"}
                                    price={"99.900"}
                                    priceMonth={"49.950"}
                                    description={"Para empresas que inician en la automatización y se preparan para un rápido crecimiento."}
                                    featuresNames={NamesF}
                                    features={pro}
                                    priceType={pirceType}
                                    flex={"1 0 220px"}

                                />
                                <Plan
                                    name={"Plus"}
                                    price={"169.900"}
                                    priceMonth={"84.950"}
                                    description={"Para empresas que inician en la automatización y se preparan para un rápido crecimiento."}
                                    featuresNames={NamesF}
                                    features={plus}
                                    priceType={pirceType}
                                    flex={"1 0 220px"}
                                />
                            </Slider>
                        </ContSlider>
                        <ContSlider className="wc d-none d-xl-flex " style={{flex:"1 0 250px",overflow:"hidden"}}>
                            <Plan
                                name={"Gratis"}
                                price={"0"}
                                priceMonth={"0"}
                                description={"Para empresas que inician en la automatización y se preparan para un rápido crecimiento."}
                                featuresNames={NamesF}
                                features={gratis}
                                priceType={pirceType}
                                flex={"1 0 220px"}
                            />
                            <Plan
                                name={"Básico"}
                                price={"69.900"}
                                priceMonth={"34.950"}
                                description={"Para empresas que inician en la automatización y se preparan para un rápido crecimiento."}
                                featuresNames={NamesF}
                                features={basico}
                                priceType={pirceType}
                                flex={"1 0 220px"}

                            />
                            <Plan
                                pro={true}
                                name={"Pro"}
                                price={"99.900"}
                                priceMonth={"49.950"}
                                description={"Para empresas que inician en la automatización y se preparan para un rápido crecimiento."}
                                featuresNames={NamesF}
                                features={pro}
                                priceType={pirceType}
                                flex={"1 0 220px"}

                            />
                            <Plan
                                name={"Plus"}
                                price={"169.900"}
                                priceMonth={"84.950"}
                                description={"Para empresas que inician en la automatización y se preparan para un rápido crecimiento."}
                                featuresNames={NamesF}
                                features={plus}
                                priceType={pirceType}
                                flex={"1 0 220px"}
                            />
                        </ContSlider>

                    </Flex>
                </TableShadow>
            </div>
        </Container>
    )
}

export default React.memo(PricesTable);
