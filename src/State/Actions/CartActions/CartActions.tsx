
import { Dispatch } from "redux";

export const addCartItem = (amount: number) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: "addCartItem",
            payload: amount
        });
    }
} 

export const removeCartItem = (amount: number) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: "removeCartItem",
            payload: amount
        });
    }
} 

// export type addCartItemType = typeof addCartItem;
// export type removeCartItemType = typeof removeCartItem;
