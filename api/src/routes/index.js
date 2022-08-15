const { Router } = require("express");
const axios = require("axios");
const { getAllPokemon } = require("./controllers");


const { Pokemon, Type } = require("../db");
const router = Router();

router.get("/pokemons", async (req, res) => {
  const { name } = req.query;
  const AllPokes = await getAllPokemon();
  if (name) {
    const PokeName = AllPokes.filter((el) =>
      el.name.toLowerCase().includes(name.toLowerCase())
    );
    PokeName.length
      ? res.status(200).send(PokeName)
      : res.status(404).send("The Pokemon does not exit");
  } else {
    res.status(201).send(AllPokes);
  }
});

router.get("/types", async (req, res) => {
  try {
    let apiType = await axios.get("https://pokeapi.co/api/v2/type");
    let apiTypeInfo = apiType.data;
    let types = apiTypeInfo.results.map((e) => e.name);
    types.forEach((type) => {
      Type.findOrCreate({
        where: {
          name: type,
        },
      });
    });
    const allTypes = await Type.findAll();
    return res.status(200).send(allTypes);
  } catch (e) {
    console.log(e);
  }
});


router.get("/pokemons/:id", async (req, res) => {
  const { id } = req.params;
  const TotalId = await getAllPokemon();
  try {
    if (id) {
      const PokeId = TotalId.filter((e) => e.id == id);
      PokeId.length
        ? res.status(200).send(PokeId)
        : res.status(404).send("Id not found");
    }
  } catch (e) {
    console.log(e);
  }
});

router.post("/pokemons", async (req, res) => {
  const {
    name,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
    img,
    types,
    createInDb,
  } = req.body;

  if (name) {
    const AllPokemones = await getAllPokemon();
    const Poke = AllPokemones.find((e) => e.name === name.toLowerCase());
    console.log(Poke);
    if (Poke === undefined) {
      const CreatePokemon = await Pokemon.create({
        name,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        img,
        createInDb,
        types,
      });
      const typesDb = await Type.findAll({
        where: { name: types },
      });
      CreatePokemon.addType(typesDb);
      return res.status(201).send(CreatePokemon);
    }
    return res.status(404).send("existing pokemon");
  }
});


module.exports = router;
