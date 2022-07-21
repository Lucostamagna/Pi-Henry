const { Router } = require('express');
const axios = require('axios');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Pokemon, Type } = require('../db')
const router = Router();

//FUNCIONES CONTROLADORAS.

    const getApiInfo = async () => {
        try {
            let url = 'https://pokeapi.co/api/v2/pokemon/';
            let pokemones = [];
            do {
                let info = await axios.get(url);
                let pokemonesApi = info.data;
                let auxPokemones = pokemonesApi.results.map(e => {
                    return {
                        name: e.name,
                        url: e.url,
                    }
                })
                pokemones.push(...auxPokemones);
                url = pokemonesApi.next;
            } while (url != null && pokemones.length < 40); //ACA PUEDO LIMITARLOS A LOS QUE QUIERA TRAER
          
            let pokesWithData = await Promise.all(pokemones.map(async e => {
                let pokemon = await axios.get(e.url);
                return {
                    id: pokemon.data.id,
                    name: pokemon.data.name,
                    img: pokemon.data.sprites.other.home.front_default,
                    types: pokemon.data.types.map(e => {
                        return ({
                            name: e.type.name,
                            img: `https://typedex.app/images/ui/types/dark/${e.type.name}.svg`,
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
    return await Pokemon.findAll({//asi me traigo todo
        includes:{
            model: Type,  //Los pokemones que me traiga tienen que incluir el modelo type
            attribute: ['name'], //solo le digo name po que el id ya me lo va a traer.
            through:{ //ES UNA COMPROBACION, VA SIEMPRE
                attributes: [], //QUIERO QUE ME TRAIGAS TODOS LOS POKEMONES Y ADEMAS QUE ME INCLUYAS EL MODELO TIPO
                //DEL MODELO TYPO TRAEME EL NOMBRE 
            }
        }
    })
}
//funcion que me concatena la informacion traiga tanto e la api como de la base de datos
const getAllPokemon = async ()=>{
     const ApiInfo= await getApiInfo(); //tengo que invocarla y ademas ejecutarla a la funcion, sino no va a devolverme nada
     const DbInfo= await getDbInfo ();
     const allInfo= ApiInfo.concat(DbInfo);
     return allInfo;
};
//----------------------------------------------------------------------------------------------------------------------------

router.get('/', async (req,res)=>{
    const { name } = req.query
    const AllPokes = await getAllPokemon(); //llamo a la funcion e arriba
    if(name){
        const PokeName = await AllPokes.filter(el=> el.name.toLowerCase() === name.toLowerCase())
        PokeName.length ?
        res.status(200).send(PokeName) : //podria usar try catch para manejar errores
        res.status(404).send('The Pokemon does not exit')

    }else { //si no hay un query me envia todos los pokemones
        res.status(200).send(AllPokes)
    }
})













// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
