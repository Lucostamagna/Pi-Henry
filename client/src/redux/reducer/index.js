
import { GET_POKEMONS } from "../actions";

const initialState= {
    pokemons: [],
    allPokemons: [],
}



const rootReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload, //en mi arreglo vacio guardame todo lo que venga el esta accion 'GET_POKEMONS'
                allPokemons: action.payload
            };
            default: 
            return {...state};
        }
    }

export default rootReducer; //para que pueda agarrarlo el store