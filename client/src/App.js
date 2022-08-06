import React from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom';//?????
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home.jsx';
import PokemonCreate from './components/PokemonCreate/PokemonCreate';



function App() {
  return (
    
    <div className="App">
     <Switch>
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/home'component={Home}/>
      <Route exact path= '/pokemons' component={PokemonCreate}/>
     </Switch>
    </div>
  
  );
}

export default App;
