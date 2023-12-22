import { actionTypes } from "../constants/actiontypes"

export const setProducts = (products) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: products,
    };
}

export const selectProduct = (product) => {
    return {
        type: actionTypes.SELECTED_PRODUCT,
        payload: product,
    };
}

export const removeSelectedProduct = () => {
    return {
        type: actionTypes.REMOVE_SELECTED_PRODUCT,
    };
};