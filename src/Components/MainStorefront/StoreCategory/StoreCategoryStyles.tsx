import styled from "styled-components";

export const StoreCategory = styled.div`
`

export const CategoryName = styled.p`
font-family: Raleway;
font-style: normal;
font-weight: normal;
font-size: 42px;
line-height: 160%;
align-items: center;
`



export const ItemContainerGrid = styled.div`
  display:grid;
  /* grid-template-rows: 20% 20%; */
  grid-auto-rows: 40%;
  /* grid-auto-rows: min-content; */
  grid-template-columns: 30% 30% 30%;
  grid-column-gap: 20px;
  grid-row-gap: 30px;
  justify-content: center;
`