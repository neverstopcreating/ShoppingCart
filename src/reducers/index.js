import {SET_PRODUCT_COUNT} from "../constants/ActionType";

import products from '../api/products'
import {setProductCount} from "../actions";



const initialState = {
    products,
    cart: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_PRODUCT_COUNT:
        // do stuff

            return Object.assign({}, state, {
                cart: setProductCount.count
            });

        default:
            return state;
    }
}

