import React, {useContext, useEffect} from 'react';
import ProdSearch from "../../components/Products/ProdSearch";
import ProdResultSearch from "../../components/Products/ProdResultSearch";
import { useQueryParam,StringParam } from 'use-query-params';
import ProductContext from "../../context/Product/ProductContext";
import {ProgressBar} from "primereact/progressbar";

const ResultSearch = () => {
    const [wordSearch] = useQueryParam('search', StringParam);
    const {
        queryDataSearch,
        loadingQuerySearch
    } = useContext(ProductContext);
    useEffect(async ()=>{
        await queryDataSearch(wordSearch);
    },[]);
    return (
        <div className="body-search">
            <ProdSearch wordSearch={wordSearch}/>
            {
                loadingQuerySearch && (
                    <ProgressBar
                        className="progressBar"
                        mode="indeterminate"
                        showValue={false}
                        style={{marginTop: '4px'}}
                    />
                )
            }
            <ProdResultSearch wordSearch={wordSearch} />
        </div>
    )
}
export default ResultSearch;