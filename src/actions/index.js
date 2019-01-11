import * as types from '../constants/ActionType';

export const setProductCount = (id, count) => ({
    type: types.SET_PRODUCT_COUNT,
    payload: {count, id}
});
