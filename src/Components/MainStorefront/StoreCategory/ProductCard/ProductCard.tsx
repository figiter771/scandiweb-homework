import { Component } from "react";
import * as S from "./ProductCardStyles"

interface Props {
    image: string,
    name: string,
    price: number,
}
export class ProductCard extends Component<Props> {
    render() {
        return (
            <S.ProductCard>
                <S.ItemImage alt={this.props.name} src={this.props.image}/>
                <S.Br/>
                <S.ProductName>{this.props.name}</S.ProductName>
                <S.Br/>
                <S.ProductName>{this.props.price} Moneys</S.ProductName>
            </S.ProductCard>
        )
    }
}
