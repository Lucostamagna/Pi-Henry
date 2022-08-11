import {
  GET_POKEMONS,
  GET_ALLTYPES,
  FILTER_BY_TYPES,
  GET_POKEMONS_BY_NAME,
  FILTER_CREATED,
  ORDER_BY_NAME,
  ORDER_BY_ATTACK,
  POST_POKEMON,
  GET_DETAILS,
  CLEAN_POKEMONS,
} from "../action/action";

const initialState = {
  pokemons: [],
  allPokemons: [], //lo tengo de  soporte para pode filtrar
  types: [],
  detail: [], //para los detalles
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload,
      };
    case CLEAN_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    case GET_ALLTYPES:
      return {
        ...state,
        types: action.payload,
      };
    case GET_DETAILS:
      return {
        ...state,
        detail: action.payload,
      };
    case FILTER_CREATED:
      let filterCopy = state.allPokemons; ////base de datos
      let createdFilter =
        action.payload === "created"
          ? filterCopy.filter((e) => e.createdInBd)
          : filterCopy.filter((e) => !e.createdInBd);
      return {
        ...state,
        pokemons: action.payload === "All" ? state.filterCopy : createdFilter,
      };
    case FILTER_BY_TYPES:
      let copyTwo = state.allPokemons; //ver
      let typeFiltered =
        action.payload === "All"
          ? copyTwo
          : copyTwo.filter((e) =>
              e.types.some((e) => e.name === action.payload)
            );
      if (typeFiltered.length <= 0) {
        typeFiltered = copyTwo;
        alert("- Type not found -");
      }
      return {
        ...state,
        pokemons: typeFiltered,
      };

    case ORDER_BY_NAME:
      let sortedByName =
        action.payload === "asc"
          ? state.pokemons.sort((a, b) => {
              if (a.name > b.name) return 1;
              if (b.name > a.name) return -1;
              return 0;
            })
          : state.pokemons.sort((a, b) => {
              if (a.name > b.name) return -1;
              if (b.name > a.name) return 1;
              return 0;
            });
      return {
        ...state,
        pokemons: sortedByName,
      };
    case ORDER_BY_ATTACK:
      let sortedByAttack =
        action.payload === "Mayor fuerza"
          ? state.pokemons.sort((a, b) => {
              if (a.attack > b.attack) return 1;
              if (b.attack > a.attack) return -1;
              return 0;
            })
          : state.pokemons.sort((a, b) => {
              if (a.attack > b.attack) return -1;
              if (b.attack > a.attack) return 1;
              return 0;
            });
      return {
        ...state,
        pokemons: sortedByAttack,
      };

    case GET_POKEMONS_BY_NAME:
      return {
        ...state,
        pokemons: action.payload,
      };
    case POST_POKEMON:
      return {
        ...state,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
