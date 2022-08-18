import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonsByName, cleanPokemons} from "../../action/action";
import style from './SearchBar.module.css'


const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState(""); 

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value.toLowerCase());
    console.log(name);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name){ 
    dispatch(getPokemonsByName(name));
    setName("");
    }
    if (!name){
      alert('Write a name!');
      // dispatch(cleanPokemons());
      // dispatch(getPokemonsByName(name));
    }
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