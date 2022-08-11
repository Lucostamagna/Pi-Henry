import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonsByName,cleanPokemons} from "../../action/action";
import style from './SearchBar.module.css'



const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState(""); //estado local

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
    console.log(name);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(cleanPokemons(dispatch));
    dispatch(getPokemonsByName(name));
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