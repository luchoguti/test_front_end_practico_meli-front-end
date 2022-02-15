import {InputText} from "primereact/inputtext";
import React, {useContext, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import ProductContext from "../../context/Product/ProductContext";


const ProdSearch = (props) => {
    const [inputSearch, setInputSearch] = useState(props.wordSearch);
    const routerHistory = useHistory();
    const {
        queryDataSearch
    } = useContext(ProductContext);
    /***
     * Method search word
     * @returns {Promise<void>}
     */
    const searchWord = async () => {
        await queryDataSearch(inputSearch);
        routerHistory.push(`/items?search=${inputSearch}`);
    }
    /***
     * Method Search by key Down Enter
     * @param e
     */
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            searchWord();
        }
    }
    return (
        <div>
            <div className="card color-banner-search">
                <div className="p-fluid grid">
                    <div className="field col-1 col-offset-1 mt-3">
                        <Link to={
                            {
                                pathname: `/`,
                            }
                        }>
                            <img src="/Logo_ML.png" className="logo-search-meli"/>
                        </Link>
                    </div>
                    <div className="field col-8 mt-3">
                        <div className="p-inputgroup">
                            <InputText
                                value={inputSearch}
                                onChange={(e) => setInputSearch(e.target.value)}
                                onKeyDown={(event)=>{
                                    handleKeyDown(event);
                                }}
                                placeholder="Nunca dejes de buscar"
                            />
                            <span className="p-inputgroup-addon btn-search" onClick={searchWord}>
                                <i className="pi pi-search icon-search"/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProdSearch;