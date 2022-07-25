import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPokemons} from '../../redux/actions'
import {Link} from 'react-router-dom';
import Card from "../Card/Card";



export default function Home (){
    const dispatch = useDispatch()
    const allPokemons= useSelector((state) => state.pokemons)

    useEffect(()=>{
        dispatch(getPokemons())
    },[dispatch])

const handleClick=(e)=> { //le paso un evento
e.preventDefault();//para que no se rompa
dispatch(getPokemons());//me lo resetea si se me cuelga la pagina
    }

    return(
        <div>
        <Link  to='/pokemons'> Crear Pokemon </Link>
        <h1> TITULO DE PAGINA</h1>
        <button onClick={e=>{handleClick(e)}}> 
            volver a cargar pokemons
        </button>
        <div>
        
            <select>
              <option value="asc"> ASC</option>
              <option value="desc"> DESC</option>
            </select>
            <select>
                <option> filtrar por estado - agregar</option>

            </select>

            {allPokemons ?.map((e) => {
              return (
                <fragment>
                  <Link to={"/home/" + e.id}>
                    <Card
                      name={e.name}
                      image={e.image}
                      types={e.types}
                    />
                  </Link>
                </fragment>
              )
            })}
        </div>
        </div>
    )
}
