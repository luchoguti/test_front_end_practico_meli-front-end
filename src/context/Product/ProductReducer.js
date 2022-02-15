import {
    ERROR_DETAIL_PRODUCT, ERROR_PRODUCT,
    ERROR_QUERY_SEARCH,
    GET_DETAIL_PRODUCT, GET_PRODUCT,
    GET_RESULT_QUERY_SEARCH,
    LOADING_QUERY_SEARCH
} from "../Type";

const ProductReducer = (state, action) => {
    const {payload, type} = action;
    switch (type) {
        case GET_RESULT_QUERY_SEARCH:
            return {
                ...state,
                listResponseSearch: payload,
                loadingQuerySearch: false,
            }
        case ERROR_QUERY_SEARCH:
            return {
                ...state,
                errorQuerySearch: payload,
                loadingQuerySearch: false,
            }
        case LOADING_QUERY_SEARCH:
            return {
                ...state,
                loadingQuerySearch:true,
            }
        case GET_DETAIL_PRODUCT:
            return {
                ...state,
                detailProduct:payload,
            }
        case ERROR_DETAIL_PRODUCT:
            return {
                ...state,
                errorDetailProduct:payload,
            }
        case GET_PRODUCT:
            return {
                ...state,
                product:payload
            }
        case ERROR_PRODUCT:
            return {
                ...state,
                errorQueryProduct:payload,
            }
        default:
            return state;
    }
}
export default ProductReducer;