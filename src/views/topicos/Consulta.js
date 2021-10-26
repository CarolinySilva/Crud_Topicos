import React from "react";

import ProdutoService from '../../app/produtoService'

import { withRouter } from "react-router";

class ConsultaProdutos extends React.Component{


    state = {
        topicos : []
    }

    constructor(){
        super()
        this.service = new ProdutoService();
    }

    componentDidMount(){
        const topicos = this.service.obterProdutos()
        this.setState({topicos})
    }

    preparaEditar = (sku) => {
        this.props.history.push(`/cadastro-topicos/${sku}`)
    }

    deletar = (sku) => {
       const topicos =  this.service.deletar(sku)
       this.setState({topicos})
    }

    render(){
        return (

        <div className="Card">
            <div className="card-header">
                Consulta Tópicos
            </div>
            <div className="card-body">

                <table className="table tale-houver">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>SKU</th>
                            <th>Preço</th>
                            <th>Fornecedor</th>
                            <th></th>
                            
                        </tr>
                    </thead>

                    <tbody>
                    {  this.state.topicos.map((topico , index )=> {

                        return (
                        <tr key={index}>
                            <th>{topico.nome}</th>
                            <th> {topico.sku} </th>
                            <th> {topico.preco} </th>
                            <th> {topico.fornecedor} </th>
                            <th>
                        <button onClick={ ()=> this.preparaEditar(topico.sku)} className="btn  btn-primary mx-2 px-4"> Editar</button>

                        <button onClick={() => this.deletar(topico.sku)}
                         className="btn btn-danger"> Remover</button>
                            </th>
                            
                        </tr>
                        )

                        })

                    }
                    </tbody>
                </table>

        </div>  

    </div>
        )
    }
    
}

export default withRouter(ConsultaProdutos);
