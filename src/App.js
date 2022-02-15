import React from 'react';
import {
    BrowserRouter as Router,
    Switch, Route
} from "react-router-dom";
import './App.css';
import Routers from "./components/Router/Routers";
import {QueryParamProvider} from 'use-query-params';

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import ProductState from "./context/Product/ProductState";

function App() {
    return (
        <Router>
            <ProductState>
                <QueryParamProvider ReactRouterRoute={Route}>
                    <Switch>
                        <Routers/>
                    </Switch>
                </QueryParamProvider>
            </ProductState>
        </Router>
    );
}

export default App;
