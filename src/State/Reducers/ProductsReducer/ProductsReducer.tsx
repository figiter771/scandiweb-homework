import { IProducts } from "../../../CustomTypes/ApiObjectTypes";
import { ACTION } from "../../../Dictionaries/Actions";
const initialState = {} as IProducts;

interface ProductsAction {
    type: string,
    payload: IProducts,
}

const ProductsReducer = (state:IProducts = initialState, action: ProductsAction) => {
    switch (action.type) {
        case ACTION.GET_PRODUCTS_SUCCESS:
            return action.payload
        default:
            return state
    }
}

export default ProductsReducer
