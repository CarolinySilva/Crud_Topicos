import React from "react";
import { Switch,Route } from "react-router-dom";

import Home from "./views/Home";
import CadastroProdutos from "./views/produtos/Cadastro";

import ConsultaProdutos from "./views/produtos/Consulta";


export default () => {
    return(
        <>
            
                <Switch>
                    <Route exact path="/cadastro-produtos/:sku?" component={CadastroProdutos}/>
                    <Route exact path="/consulta-produtos" component={ConsultaProdutos}/>
                    <Route exact path="/" component={Home}/>
                    

                </Switch>
        
        </>
    );
}