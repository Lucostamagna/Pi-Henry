import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, } from "../../action/action";
import Filters from "../Filters.js/Filter";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";
import Pagination from "../Pagination/Pagination";
import Nav from "../Nav/Nav";
import SearchBar from "../SearchBar/SearchBar";

import style from "./Home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons);
  //const [order, setOrder] = useState("");

  //_______________Paginado
  const [currentPage, setCurrentPage] = useState(1); //useState- estado local guardame en un estado local la pagina actual y seteamela. la pagina actual es uno
  const [pokemonsPerPage, setPokemonsPerPage] = useState(12); // tbm es un estado local y guardame cuando personaje quiero por pagina
  const indexOfLastPokemon = currentPage * pokemonsPerPage; //indice del ultimo personaje por pagina. primero es 12
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = allPokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  ); //agarro el arreglo de todos mis pokes y le digo toma el indice del rpimero y del ultimo
  const [order, setOrder] = useState("");

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);



  return (
    <div className={style.home}>
      {allPokemons.length > 0 ? (
        <div>
       
          <Nav />
          <div className={style.home2}>
            <div className={style.filters}>
              <Filters setCurrentPage={setCurrentPage} setOrder={setOrder} />   
            </div>
            <div>
              <div>
                <SearchBar />
              </div>

              <div>
                <Pagination
                  pokemonsPerPage={pokemonsPerPage}
                  allPokemons={allPokemons.length}
                  pagination={pagination}
                />
              </div>
              <div className={style.cards}>
                {currentPokemons?.map((e, k) => {
                  return (
                    <div className={style.card}>
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
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
