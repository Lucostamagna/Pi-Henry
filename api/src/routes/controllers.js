
const axios = require("axios");
const { Pokemon, Type } = require("../db");


// - - Api information
const getApiInfo = async () => {
  try {
    let url = "https://pokeapi.co/api/v2/pokemon/";
    let pokemones = [];
    do {
      let info = await axios.get(url);
      let auxPokemones = info.data.results.map((e) => {
        return {
          name: e.name,
          url: e.url,
        };
      });
      pokemones.push(...auxPokemones);
      url = info.data.next;
    } while (url != null && pokemones.length < 40);

    let pokesWithData = await Promise.all(
      pokemones.map(async (e) => {
        let pokemon = await axios.get(e.url);
        return {
          id: pokemon.data.id,
          name: pokemon.data.name,
          img: pokemon.data.sprites.other.home.front_default,
          types: pokemon.data.types.map((e) => {
            return {
              name: e.type.name,
            };
          }),
          hp: pokemon.data.stats[0].base_stat,
          attack: pokemon.data.stats[1].base_stat,
          defense: pokemon.data.stats[2].base_stat,
          speed: pokemon.data.stats[5].base_stat,
          height: pokemon.data.height,
          weight: pokemon.data.weight,
          img: pokemon.data.sprites.other.home.front_default,
        };
      })
    );

    return pokesWithData;
  } catch (e) {
    console.log(e);
  }
};

//-- Bd information

const getDbInfo = async () => {
  try{
  return await Pokemon.findAll({
    include: {
      model: Type, 
      attribute: ["name"],
      through: {
        attributes: [], 
      },
    },
  });
} catch(e){
  console.log(e)
}
};

//--All information
const getAllPokemon = async () => {
  try{
  const ApiInfo = await getApiInfo();
  const DbInfo = await getDbInfo();

   return ApiInfo.concat(DbInfo)
  }catch(e){
    console.log(e)
  }
};

module.exports = {
  getApiInfo,
  getDbInfo,
  getAllPokemon,
};















