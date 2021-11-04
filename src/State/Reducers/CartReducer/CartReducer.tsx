
const initialState = 0;
interface CartAction {
    type: string,
    payload: number,
}

 const CartReducer = (state: number = initialState, action:CartAction) => {
    switch(action.type) {
        case "addCartItem": 
            return state + action.payload
        case "removeCartItem":
            return state - action.payload
        default:
            return state
    }
}

export default CartReducer