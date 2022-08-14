let noEmpty = /\S+/;
let validateName = /^[a-z]+$/i;

export default function validate(input, allPokemons) {
  let errors = {};
  if (!noEmpty.test(input.name) || !validateName.test(input.name)) {
    errors.name = "Only string and without numbers";
  }
  if (input.name.length <= 2) {
    errors.name = "Name should have at 2 letters";
  }
  if(allPokemons?.filter(p=> input.name === p.name).length !== 0){
    errors.name = "That pokemon name already existes"
  }
  if (!input.speed) {
    errors.speed = "Speed is require";
  }
  if (input.speed > 999 || input.speed < 1) {
    errors.speed = "Speed must be between 1 and 999";
  }

  if (!input.hp) {
    errors.hp = "Hp is requiere";
  }
  if (input.hp > 500 || input.hp < 1) {
    errors.hp = "Hp must be between 1 and 500";
  }

  if (!input.attack) {
    errors.attack = "Attack is requiere";
  }
  if (input.attack > 999 || input.attack < 0) {
    errors.attack = "attack must be between 0 and 999";
  }
  if (!input.defense) {
    errors.defense = "Hp is requiere";
  }
  if (input.defense > 999 || input.defense < 1) {
    errors.defense = "Defense must be between 1 and 999";
  }
  if (!input.height) {
    errors.height = "height is requiere";
  }
  if (input.height > 999 || input.height < 1) {
    errors.height = "height must be between 1 and 999";
  }

  if (!input.weight) {
    errors.weight = "Hp is requiere";
  }
  if (input.weight > 999 || input.weight < 1) {
    errors.weight = "weight must be between 1 and 999";
  }
  if (!input.img) {
    errors.img = "URL required";
  }
  if (!input.types.length) {
    errors.types = "You must choose at least one type";
  }

  return errors;
}
