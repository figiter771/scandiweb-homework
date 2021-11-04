import React, { Component } from "react";
import { connect } from "react-redux";
import { IProducts } from "../../../CustomTypes/ApiObjectTypes";
import { reducersType } from "../../../State/Reducers/Reducers";
import { ProductCard } from "./ProductCard/ProductCard";
import * as S from "./StoreCategoryStyles"

interface Props {
    products: IProducts,
    selectedCategory: string;
}

class StoreCategory extends Component<Props> {
    render() {
        return (
            <S.StoreCategory>
                <S.CategoryName>
                    Selected category
                </S.CategoryName>

                <S.ItemContainerGrid>
                    {/* 
                    FOLLOWING LOGIC:
                    if (products gotten) {
                        if (default category) {
                            show default category
                        }
                        else (go through all products){
                          if (selected category) {
                            show selected category
                          }  
                        }
                    }
                     */}
                    {
                        this.props.products.categories && (
                            this.props.selectedCategory === "home" ?
                            this.props.products.categories[0].products.map((product) => {
                                return (
                                    <ProductCard key={product.id} name={product.name} image={product.gallery[0]} price={99.99} />
                                );
                            }) :
                            this.props.products.categories.map((category) => (
                                category.name === this.props.selectedCategory &&
                                    category.products.map((product) => {
                                        return (
                                            <ProductCard key={product.id} name={product.name} image={product.gallery[0]} price={99.99} />
                                        );
                                    })
                            ))
                        )
                    }
                </S.ItemContainerGrid>

            </S.StoreCategory>
        )
    }
}
const mapStateToProps = (state: reducersType) => {
    return {
        products: state.products
    }
};
export default connect(mapStateToProps)(StoreCategory)