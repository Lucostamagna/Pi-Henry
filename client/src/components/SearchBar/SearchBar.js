import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonsByName } from "../../action/action";



const SearchBar = () => {

    const dispatch= useDispatch();
    const [name, setName] =useState('') //estado local

const handleInputChange = (e) =>{
    e.preventDefault();
    setName(e.target.value);
    console.log(name);
}
const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(getPokemonsByName(name));
    setName('')

}


return(
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search..." onChange={e => {handleInputChange(e)}} value={name}/>
        <button type="submit" > Search</button>
        </form>  
    </div>
    
)
};
export default SearchBar;