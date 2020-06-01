import React from "react";
import styled from "@emotion/styled";
import Flex from "../Flex";
import info from "./../../img/info-tool.png";
import {
    PricePlanS,
    IconBool,
    PlanS,
    ItemDesc,
    DescItem,
    PlanSelectorCont,
    DescriptionResponsive
} from "./styles";
import 'react-tippy/dist/tippy.css'
import {
    Tooltip,
} from 'react-tippy';
import {animated, config, useTransition} from "react-spring";


const Container = styled(Flex)`
   position:relative;
   height:${props => props.size};
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

function TabTable({size="40px",className="p-2 px-3"}) {
    return (
        <Container size={size} jc={"flex-start"} className={ className}>
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
                              pro,
                              priceType = "mensual"
                          })=>{

    const Transitions = useTransition(priceType , n=>n,{
        config: config.stiff,
        from:{
            transform: priceType === "mensual" ? "translateY(-100%)" : "translateY(100%)",
            opacity: 0
        },
        enter:{
            transform: " translateY(0)",
            opacity: 1
        },
        leave:{
            position:"absolute",
            transform: priceType  === "mensual" ? "translateY(100%)" : "translateY(-100%)",
            opacity: 0
        }
    });

    let sections = {
        mensual : ({style})=>
            <animated.div style={style} >
                <div className="price">
                    <p className={"mb-0"}><b>${price}</b><span className={"ml-1"}>COP/mes</span></p>
                </div>
                <div className="priceMonth">
                    <div className="small dashet">
                        a ${priceMonth} con pago anual
                    </div>
                </div>
            </animated.div>,
        anual : ({style})=>
            <animated.div style={style} >
                <div className="priceMonth">
                    <div className="small dashet">
                        a ${price} con pago mensual
                    </div>
                </div>
                <div className="price wc text-center">
                    <p className={"mb-0"}><b>${priceMonth}</b><span className={"ml-1"}>COP/mes</span></p>
                </div>
            </animated.div>,
    };


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

                {priceMonth !== "0" ?
                    (Transitions.map(({item,props,key})=>{
                        let Valor =  sections[item]
                        return <Valor style={props} key={key}/>
                    }))
                    :
                    <div className="price">
                        <p className={"mb-0"}><b>${price}</b><span className={"ml-1"}>COP/mes</span></p>
                    </div>
                }



                <div className="description text-center pt-3">
                    {description}
                </div>
            </Flex>
        </PricePlanS>
    )
} ;



const FeatureItem = ({ type, value,hg = "50px",titleSpace,description,onlyResponsive })=>{

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
            {!titleSpace &&
            <DescriptionResponsive className={"d-lg-none wc text-left px-2"} dashed={type === "bool" ? !value : false}>
                {description + " "}
                {type === "text" && value}
            </DescriptionResponsive>
            }

            { (titleSpace && onlyResponsive) &&
                <div className={"p-2 title-responsive d-lg-none"} style={{maxWidth:"200px"}}>
                    <b>{titleSpace}</b>
                </div>
            }

            <div className="wc d-none d-lg-block text-center ">
                {types[type]}
                {(type === "space" && titleSpace && !onlyResponsive) &&
                <div className={"wc text-left pl-3"}>
                    <b>{titleSpace}</b>
                </div>
                }
            </div>
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
                        src={info}
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
                         featuresNames,
                         priceType,
                        flex,
                         className
                     })=>{
    return(
        <PlanS flex={flex} className={className}>
            <PricePlan
                description={description}
                name={name}
                price={price}
                priceMonth={priceMonth}
                pro={pro}
                priceType ={priceType }
            />
            <FeatureItem onlyResponsive type={"space"} titleSpace={"Para todos los servicios "}/>

            {features.todos && features.todos.map((item,index)=>
                <FeatureItem
                    key   ={index}
                    type  ={item.type}
                    value ={item.value}
                    text  ={item.text}
                    hg    ={ featuresNames.todos[index].height + "px"}
                    description ={featuresNames.todos[index].name}

                />
            )}

            <FeatureItem onlyResponsive type={"space"} titleSpace={"Para Archivo de recaudo"}/>

            {features.archivo && features.archivo.map((item,index)=>
                <FeatureItem
                    key   ={index}
                    type  ={item.type}
                    value ={item.value}
                    text  ={item.text}
                    hg    ={ featuresNames.archivo[index].height + "px"}
                    description    ={ featuresNames.archivo[index].name}
                />
            )}

            <FeatureItem onlyResponsive type={"space"} titleSpace={"Para Formulario Web de Recaudo"}/>

            {features.web && features.web.map((item,index)=>
                <FeatureItem
                    key   ={index}
                    type  ={item.type}
                    value ={item.value}
                    hg    ={ featuresNames.web[index].height + "px"}
                    description = { featuresNames.web[index].name}
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
