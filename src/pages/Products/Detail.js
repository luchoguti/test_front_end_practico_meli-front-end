import React, {useContext, useEffect, useState} from 'react';
import ProdSearch from "../../components/Products/ProdSearch";
import ProdDetail from "../../components/Products/ProdDetail";
import {useParams,useLocation} from "react-router-dom";
import ProductContext from "../../context/Product/ProductContext";

const Detail = () => {
    const { id } = useParams();
    const location = useLocation();
    const [word,setWord] = useState('');
    const {
        queryProduct,
        queryDetailProduct,
    } = useContext(ProductContext);
    
    useEffect(async ()=>{
        if(typeof location.state.word_search !== 'undefined'){
            setWord(location.state.word_search);
        }
        await queryDetailProduct(id);
        await queryProduct(id);
    },[]);
    return (
        <div className="body-detail">
            <ProdSearch wordSearch={word} />
            <ProdDetail wordSearch={word} prod_id={id} />
        </div>
    )
}
export default Detail;