import Routes from "./Routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';



function App() {
  return (
    <div className="app" >
      <Routes/>
      <ToastContainer autoClose={3000} position="bottom-right" />
    </div>
  );
}

export default App;

//https://sujeitoprogramador.com/r-api/?api=filmes/