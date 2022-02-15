import {useReducer} from "react";
import axios from "axios";
import ProductReducer from "./ProductReducer";
import ProductContext from "./ProductContext";

const ProductState = (props) => {
    const initialState = {
        listResponseSearch: {},
        detailProduct:{},
        product:{},
        errorQuerySearch: false,
        errorDetailProduct: false,
        errorQueryProduct:false,
        loadingQuerySearch: true,
    }
    const [stateProducts, dispatch] = useReducer(ProductReducer, initialState);

    /***
     *  Method query search in the server with axios
     * @param wordSearch
     * @returns {Promise<void>}
     */
    const queryDataSearch = async (wordSearch) => {
        dispatch({
            type: "LOADING_QUERY_SEARCH"
        });
        try {
            const response = await axios({
                method: "get",
                url: `https://www.testbackendmeli.bybcortinas.com/search?query=${wordSearch}`,
                mode: 'no-cors',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                },
            });
            let filter_results = Object.values(response.data.results).filter((data,key)=>{
                 return key < 4;
            });
            dispatch({
                type: "GET_RESULT_QUERY_SEARCH",
                payload: filter_results
            });
        } catch (e) {
            dispatch({
                type: "ERROR_QUERY_SEARCH",
                payload: e
            });
            console.error(e);
        }
    }
    /***
     *  Method query Detail Product in the server with axios
     * @param id
     * @returns {Promise<void>}
     */
    const queryDetailProduct = async (id) =>{
        try {
            const response = await axios({
                method: "get",
                url: `https://www.testbackendmeli.bybcortinas.com/items/${id}/description`,
            });
            dispatch({
                type: "GET_DETAIL_PRODUCT",
                payload: response.data
            });
        } catch (e) {
            dispatch({
                type: "ERROR_DETAIL_PRODUCT",
                payload: e
            });
            console.error(e);
        }
    }
    /***
     * Method query a product in the server with axios
     * @param id
     * @returns {Promise<void>}
     */
    const queryProduct = async (id) =>{
        try {
            const response = await axios({
                method: "get",
                url: `https://www.testbackendmeli.bybcortinas.com/items/${id}`,
            });
            dispatch({
                type: "GET_PRODUCT",
                payload: response.data
            });
        } catch (e) {
            dispatch({
                type: "ERROR_PRODUCT",
                payload: e
            });
            console.error(e);
        }
    }
    return (
        <ProductContext.Provider value={{
            listResponseSearch: stateProducts.listResponseSearch,
            errorQuerySearch: stateProducts.errorQuerySearch,
            loadingQuerySearch: stateProducts.loadingQuerySearch,
            detailProduct: stateProducts.detailProduct,
            errorDetailProduct: stateProducts.errorDetailProduct,
            product: stateProducts.product,
            errorQueryProduct: stateProducts.errorQueryProduct,
            queryDataSearch,
            queryDetailProduct,
            queryProduct
        }}>
            {
                props.children
            }
        </ProductContext.Provider>
    )
}
export default ProductState;