import styled from "styled-components";
import { Link } from "react-router-dom";

export const TopBar = styled.div`
position: sticky;
height:70px;
background-color: #FFFFFF;
top:0;
display:flex;
z-index: 1;

`
export const CategoryContainer = styled.div`
margin-right:auto;
margin-top: auto;
margin-bottom: auto;
`
export const ShopIcon = styled.div`
position:absolute;
left: 50%;
top: 20%;
/* margin-left: "width of icon"; */
`
export const CartContainer = styled.div`
margin-left:auto;
margin-top: auto;
margin-bottom: auto;
`
export const CategoryButton = styled(Link)`
display: inline-block;
margin-left: 10px;
color: #1D1F22;
font-family: Raleway;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 120%;
align-items: center;
text-align: center;
text-transform: uppercase;
transition: color 0.3s, border 0.3s;
cursor: pointer;
border: 0px;
&:hover{
    color:#5ECE7B;
}

text-decoration: none;
&:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
}

`
export const CategoryButtonUnderline = styled.div`
    position:relative;
    width:0%;
    left: 50%;
    height: 2px;
    background: #5ECE7B;
    transition: width 0.3s,left 0.3s;
    ${CategoryButton}:hover &{
    width: 100%;
    left:0%;
  }
`
export const MoneySymbol = styled.button`
border: 0px;
cursor:pointer;
font-size: 16px;
line-height: 120%;
align-items: center;
text-align: center;
`
export const ShoppingCart = styled.button`
border:0px;
cursor:pointer;
font-size: 16px;
line-height: 120%;
align-items: center;
text-align: center;
`