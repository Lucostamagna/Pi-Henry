import axios from 'axios';

export const GET_POKEMONS = 'GET_POKEMONS';

export function getPokemons(){
    return async  (dispatch) => {
    var json= await axios.get('http://localhost:3001/pokemons') //conexion con mi back
    return dispatch({
        type:'GET_POKEMONS',
        payload: json.data
    })
}
}