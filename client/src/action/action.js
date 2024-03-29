import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_ALLTYPES = "GET_ALLTYPES";
export const GET_POKEMONS_BY_NAME = "GET_POKEMONS_BY_NAME";
export const FILTER_BY_TYPES = "FILTER_BY_TYPE";
export const FILTER_CREATED = "FILTER_CREATED";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_ATTACK="ORDER_BY_ATTACK"
export const POST_POKEMON="POST_POKEMON"
export const GET_DETAILS='GET_DETAILS'
export const CLEAN_POKEMONS='CLEAN_POKEMONS'
export const CLEAN_DETAILS='CLEAN_DETAILS'

//-------------------------------------------------
export const getPokemons = () => {
  return async function (dispatch) {
    try{
    let json = await axios.get("http://localhost:3001/pokemons");
    return dispatch({
      type: GET_POKEMONS,
      payload: json.data,
    })
  }catch(e){
    console.log(e)
  }
  };
};

export const cleanPokemons = () => {
  return {
    type: CLEAN_POKEMONS,
    payload: [],
  };
};

export const cleanDetaild = ()=>{
  return ({
    type: CLEAN_DETAILS,
    detail:[]
    
  })
}
export const getAllTypes = () => {
  return async function (dispatch) {
    try{
    let url = "http://localhost:3001/types";
    let json = await axios.get(url);
    return dispatch({
      type: GET_ALLTYPES,
      payload: json.data,
    });
  }catch(e){
    console.log(e)
  }
  };
};


export const filterPokemonByType = (payload) => {
  return {
    type: FILTER_BY_TYPES,
    payload,
  };
};

export const filterCreated = (payload) => {
  return {
    type: FILTER_CREATED,
    payload,
  };
};

export const orderName = (payload) => {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
};

export const orderByAttack = (payload) => {
  return {
    type: ORDER_BY_ATTACK,
    payload,
  };
};


export const getPokemonsByName = (name) => {
  return async function (dispatch) {
    try {
      let json = await axios.get("http://localhost:3001/pokemons?name=" + name);
      return dispatch({
        type: GET_POKEMONS_BY_NAME,
        payload: json.data,
      });
    } catch (e) {
      alert ('Pokemon not found');
      console.log(e)
    }
  };
};

export const postPokemon = (payload) => {
  return async function (dispatch) {
    try {
      let PokemonCreated = await axios.post(
        "http://localhost:3001/pokemons",
        payload
      );
      console.log(PokemonCreated);
      alert("Successfully created pokemon");
      return PokemonCreated;
    } catch (e) {
      alert("Existing pokemon");
      console.log(e);
    }
  };
};

// export const getDetail = (id) => {
//   return async function (dispatch) {
//     try {
//       var json = await axios.get("http://localhost:3001/pokemons/" + id);
//       return dispatch({
//         type: GET_DETAILS,
//         payload: json.data,
//       });
//     } catch (e) {
//       console.log(e);
//     }
//   };
// };


// ------- function promise.

export function getDetail(id){
  return function (dispatch){
    axios.get("http://localhost:3001/pokemons/" + id)
    .then(res=>res.data)
    .then(res=>dispatch({
      type:GET_DETAILS,
      payload:res
    }))
  }
}




