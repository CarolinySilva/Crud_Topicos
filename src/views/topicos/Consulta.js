import React from "react";

import TopicosService from '../../app/topicoService'

import { withRouter } from "react-router";

class ConsultTopicos extends React.Component{


    state = {
        topicos : []
    }

    constructor(){
        super()
        this.service = new TopicosService();
    }

    componentDidMount(){
        const topicos = this.service.obterTopicos()
        this.setState({topicos})
    }

    preparaEditar = (tipo) => {
        this.props.history.push(`/cadastro-topicos/${tipo}`)
    }

    deletar = (tipo) => {
       const topicos =  this.service.deletar(tipo)
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
                            <th>Tipo</th>
                            <th>Ações</th>
                            
                        </tr>
                    </thead>

                    <tbody>
                    {  this.state.topicos.map((topico , index )=> {

                        return (
                        <tr key={index}>
                            <th>{topico.nome}</th>
                            <th> {topico.tipo} </th>
                            <th>
                        <button onClick={ ()=> this.preparaEditar(topico.tipo)} className="btn  btn-primary mx-2 px-4"> Editar</button>

                        <button onClick={() => this.deletar(topico.tipo)}
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

export default withRouter(ConsultTopicos);
