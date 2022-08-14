import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postPokemon, getAllTypes, getPokemons } from "../../action/action";
import style from './PokenonCreate.module.css'
import { Link, useHistory } from "react-router-dom";
import validate from "./Validation";


const PokemonCreate = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const types = useSelector((state) => state.types);
const allPokemons = useSelector((state)=> state.pokemons)


const [boolean, setBoolean] = useState(false);
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
    img: "",
  });

  function handleChange(e) { 
    //maneja el cambio de mis input
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    console.log(input);
  }

  const handleSelect = (e) => {
    if (input.types.length < 2) {
      setInput({
        ...input,
        types: [...input.types, e.target.value],
      });
    } else {
      alert("Two types of pokemon at most");
    }
  };

  
  function handleReset(){
    setInput({
      ...input,
      types:[]
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      input.name !== "" &&
      !errors.name &&
      !errors.hp &&
      !errors.attack &&
      !errors.defense &&
      !errors.speed &&
      !errors.height &&
      !errors.weight &&
      !errors.img &&
      !errors.type
    ) {
      dispatch(postPokemon(input));
      alert("Pokemon created");
      setInput({
        name: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        types: [],
        img: "",
      });
      history.push("/home");
    } else {
      alert("Error, complete correctly");
    }
  }

  useEffect(() => {
    dispatch(getAllTypes());
    dispatch(getPokemons());
  }, [dispatch]);

  useEffect(()=>{
    setErrors(validate(input,allPokemons))
  },[input])

  return (
    <div>
      <Link to="/home">
        <button className={style.btn}>BACK </button>
      </Link>

      <form onSubmit={handleSubmit}>
        <div className={style.div}>
          <label className={style.label}> Name:</label>
          <input
            type="text"
            value={input.name}
            name="name"
            onChange={handleChange}
            placeholder="Name"
            className={style.input}
          />
          {errors.name && <p className={style.error}>{errors.name} </p>}

          <label className={style.label}> Speed:</label>
          <input
            type="number"
            value={input.speed}
            name="speed"
            onChange={handleChange}
            placeholder="Speed"
            className={style.input}
          />
          {errors.speed && <p className={style.error}>{errors.speed} </p>}

          <label className={style.label}> Attack: </label>
          <input
            type="number"
            value={input.attack}
            name="attack"
            onChange={handleChange}
            placeholder="Attack"
            className={style.input}
          />
          {errors.attack && <p className={style.error}>{errors.attack} </p>}

          <label className={style.label}> Defense:</label>
          <input
            type="number"
            value={input.defense}
            name="defense"
            onChange={handleChange}
            placeholder="Defense"
            className={style.input}
          />
          {errors.defense && <p className={style.error}>{errors.defense} </p>}

          <label className={style.label}> Hp:</label>
          <input
            type="number"
            value={input.hp}
            name="hp"
            onChange={handleChange}
            placeholder="Hp"
            className={style.input}
          />
          {errors.hp && <p className={style.error}>{errors.hp} </p>}

          <label className={style.label}> Height: </label>
          <input
            type="number"
            value={input.height}
            name="height"
            onChange={handleChange}
            placeholder="Height"
            className={style.input}
          />
          {errors.height && <p className={style.error}>{errors.height} </p>}

          <label className={style.label}> Weight: </label>
          <input
            type="number"
            value={input.weight}
            name="weight"
            onChange={handleChange}
            placeholder="Weight"
            className={style.input}
          />
          {errors.weight && <p className={style.error}>{errors.weight} </p>}

          <label className={style.label}>Img:</label>
          <input
            type="text"
            value={input.img}
            name="img"
            onChange={handleChange}
            placeholder="Img"
            className={style.input}
          />
          {errors.img && <p className={style.error}>{errors.img} </p>}



          <label className={style.label}>Types:</label>
          <select onChange={handleSelect}>
            <option className={style.select}>Select type</option>

            {types.map((type) => (
              <option value={type.name} key={type.name}>{type.name}</option>
            ))}
          </select>
          <div>
            {
              input.types.map((t) => (

                <div className={style.label} 
                key={t}> {t}
              
                 </div>
                
              ))}

            {boolean && errors.types ? (
              <span className={style.error}>{errors.types}</span>
            ) : null}
          </div>
          <div> <button type='reset' onClick={handleReset} className={style.btnn} >Clean</button> </div>
        </div>
        <button className={style.button} type="submit">
          {" "}
          CREATE!
        </button>
      </form>
    </div>
  );
};

export default PokemonCreate;
