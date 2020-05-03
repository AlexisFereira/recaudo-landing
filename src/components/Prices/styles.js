import styled from "@emotion/styled";
import Flex from "../Flex";
import {Colors} from "../Btn";


export const IconBool = styled.div`
        height:20px;
        width:20px;
        background:url(img/checkError.png);
        background-size:auto 200%;
        background-repeat:no-repeat;
        margin:auto;
        background-position: 0 ${props => props.position};
`;

export const PlanS = styled.div`
       flex:${props => props.flex};
       background:white;
       
       @media all and (max-width:997px){
       border-radius:4px;
       margin:0 4px;
        border:1px solid #cbcbcb;
       }
`;

export const PricePlanS = styled(Flex)`
    
    width:210px;
    flex:${props => props.flex};
    padding: 25px 5px 20px;
    position:sticky;
    background:white;
    top:85px;
    z-index:10;
    border-bottom:1px solid #e4e4e4;
    
           
    .content{
        border:10px;
        position:relative;
        box-shadow : ${props => props.selected ? "0 3px 8px rgba(0,0,0,.2)" : "none"};
        background : ${props => props.selected ? "#FAFAFA" : "transparent"};
        min-height:230px;
        width: 200px;
        
        .label {
            position:absolute;
            top:-15px;
            left: calc(100% - 65px) 
            font-weight:bold;
            color:white;
            text-align:center;
            height:30px;
            width:130px;
            border-radius:15px;
            background:${Colors.naranja};
            padding:.25em .75em;
            
        }
        
        .name{
            font-size: 30px;
            line-height: 1.3em;
            display: flex;
            align-items: center;
            text-align: center;
            color: #030F51;
            padding:15px 10px;
            font-weight:bold;
        }
        .price{
            font-size: 20px;
            line-height: 18px;
            display: flex;
            align-items: center;
            text-align: center;
            color: #222222;
            
            span{
                font-size:18px;
            }
        }
        .description{
            color:#8C8C91;
            font-size:15px;
        }
        
    }
    
` ;

export const ItemDesc = styled(Flex)`
    color:#3a3a3a;
    min-height:${props => props.hg};
    width:100%;
    background:${props => props.type === "space" ? "#F7F7F7": "transparent"};
 
`;

export const DescItem= styled(Flex)`
    width:100%;
    min-height: 50px;
    
    .text{
        flex:1 0 80%;
        text-align:left;
    }
    .tool{
        flex:30px;
    }
`;


export const PlanSelectorCont = styled(Flex)`
    position:sticky;
    padding:10px;
    width:100%;
    top:85px;
    z-index:3;
    background:white;
    border-bottom:1px solid #e4e4e4;
 
    .title{
        color:${Colors.azul};
        font-size:26px;
        font-weight:bold;
        width:100%;
        text-align:center;
    }
    
    .borde-botones{
        position:relative;
        height:45px;
        border-radius:23px;
        border:2px solid ${Colors.naranja};
        width:210px;
        padding:2px;
        overflow:hidden;
    }
    
    button{
        flex:1 0 45%;
        text-align:center;
        color:${Colors.naranja};
        font-weight:bold;
        background:transparent;
        position:relative;
        z-index:2;
    }
    
    button.active{
        color:white;
        transition: all 500ms cubic-bezier(0.680, -0.550, 0.265, 1.550);
    }
    
    .mancha{
        width:50%;
        position:absolute;
        left:${props => props.right ? "calc(50% - 4px)" : "4px"};
        height:calc(100% - 8px);
        border-radius:20px;
        background:${Colors.naranja};
        transition: all 500ms cubic-bezier(0.680, -0.550, 0.265, 1.550);
    }
    
    @media all and (min-width:998px){
        min-height:274px;
        width: 270px;
        flex:1 0 260px;
        padding:25px 10px;
    }
`;

export const DescriptionResponsive = styled.div`
    text-decoration: ${props => props.dashed ? "line-through" :  "none"};
    color:${props => props.dashed ? "#cbcbcb" :  "black"};
    font-size: 14px;
    line-height:1.4em;
    max-width:200px;
`;



