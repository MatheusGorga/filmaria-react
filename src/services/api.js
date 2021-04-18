import axios from  'axios'

//Base Url = https://sujeitoprogramador.com/
const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com'
});

export default api;

// todos os filmes = r-api/?api=filmes/

// filme com id = r-api/?api=filmes/{id}
