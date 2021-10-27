const TOPICOS = '_TOPICOS'

export function ErroValidacao (errors){
    this.errors = errors;
}




export default class TopicoService {

    validar = (topico) => {
        const errors = []

        if(!topico.nome){
            errors.push('O campo Nome é obrigatório!')
        }



        // if(!topico.formecedor){
        //     errors.push('O campo Fornecedor é obrigatório!')
        // }


        if (errors.length > 0){
            throw new ErroValidacao(errors)
        }
    }

    obterTopicos = () => {
        const topicos = localStorage.getItem(TOPICOS)
        if(!topicos){
            return[];
        }
        return JSON.parse(topicos)
    }

    obterIndex = (tipo) => {
        let index = null
        this.obterTopicos ().forEach((topico,i) =>{
            if(topico.tipo === tipo){
                index = i;
            }
        })

        return index;

        
    }

    deletar = (tipo) =>{
        const index = this.obterIndex(tipo)
        if(index !== null){
            const topicos = this.obterTopicos()
            topicos.splice(index,1)
            localStorage.setItem(TOPICOS,JSON.stringify(topicos))
            return topicos
            

        }
    }

    salvar = (topico) => {

        this.validar(topico)

      let topicos = localStorage.getItem(TOPICOS)
      if (!topicos){
          topicos = []
      }else {
          topicos = JSON.parse(topicos)
      }

     const index =   this.obterIndex(topico.tipo)
     if (index === null){
        topicos.push(topico);
     }else{
         topicos[index] = topico;
     }

    

     localStorage.setItem(TOPICOS,JSON.stringify(topicos))
    }
}