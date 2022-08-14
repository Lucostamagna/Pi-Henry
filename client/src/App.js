import React from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom';//?????
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home.jsx';
import PokemonCreate from './components/PokemonCreate/PokemonCreate';
import Detail from './components/Details/Details';
import About from './components/About/About';



function App() {
  return (
  
    <div className="App">
    
      <Route exact path='/' component={LandingPage}/>
      <Route exact path ='/about' component={About}/>
      <Route exact path='/home'component={Home}/>
      <Route exact path= '/pokemons' component={PokemonCreate}/>
      <Route exact path='/pokemons/:id' component={Detail} />
      
      
     
    </div>
  
  );
}

export default App;
