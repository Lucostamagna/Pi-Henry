import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postPokemon, getAllTypes } from "../../action/action";
import { Link, useHistory } from "react-router-dom";



function validate(input){
  let errors={};
  if(!input.name || input.name.length < 1){
    errors.name= 'Name is required. Insert a valid name'
  }
  if( input.hp.length < 3 && input.hp.length > 100 ){   
    errors.hp='Number is required. Insert a valid number '
  }
  if(!input.speed || input.speed.length < 1){
    errors.speed = 'Number is required. Insert a valid number '
  }
  if(!input.attack || input.attack.length < 1){
    errors.attack = 'Number is required. Insert a valid number '
}
if(!input.defense || input.defense.length < 1){
  errors.defense= 'Number is required. Insert a valid number '
}
if(!input.height || input.height.length < 1 || input.height.length > 100 ){
  errors.height='Number is required. Insert a valid number '
}
if(!input.weight || input.weight.length < 1 || input.weight.length > 100 ){
  errors.weight='Number is required. Insert a valid number '
}
if(!input.img){
  errors.img = "URL required";
}

return errors;
}






const PokemonCreate =()=>{
    const dispatch= useDispatch();
    const history=useHistory();
    const types = useSelector((state)=> state.types)
    const [errors, setErrors] =useState({})


const [input, setInput] = useState({
    name: '', 
    hp: '', 
    attack: '', 
    defense: '', 
    speed: '',
    height: '', 
    weight: '', 
    types: [],
    img: ''

})
 //history.push('/home')
 function  handleChange(e) {
  setInput({
      ...input,
      [e.target.name]: e.target.value
  });
  setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
  }))
  console.log(input)
}

function handleChange(e){
  setInput({
    ...input,
    [e.target.name] : e.target.value  
  })
  console.log(input)
}

function handleSelect(e){
  setInput({
    ...input,
    types:[...input,types, e.target.value]
  })
}
 function handleSubmit(e){
  e.preventDefault();
  console.log(input)
  dispatch(postPokemon(input))
  alert('poke creado')
  setInput({

  })
 }

useEffect(() => {
    dispatch(getAllTypes())
}, [dispatch])


return (
  <div>
    <Link to="/home">
      <button>Back</button>
    </Link>
    <h1> Create your Pokemon!</h1>
    <form onSubmit={handleSubmit}>
    <div>
        <label> Name:</label>
        <input
        type='text' value= {input.name} name='name' onChange={handleChange}  placeholder="Name"/>
        {errors.name && ( 
          <p className='error'>{errors.name} </p>
        )}
    </div>
    <div>
      <label> Hp:</label>
      <input type='number' value= {input.hp} name= 'hp' onChange={handleChange} placeholder='Hp'/> 
      {errors.hp && ( 
          <p className='error'>{errors.hp} </p>
        )}
      <label> Speed:</label>
      <input type='number' value= {input.speed} name= 'speed' onChange={handleChange} placeholder='Speed'/> 
      {errors.speed && ( 
          <p className='error'>{errors.speed} </p>
        )}
      <label> Attack: </label>
      <input type= "number" value={input.attack} name='attack' onChange={handleChange} placeholder= 'Attack'/>
      {errors.attack && ( 
          <p className='error'>{errors.attack} </p>
        )}
      <label> Defense:</label>
      <input type='number' value={input.defense} name='defense' onChange={handleChange} placeholder='Defense'/>
      {errors.defense && ( 
          <p className='error'>{errors.defense} </p>
        )}
    </div>
    <div> 
      <label> Height </label>
      <input type='number' value= {input.height} name = 'height' onChange={handleChange} placeholder='Height'/> 
      {errors.height && ( 
          <p className='error'>{errors.height} </p>
        )}
      <label> Weight </label>
      <input type='number' value= {input.weight} name='weight' onChange={handleChange} placeholder='Weight'/> 
      {errors.weight && ( 
          <p className='error'>{errors.weight} </p>
        )}
      <label>Img </label>
      <input type='text' value= {input.img} name= 'img' onChange={handleChange} placeholder='Img'/>
      {errors.img && ( 
          <p className='error'>{errors.img} </p>
        )}
    </div>
    <div>
    <select onChange={e => {handleSelect(e)}}>
    {types.map((e) => (
      
            <option  value={e.name}>{e.name}</option>
    ))}
                    </select>
      <ul>
        <li>
          {input.types.map(e =>e + ",")}
        </li>
      </ul>
    </div>

    <button type='submit'> Create!</button>
    </form>
    
  </div>
);







}









export default PokemonCreate

