import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, orderName } from "../../action/action";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import Filter from "../Filters.js/Filter";
import SearchBar from "../SearchBar/SearchBar";
import { filterPokemonByType, filterCreated, } from "../../action/action";
import { orderByAttack } from "../../action/action";













export default function Home() {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons);
  const [order, setOrder] = useState('');

  //paginado
  const [currentPage, setCurrentPage] = useState(1); //useState- estado local guardame en un estado local la pagina actual y seteamela. la pagina actual es uno
  const [pokemonsPerPage, setPokemonsPerPage] = useState(12); // tbm es un estado local y guardame cuando personaje quiero por pagina
  const indexOfLastPokemon = currentPage * pokemonsPerPage; //indice del ultimo personaje por pagina. primero es 12
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = allPokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  ); //agarro el arreglo de todos mis pokes y le digo toma el indice del rpimero y del ultimo




  
  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);


  function handleFilterType(e) {
   
    dispatch(filterPokemonByType(e.target.value));
  }
function handleFilterCreated(e){

  dispatch(filterCreated(e.target.value))
}
//e => {handleFilterCreated(e)}
function handleSort(e){
  e.preventDefault()
  dispatch(orderName(e.target.value))

  setOrder(e.target.value)
  setCurrentPage(1);

}


function handleSortByAttack(e){
  e.preventDefault()
  dispatch(orderByAttack(e.target.value))
  setOrder(e.target.value)
  setCurrentPage(1);

}
  return (
    <div>
      <h1> titulo</h1>
      <select onChange={handleSort}>
      <option value="Filtro"> A-Z:</option>
            <option value="asc">upward</option>
            <option value="desc">falling</option>
      </select>
      <select onChange={handleSortByAttack}>
      <option value="Strength"> Strength </option>
            <option value="Mayor fuerza">More strong</option>
            <option value="Menor fuerza">Less strong</option>
      </select>
      <select onChange={handleFilterCreated}> 
      <option value="All"> ALL</option>
            <option value="api"> API </option>
            <option value="created"> CREATED </option>
            
      </select>
      
      <select onChange={ handleFilterType}>
            <option value="All"> ALL </option>
            <option value="normal"> Normal </option>
            <option value="flying"> Flying </option>
            <option value="poison"> Poison </option>
            <option value="ground"> Ground </option>
            <option value="bug"> Bug </option>
            <option value="fire"> Fire </option>
            <option value="water"> Water </option>
            <option value="grass"> Grass </option>
            <option value="electric"> Electric </option>
            <option value="fairy"> Fairy </option>
      </select>
      <div>
        <Pagination
          pokemonsPerPage={pokemonsPerPage}
          allPokemons={allPokemons.length}
          pagination={pagination}
        />
        <SearchBar/>
        
       
      </div>
      <div>
        {currentPokemons?.map((e, k) => {
          return (
            <div key={k}>
              <Card
                key={e.id}
                id={e.id}
                name={e.name}
                img={e.img}
                types={e.types}
              />{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
}
