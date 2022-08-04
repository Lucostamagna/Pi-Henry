import React from "react";
import styles from './Pagination.module.css'

export default function Pagination({pokemonsPerPage,allPokemons,pagination}) {
  const pageNumbers = [];
  for (let i = 0; i <= Math.ceil(allPokemons/pokemonsPerPage); i++) {
    //math.ceil lo redonde para arriba
    pageNumbers.push(i + 1);
  }
  return (
    //me renderiza los numeros
    <nav>
      <ul className={styles.list}>
        {
        pageNumbers?.map(number => (
          <li  className={styles.items} key={number}>
            <a onClick={() => pagination(number)}>{number}</a>
          </li>
        ))
        }
      </ul>
    </nav>
  );
}
