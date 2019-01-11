import * as types from '../constants/ActionType';

export const setProductCount = (productId, count) => ({
    type: types.SET_PRODUCT_COUNT,
    payload: {count, productId}
});
