export default function validate(input ) {
    let errors = {};
    if (!input.name) {
      errors.name = "Name is required";
    }
    // if(allPokemons?.filter(p=> input.name === p.name).length !== 0){
    //     errors.name = "That pokemon name already existes"
    //   }
      if(!input.hp){
        errors.hp = "Hp is requiere"
      }
      if(input.hp > 200 || input.hp < 0){
        errors.hp = "Hp must be between 0 and 200"
      }
    
      if(!input.attack){
        errors.attack = "Attack is requiere"
      }
      if(input.attack > 200 || input.attack < 0){
        errors.attack = "attack must be between 0 and 200"
      }
      if(!input.defense){
        errors.defense = "Hp is requiere"
      }
      if(input.defense > 200 || input.defense < 0){
        errors.defense = "Defense must be between 0 and 200"
      }
      if(!input.height){
        errors.height = "height is requiere"
      }
      if(input.height > 200 || input.height < 0){
        errors.height = "height must be between 0 and 200"
      }
    
      if(!input.weight){
        errors.weight = "Hp is requiere"
      }
      if(input.weight > 200 || input.weight < 0){
        errors.weight = "weight must be between 0 and 200"
      }
    if (!input.img) {
      errors.img = "URL required";
    }
    if(!input.types.length){
      errors.types = "You must choose at least one type"
    }
    if(input.types.length > 2){
      errors.types = "You cannot choose more than two types"
    }
    return errors;
  }