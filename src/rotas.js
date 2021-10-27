import React from "react";
import { Switch,Route } from "react-router-dom";

import Home from "./views/Home";
import CadastroTopicos from "./views/topicos/Cadastro";

import ConsultaTopicos from "./views/topicos/Consulta";


export default () => {
    return(
        <>
            
                <Switch>
                    <Route exact path="/cadastro-topicos/:tipo?" component={CadastroTopicos}/>
                    <Route exact path="/consulta-topicos" component={ConsultaTopicos}/>
                    <Route exact path="/" component={Home}/>
                    

                </Switch>
        
        </>
    );
}