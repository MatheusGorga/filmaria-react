import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";
import './filme.css'



export default function Filme() {

    const {id} = useParams();
    const history = useHistory()
    const [filme, setFilmes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadFilme(){
            const response = await api.get(`r-api/?api=filmes/${id}`)
            
            if(response.data.length === 0 ){
                //id não existente navega para home
                history.replace('/')
                return;
            }
            setFilmes(response.data);
            setLoading(false)
        }
        
        loadFilme();

        return() => {
            console.log('Desmontou')
        }

    },[id, history]);

    function salvaFilme(){
        
        const minhaLista = localStorage.getItem('filmes');

        let filmesSalvos = JSON.parse(minhaLista) || [];
        //Verificar se o filme ja esta salvo com o mesmo id ignorar
        const hasFilme = filmesSalvos.some((filmeSalvos) => filmeSalvos.id === filme.id)
        if(hasFilme){
            toast.info('Voce ja possui este filme nos favoritos')
            return
        }

        filmesSalvos.push(filme);
        localStorage.setItem('filmes', JSON.stringify(filmesSalvos))
        toast.success('Salvo com sucesso')
        console.log(filmesSalvos)


    }

    if(loading){
        return (
            <div className="contanier-loader">
                <div className="loader"></div>
                <h2>Aguarde...</h2>
            </div>
        )
    }
    return (
            <div className="container">
                 <h1> {filme.nome} </h1>
                 <img src={filme.foto} alt={filme.nome}/>
                 <h3>Sinopse</h3>
                 {filme.sinopse}
                <div className="btn">
                    <button  className="btnAdc" onClick={salvaFilme} > ⭐Favorito</button>

                    <button> <a target="blank" role="button"  href={`https://www.youtube.com/results?search_query=${filme.nome} Trailer`}> 🎥 Trailer </a></button>
                </div>
            </div>
        )

}
  
  
  
