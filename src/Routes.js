//import { useState } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Header from './components/Header';
import Favoritos from './pages/favoritos';
import Filme from './pages/Filme';
import Home from './pages/Home';


// const [loading, setLoading] = useState(true)
// if(loading){
//     return (
//         <div className="contanier-loader">
//             <div className="loader"></div>
//             <h2>Aguarde...</h2>
//         </div>
//     )
// }

const Routes = () => {
  
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/filme/:id" component={Filme} />
                <Route exact path="/favoritos" component={Favoritos} />
                <Redirect from='*' to='/' />

            </Switch>
        </BrowserRouter>
    )
}

export default Routes;