const { Router } = require('express');
const axios = require('axios');
const { getAllPokemon } = require('./controllers');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Pokemon, Type } = require('../db')
const router = Router();

router.get('/pokemons', async (req,res)=>{ //me trae todos los pokemoness
    const { name } = req.query
    const AllPokes = await getAllPokemon(); //llamo a la funcion e arriba
    if(name){                                                     //es mejor usar el includes que el ====
        const PokeName = AllPokes.filter(el=> el.name.toLowerCase().includes(name.toLowerCase()))
        PokeName.length ?
        res.status(200).send(PokeName) : //podria usar try catch para manejar errores
        res.status(404).send('The Pokemon does not exit')

    }else { //si no hay un query me envia todos los pokemones
        res.status(201).send(AllPokes)
    }
 })
router.get('/types', async (req, res) => { //me trae todos los tipos de pokemones
    
        let apitypes = await axios.get('https://pokeapi.co/api/v2/type');
        let apiTypeInfo = apitypes.data;
        let types = apiTypeInfo.results.map(e => e.name);
        types.forEach(type => {
            Type.findOrCreate({
                where: {
                    name: type,
                }
            });
        });
        const allTypes = await Type.findAll();
        return res.status(201).send(allTypes);
   
});

router.get('/:id', async (req,res)=>{
    const { id } = req.params;
    const TotalId= await getAllPokemon();
    try {
    if(id){
        const PokeId = TotalId.filter(e => e.id == id)
        PokeId.length ?
        res.status(200).send(PokeId) :
        res.status(404).send('Id not found')
    }
    } catch (e){
       console.log(e);
    }
})


router.post('/pokemons', async (req,res)=>{
    const {name, hp, attack, defense, speed, height, weight, img, types, createInDb} = req.body;
    
        if(name){
            const AllPokemones = await getAllPokemon(); //si ya existe el nombre que le paso
            const Poke= AllPokemones.find((e)=> e.name === name.toLowerCase()) // lo busco
            console.log(Poke)
           if(Poke === undefined){//si pokemon no existe
    
            const CreatePokemon = await Pokemon.create({ //uso el modelo de pokemon para poder crear uno.
                name,
                hp,
                attack, 
                defense, 
                speed, 
                height, 
                weight, 
                img,
                createInDb
            });
            const typesDb= await Type.findAll({ where: { name: types}//que me busque donde el nombre sea igual al tipo que me llega por bod  
            });
            CreatePokemon.addType(typesDb) //a esa constante que la uso para crearme los personajes agregale el tipo que encontre en la otra tabla
            return res.status(201).send(CreatePokemon)
        }
           return res.status(404).send('existing pokemon')
}
})

















// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
