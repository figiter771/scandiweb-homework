
import { client } from "@tilework/opus";
import { Dispatch } from "redux";
import { ACTION } from "../../../Dictionaries/Actions";
import { QUERY } from "../../../Dictionaries/Queries";

export const getProducts = () => {
    return (dispatch: Dispatch) => {
        client.post(QUERY.PRODUCTS)
            .then(result => {
                dispatch({
                    type: ACTION.GET_PRODUCTS_SUCCESS,
                    payload: result
                });
            });
        // let result = client.post(query);
        // dispatch({
        //     type: "getProductsComplete",
        //     payload: result
        // });
    }
}

// // in an action creator module:
// const simpleLogin = user => ({ type: LOGIN, user })

// // Look, no store import!

// const thunkedLogin = () =>     // action creator, when invoked…
//   dispatch =>                  // …returns thunk; when invoked with `dispatch`…
//     axios.get('/api/auth/me')  // …performs the actual effect.
//     .then(res => res.data)
//     .then(user => {
//       dispatch(simpleLogin(user))
//     })

// // somewhere in component:
// store.dispatch(thunkedLogin()) // dispatches the thunk to the store.

// // The thunk itself (`dispatch => axios.get…`) has not yet been called.
// // When it reaches the middleware, `redux-thunk` will intercept & invoke it,
// // passing in the store's `dispatch`.