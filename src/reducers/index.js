import {SET_PRODUCT_COUNT} from "../constants/ActionType";

import products from '../api/products'


const initialState = {
    products,
    cart: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_PRODUCT_COUNT:
            console.log(action);
            return {
                ...state,
                cart: {
                    ...state.cart,
                    [action.payload.id]: action.payload.count
                }
            };

        default:
            return state;
    }
}

