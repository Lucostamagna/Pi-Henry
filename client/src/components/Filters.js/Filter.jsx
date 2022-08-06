import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {filterPokemonByType, getPokemonsByName, orderName, orderByAttack}  from "../../action/action";


// const Filter = () => {
//   const dispatch = useDispatch();
//   const allTypes = useSelector((state) => state.types);

//   const [value, setvalue] = useState({
//     pokemons_types: "typeDefault",
//   });

//   useEffect(() => {
//     dispatch(getAllTypes());
//   }, [dispatch]);

//   const handleFilterType = (e) => {
//     dispatch(filterPokemonByType(e.target.value));
//     setvalue({
//       ...value,
//       [e.target.name]: [e.target.name],
//     });
//   };

//   return (
//     <div>
//       <select
//         name="pokemons_types"
//         onChange={(e) => {
//           handleFilterType(e);
          
//         }}
//         value={setvalue.pokemons_types}
//       >
//         <option value="typeDefault">Types</option>
//         {allTypes.map((type) => (
//           <option value={type.name} key={type.name}>
//             {type.name}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default Filter;
