import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_ALLTYPES = "GET_ALLTYPES";
export const GET_POKEMONS_BY_NAME = "GET_POKEMONS_BY_NAME";
export const FILTER_BY_TYPES = "FILTER_BY_TYPE";
export const FILTER_CREATED = "FILTER_CREATED";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_ATTACK="ORDER_BY_ATTACK"

export const getPokemons = () => {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/pokemons");
    return dispatch({
      type: GET_POKEMONS,
      payload: json.data,
    });
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
export const orderByAttack = (payload)=> {
  return{
    type: ORDER_BY_ATTACK,
    payload
  }
}

export default function getAllTypes() {
  return async function (dispatch) {
    let url = "http://localhost:3001/types";
    let json = await axios.get(url);
    console.log("listo");
    return dispatch({
      type: GET_ALLTYPES,
      payload: json.data,
    });
  };
}

// export default function getAllTypes() {
//   return async function (dispatch) {
//     let url = "http://localhost:3001/types";
//     let json = await axios.get(url);
//     console.log("listo");
//     return dispatch({
//       type: GET_ALLTYPES,
//       payload: json.data,
//     });
//   };
// }

// export const filterPokemonByType=(data)=> {
//   return {
//     type: FILTER_BY_TYPES,
//     payload:data
//   };
// }

//-- buscar por nombre.
export const getPokemonsByName = (name) => {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/pokemons?name=" + name);
      return dispatch({
        type: GET_POKEMONS_BY_NAME,
        payload: json.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};