import React from "react";

import ProdutoService from "../../app/produtoService";
import {withRouter} from 'react-router-dom'
 


class CadastroProdutos extends React.Component{

        state = {
            nome:'',
            sku:'',
            descricao:'',
            preco:0,
            fornecedor:'',
            sucesso: false,
            errors:[],
            atualizando: false
        }

        constructor (){
            super()
            this.service = new ProdutoService()
        }

        onChange = (event)=>{
          const valor =   event.target.value
          const nomeDoCampo = event.target.name
          this.setState ({[nomeDoCampo]: valor})
        }

        onSubmit = (event)=>{

            const topico = {
                nome: this.state.nome,
                sku: this.state.sku,
                descricao: this.state.descricao,
                preco: this.state.preco,
                fornecedor:this.state.fornecedor,
            }
                try{
                    this.service.salvar(topico)
                    this.limpaCampos()
                    this.setState({sucesso: true})
                } catch(erro){
                   const errors =  erro.errors
                   this.setState({errors: errors})
                }

           
        }
            
        

        limpaCampos = ()=> {
            this.setState ({
            nome:'',
            sku:'',
            descricao:'',
            preco:0,
            fornecedor:''
            });
        }

        componentDidMount(){
          const sku =  this.props.match.params.sku

          if (sku){
            const resultado = this.service.obterProdutos().filter(topico => topico.sku === sku)
            if (resultado.length === 1){
              const produtoEncontrado = resultado[0]
               this.setState({...produtoEncontrado , atualizando: true})
            }
          }
        }

    render(){
        return(
            

            <div className="Card">
                <div className="card-header">
                   {this.state.atualizando  ? 'Atualização ' : 'Cadastro '}
                   de Tópico
                </div>
                <div className="card-body">


                    {
                        this.state.sucesso &&
                            <div className="alert alert-dismissible alert-success">
                            <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                            <strong>Bem feito!</strong> Cadastro Realizado com sucesso .
                         </div>
                        
                    }

                        {
                         this.state.errors.length > 0 &&

                            this.state.errors.map(msg => {
                                return (
                                    <div className="alert alert-dismissible alert-danger">
                                    <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                                    <strong>Erro!</strong> {msg}.
                                    </div>
                                )
                            })
    
                        
                    }


                    <div className="row">
                        <div className="col-md-6">

                            <div className="form-group">
                                <label > Nome: *</label>
                                <input type="text" 
                                name="nome" 
                                onChange = {this.onChange}
                                value={this.state.nome} 
                                className="form-control" />
                            </div>

                        </div>

                        <div className="col-md-6">
                        <div className="form-group">
                                <label htmlFor=""> SKU: *</label>
                                <input type="text"
                                 name="sku"
                                 disabled={this.state.atualizando}
                                 onChange = {this.onChange}
                                value={this.state.sku}  
                                className="form-control" />
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">

                                <label>Descrição: </label>
                                <textarea className="form-control" 
                                name="descricao"
                                onChange = {this.onChange}
                                value={this.state.descricao} >

                                </textarea>

                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">

                            <div className="form-group">
                                <label > Preço: *</label>
                                <input type="text" 
                                value={this.state.preco} 
                                name="preco" 
                                onChange = {this.onChange}
                                className="form-control" />
                            </div>

                        </div>

                        <div className="col-md-6">

                            <div className="form-group">
                                <label > Fornecedor: *</label>
                                <input type="text"
                                 name="fornecedor" 
                                 onChange = {this.onChange}
                                 value={this.state.fornecedor} 
                                 className="form-control" />
                            </div>

                        </div>
                    </div>   

                    <div className="row mt-3">

                        <div className="col-md-1 mx-3">
                            <button onClick={this.onSubmit} className="btn btn-success"> 
                            {this.state.atualizando ? 'Atualizar ' : 'Salvar '}
                            </button>
                        </div>

                        <div className="col-md-1">
                            <button onClick={this.limpaCampos} className="btn btn-primary"> Limpar</button>
                        </div>
                        
                    </div> 
     

                </div>
            </div>

        
        );
    }
}



export default  withRouter (CadastroProdutos);