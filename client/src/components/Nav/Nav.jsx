import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <div>

           <h2 className={styles.name}> POKEMON APP  </h2>
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
