import React from "react";
import { Link } from "react-router-dom";
import { getPokemons, } from "../../action/action";
import {  useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "./Nav.module.css";

const Nav = () => {
  const dispatch = useDispatch();

  function handleClick(e){
    e.preventDefault();
    dispatch(getPokemons())
  }
  
  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);



  return (
    <header>
      <nav className={styles.nav}>
        <div>
        <button  className={styles.button }onClick={handleClick}>  POKEMON APP </button>
          
        </div>
        <div>
          <Link to="/pokemons">
            <button className={styles.btn}>Create your Pokemon!</button>
          </Link>
        </div>
      </nav>
    </header>
  );
};
export default Nav;
