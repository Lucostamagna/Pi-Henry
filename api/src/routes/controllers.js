
const axios = require('axios');
const { Pokemon, Type } = require('../db'); 

const getApiInfo = async () => {
    try {
        let pokemones = [];
        do {
            let info = await axios.get('https://pokeapi.co/api/v2/pokemon/');
            let DataPokemones = info.data.results.map(e => {
                return {
                    name: e.name,
                    url: e.url,
                }
            })
            pokemones.push(...DataPokemones);
            url =info.data.next;
        } while (url != null && pokemones.length < 40); 
      
        let pokesWithData = await Promise.all(pokemones.map(async e => {
            let pokemon = await axios.get(e.url);
            return {
                id: pokemon.data.id,
                name: pokemon.data.name,
                img:  result.sprites.front_default,
                types: pokemon.data.types.map(e => {
                    return ({
                        name: e.type.name,
                    })
                }),
                hp: pokemon.data.stats[0].base_stat,
                attack: pokemon.data.stats[1].base_stat,
                defense: pokemon.data.stats[2].base_stat,
                speed: pokemon.data.stats[5].base_stat,
                height: pokemon.data.height,
                weight: pokemon.data.weight,
            }
        }));
        
        return pokesWithData;
    } catch (e) {
        console.log(e);
    };
};

const getDbInfo= async ()=>{
const pokedb= await Pokemon.findAll({//asi me traigo todo
    include:{
        model: Type,  //Los pokemones que me traiga tienen que incluir el modelo type
        attributes: ['name'], //solo le digo name po que el id ya me lo va a traer.
        through:{ //ES UNA COMPROBACION, VA SIEMPRE
            attributes: [], //QUIERO QUE ME TRAIGAS TODOS LOS POKEMONES Y ADEMAS QUE ME INCLUYAS EL MODELO TIPO
            //DEL MODELO TYPO TRAEME EL NOMBRE 
        }
    }
}) 
return pokedb;
}
//funcion que me concatena la informacion traiga tanto e la api como de la base de datos
const getAllPokemon = async ()=>{
 const ApiInfo= await getApiInfo(); //tengo que invocarla y ademas ejecutarla a la funcion, sino no va a devolverme nada
 const DbInfo= await getDbInfo();
 const allInfo= ApiInfo.concat(DbInfo);
 return allInfo;
};

module.exports = {
    getApiInfo,
    getDbInfo,
    getAllPokemon
}