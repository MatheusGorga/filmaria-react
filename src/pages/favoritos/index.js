import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import './favoritos.css'




export default function Favoritos(){
    const [loading, setLoading] = useState(true)
    const [filmes, setFilmes] = useState([]) 

    function handleDelete(id){
        let filtroFilmes = filmes.filter( (i) => {
            return(i.id !== id)
        })
        setFilmes(filtroFilmes)
        localStorage.setItem('filmes', JSON.stringify(filtroFilmes))

        toast.success('Filme excluido com sucesso')
    }

    useEffect( () => {

        setTimeout(
            function load(){
                const minhaLista = localStorage.getItem('filmes')
                setFilmes(JSON.parse(minhaLista) || [] )
                setLoading(false)
            }, 500
        )
       
        
        
    },[])


    if(loading){
        return (
            <div className="contanier-loader">
                <div className="loader"></div>
                <h2>Aguarde...</h2>
            </div>
        )
    }

    return(
        <div className="meus-filmes">
            <h1>Meus Filmes</h1>
            
                {filmes.length === 0 && 
                <div className="notFound" >
                <h1>Oooops</h1>
                <span> Voce ainda não possui nenhum filme salvo 😕 </span>
                <div >
                <Link className="notFoundLink" to={`/filme`} >Acessar Filmes</Link>
                </div>
                </div>}

            <ul>
                {
                    filmes.map( (i) => {
                        return(
                            <li key={i.id}>
                                <span> {i.nome} </span>

                                <div>
                                    <Link to={`/filme/${i.id}`} >Ver Detalhes</Link>
                                    <button  onClick={() => handleDelete(i.id)} > ❌ </button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}