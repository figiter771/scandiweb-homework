import React from "react";
import { Link } from "react-router-dom";
import * as S from "./TopBarStyles";

export default class TopBar extends React.Component {
    render() {
        return (
            <S.TopBar>
                <S.CategoryContainer>
                    <S.CategoryButton to="/shop/tech">
                        Technology
                        <S.CategoryButtonUnderline />
                    </S.CategoryButton>
                    <S.CategoryButton to="/shop/clothes">
                        Clothes
                        <S.CategoryButtonUnderline />
                    </S.CategoryButton>
                    <S.CategoryButton to="/shop/home">
                        Home
                        <S.CategoryButtonUnderline />
                    </S.CategoryButton>
                </S.CategoryContainer>
                <S.ShopIcon>
                    <button>icon</button>
                </S.ShopIcon>
                <S.CartContainer>
                    <S.MoneySymbol>$ˬ</S.MoneySymbol>
                    <S.ShoppingCart>🛒</S.ShoppingCart>
                </S.CartContainer>
            </S.TopBar>
        )
    }
}