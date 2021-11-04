import styled from "styled-components";

export const ProductCard = styled.div`
display:flex;
flex-wrap: wrap;
width:100%;
/* height:100%; */
text-align:center;
`
export const ItemImage = styled.img`
  max-width: 100%;
  width: 100%;
  height: 80%;
  /* max-height: 100%; */
  /* max-height: 400px; */
  padding: 10px;
  margin: auto;
  transition: all 0.5s;
  /* object-fit: contain; */
  object-fit: cover;
  object-position: 50% 50%;
  box-sizing: border-box;

  &:hover{
      /* object-fit:cover; */
      /* width: 100%; */
      transform: scale(105%);
      /* padding:0px; */
  }
  `
export const ProductName = styled.div`
margin-left:10px;
/* height:10%; */
text-align: left;
font-family: Raleway;
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 160%;
color: #1D1F22;
  `

export const Br = styled.div`
  flex-basis: 100%;
  height: 0;
`