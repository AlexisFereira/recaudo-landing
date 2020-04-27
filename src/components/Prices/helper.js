import React from "react";
import styled from "@emotion/styled";
import Flex from "../Flex";
import {
    PricePlanS,
    IconBool,
    PlanS,
    ItemDesc,
    DescItem,
    PlanSelectorCont
} from "./styles";
import 'react-tippy/dist/tippy.css'
import {
    Tooltip,
} from 'react-tippy';



const Container = styled(Flex)`
   position:relative;
   height:40px;
   background:#D7D7D7;
   border-radius:6px 6px 0 0;
   width:100%;
   
   .dot{
    height:10px;
    width:10px;
    border-radius:50%;
    margin-right:8px;
   }
   
   .dot.green{background:#7FC44E;}
   .dot.yellow{background:#FFCA28;}
   .dot.red{background:#FF1515;}
`;

function TabTable() {
    return (
        <Container jc={"flex-start"} className={"p-2 px-3"}>
            <div className="dot green"></div>
            <div className="dot yellow"></div>
            <div className="dot red"></div>
        </Container>
    )
}

export default React.memo(TabTable);


export const PricePlan = ({
                              description,
                              name,
                              price,
                              priceMonth,
                              className,
                              pro
                          })=>{
    return(
        <PricePlanS className={className} selected={pro ? true : false}>
            <Flex className="content p-2" direction={"column"}>
                {pro &&
                <div className="label">
                    Recomendado
                </div>
                }
                <div className="name">
                    {name}
                </div>
                <div className="price">
                    <p className={"mb-0"}><b>${price}</b><span className={"ml-1"}>COP/mes</span></p>
                </div>
                {price!== "0" &&
                <div className="priceMonth">
                    <div className="small">
                        a ${priceMonth} con pago anual
                    </div>
                </div>
                }
                <div className="description text-center pt-3">
                    {description}
                </div>
            </Flex>
        </PricePlanS>
    )
} ;



const FeatureItem = ({ type, value,hg = "50px",titleSpace })=>{

    const types = {
        space: "",
        text: <small><b>{value}</b></small>,
        bool: <IconBool position={ value === 1 ? 0 : "100%" }/>

    };

    return(
        <ItemDesc
            direction={"column"}
            hg={hg}
            type={type}
            className={"col-12 p-1 text-center"}
        >
            {types[type]}
            {titleSpace &&
                <div className={"wc text-left pl-3"}>
                    <b>{titleSpace}</b>
                </div>
            }
        </ItemDesc>
    )
};


const DescriptionItem = ({text,tool})=>{
    return(
        <DescItem className={"p-1 pl-3"}>
            <div className="text">
                {text}
            </div>
            <div className="tool text-right">

                <Tooltip
                    title={tool}
                    triger={"mouseenter"}
                    arrow={true}
                >
                    <img
                        src="/img/info-tool.png"
                        alt=""
                        height={"20px"}
                        width={"auto"}
                    />
                </Tooltip>
            </div>
        </DescItem>
    )
};


export const Plan = ({
                         description,
                         name,
                         price,
                         priceMonth,
                         features = [],
                         pro,
                         featuresNames
                     })=>{
    return(
        <PlanS>
            <PricePlan
                description={description}
                name={name}
                price={price}
                priceMonth={priceMonth}
                pro={pro}
            />
            <FeatureItem type={"space"}/>

            {features.todos && features.todos.map((item,index)=>
                <FeatureItem
                    key   ={index}
                    type  ={item.type}
                    value ={item.value}
                    text  ={item.text}
                    hg    ={ featuresNames.todos[index].height + "px"}
                />
            )}

            <FeatureItem type={"space"}/>

            {features.archivo && features.archivo.map((item,index)=>
                <FeatureItem
                    key   ={index}
                    type  ={item.type}
                    value ={item.value}
                    text  ={item.text}
                    hg    ={ featuresNames.archivo[index].height + "px"}
                />
            )}

            <FeatureItem type={"space"}/>

            {features.web && features.web.map((item,index)=>
                <FeatureItem
                    key   ={index}
                    type  ={item.type}
                    value ={item.value}
                    hg    ={ featuresNames.web[index].height + "px"}
                />
            )}
        </PlanS>
    )
};


export const PlanSelectorTime = ({onClick,active})=>{

    return(
        <PlanSelectorCont direction={"column"} right={active === "mensual" ? true : false}>
            <div className="title p-2 pb-lg-3">
                Planes de recaudo
            </div>

            <Flex className={"borde-botones"}>
                <button
                    onClick={()=> onClick("anual")}
                    className={active ==="anual" && "active"}
                >
                    Anual
                </button>
                <button
                    onClick={()=> onClick("mensual")}
                    className={active === "mensual" ? "active" : ""}
                >
                    Mensual
                </button>
                <div className="mancha"></div>
            </Flex>
            <div className="description wc text-center p-2">
                Selecciona el plan anual y reciba un 50% de descuento.
            </div>
        </PlanSelectorCont>
    )
};

export const ListOfItems = ({flex, names = []}) => {

    return (
        <div>
            <FeatureItem type={"space"} titleSpace={"Para todos los servicios "}/>

            {names.todos && names.todos.map((item, index) =>
                <DescriptionItem
                    key={index}
                    text={item.name}
                    tool={item.tool}
                />
            )}
            <FeatureItem type={"space"} titleSpace={"Para Archivo de recaudo"}/>

            {names.archivo && names.archivo.map((item, index) =>
                <DescriptionItem
                    key={index}
                    text={item.name}
                    tool={item.tool}
                />
            )}
            <FeatureItem type={"space"} titleSpace={"Para Formulario Web de Recaudo"}/>

            {names.web && names.web.map((item, index) =>
                <DescriptionItem
                    key={index}
                    text={item.name}
                    tool={item.tool}
                />
            )}
        </div>
    )
};
