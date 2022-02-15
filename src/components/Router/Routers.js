import React from 'react';
import {Route} from "react-router-dom";
import Search from "../../pages/Products/Search";
import ResultSearch from "../../pages/Products/ResultSearch";
import Detail from "../../pages/Products/Detail";

const Routers = () => {
    return (
        <>
            <Route exact path="/">
                <Search/>
            </Route>
            <Route exact path="/items">
                <ResultSearch/>
            </Route>
            <Route exact path="/items/:id">
                <Detail/>
            </Route>
        </>
    )
}

export default Routers;