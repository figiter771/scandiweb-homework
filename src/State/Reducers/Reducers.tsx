import { combineReducers } from "redux";
import CartReducer from "./CartReducer/CartReducer";
import ProductsReducer from "./ProductsReducer/ProductsReducer";

const reducers = combineReducers({
    cart:CartReducer,
    products:ProductsReducer
});
export default reducers

export type reducersType = ReturnType<typeof reducers>