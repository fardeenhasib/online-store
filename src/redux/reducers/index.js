import { setProductsReducer, selectProductReducer } from "./productReducers"
import { combineReducers } from "redux";

const reducers = combineReducers({
    allProducts: setProductsReducer,
    product: selectProductReducer,
});

export default reducers;