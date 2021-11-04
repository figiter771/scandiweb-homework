import { Component } from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { IProducts } from "../../CustomTypes/ApiObjectTypes";
import { addCartItem, removeCartItem } from "../../State/Actions/CartActions/CartActions";
import { getProducts } from "../../State/Actions/ProductsActions/ProductsActions";
import { reducersType } from "../../State/Reducers/Reducers";
import * as S from "./MainStoreFrontStyles";
import StoreCategory from "./StoreCategory/StoreCategory";
import TopBar from "./TopBar/TopBar";

interface Props extends RouteComponentProps<Params>{
   addCartItem: Function,
   removeCartItem: Function,
   getProducts: Function,

   cart: number,
   products: IProducts,
}

interface Params {
   category : string;
}



class MainStoreFront extends Component<Props> {
   componentDidMount() {
      this.props.getProducts();
      console.log(this.props.match.params);
   }

   render() {
      return (
         <S.MainStoreFront>
            <div>
               <h1>{this.props.cart}</h1>
               <button onClick={() => { this.props.addCartItem(1) }}>AddToCart</button>
               <button onClick={() => { this.props.removeCartItem(1) }}>RemoveFromCart</button>
            </div>
            <div>
               <h1>Products</h1>
               {console.log(this.props.products)}
               <button onClick={() => { this.props.getProducts() }}>GetProducts</button>
            </div>
            <TopBar> </TopBar>
            <S.MainContainer> 
            <StoreCategory selectedCategory={this.props.match.params.category}/>
            </S.MainContainer>
         </S.MainStoreFront>
      )
   }
}

const mapStateToProps = (state: reducersType) => {
   return {
      cart: state.cart,
      products: state.products
   }
};
const mapDispatchToProps = () => {
   return {
      addCartItem,
      removeCartItem,
      getProducts
   }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps())(MainStoreFront)) 