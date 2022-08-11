import React from "react";
import styles from "./Pagination.module.css";

export default function Pagination({
  pokemonsPerPage,
  allPokemons,
  pagination,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allPokemons / pokemonsPerPage); i++) {
    //math.ceil lo redonde para arriba
    pageNumbers.push(i);
  }
  return (
    <div className={styles.div}>
      <ul className={styles.list}>
        {pageNumbers?.map((number) => (
          <li className={styles.items} key={number}>
            <button className={styles.btn} onClick={() => pagination(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
