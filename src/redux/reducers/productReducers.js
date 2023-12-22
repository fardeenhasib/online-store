import { actionTypes } from "../constants/actiontypes"


const iniitialState = {
    products: [],
};


export const setProductsReducer = (state = iniitialState, { type, payload }) => {

    switch (type) {
        case actionTypes.SET_PRODUCTS:
            return { ...state, products: payload };

        default:
            return { ...state };
    }
};


export const selectProductReducer = (state = {}, { type, payload }) => {

    switch (type) {
        case actionTypes.SELECTED_PRODUCT:
            return { ...state, ...payload };

        case actionTypes.REMOVE_SELECTED_PRODUCT:
            return {}

        default:
            return {};
    }
};
