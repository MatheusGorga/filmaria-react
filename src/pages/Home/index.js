import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import './home.css'



function Home() {

  const [filmes, setFilmes] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    
    async function loadFilmes(){

      const response = await api.get('r-api/?api=filmes/')
      console.log(response.data)
      setFilmes(response.data);

      setLoading(false)
    }

    loadFilmes();
  }, [])

  if(loading){
    return (
        <div className="contanier-loader">
            <div className="loader"></div>
            <h2>Aguarde...</h2>
        </div>
    )
}

    return (
      <div className="container" >
        <div className="lista-filmes" >
            {
              filmes.map((i) => {
                return(
                  <article key={i.id} >
                    <strong>{i.nome}</strong>
                    <img src={i.foto} alt={i.nome}/>
                    <Link  to={`/filme/${i.id}`} >Acessar</Link>
                  </article>
                )
              } )
            }
        </div>
        
      </div>
    );
  }
  
  export default Home;
  
