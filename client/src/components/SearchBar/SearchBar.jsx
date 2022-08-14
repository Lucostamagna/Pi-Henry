import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonsByName, cleanPokemons} from "../../action/action";
import style from './SearchBar.module.css'

//traerme los pokemones en un estado
//dispatch (useEffect) e importarlo
//

//

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState(""); 

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
    console.log(name);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name !== ""){ // hacer un condicional, preguntando si el nombre es diferente al existtente
    dispatch(getPokemonsByName(name));
    dispatch(cleanPokemons(dispatch))
    }
    setName("");
  };

  return (
    <div className={style.div}>
      <form className={style.search} onSubmit={handleSubmit}>
        <input
          className={style.input}
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            handleInputChange(e);
          }}
          value={name}
        />
        <button className={style.submit} type="submit">
          {" "}
          Search
        </button>
      </form>
    </div>
  );
};
export default SearchBar;