 import React from "react";
 import { useEffect } from "react";
 import { useDispatch, useSelector } from "react-redux";

 import style from './Filter.module.css'
 import {
   filterPokemonByType,
   orderName,
   orderByAttack,
   filterCreated,
   getAllTypes,
 } from "../../action/action";

 const Filters = ({ setCurrentPage, setOrder }) => {
   const dispatch = useDispatch();
   const allTypes = useSelector((state) => state.types);

   useEffect(() => {
     dispatch(getAllTypes());
   }, [dispatch]);

   function handleFilterType(e) {
     e.preventDefault();
     dispatch(filterPokemonByType(e.target.value));
     setCurrentPage(1);
   }

   function handleFilterCreated(e) {
     e.preventDefault();
     dispatch(filterCreated(e.target.value));
     setCurrentPage(1);
   }

   function handleSort(e) {
     e.preventDefault();
     dispatch(orderName(e.target.value));
     setOrder(e.target.value);
     setCurrentPage(1);
   }

   function handleSortByAttack(e) {
     e.preventDefault();
     dispatch(orderByAttack(e.target.value));
     setOrder(e.target.value);
     setCurrentPage(1);
   }

   return (
     <div className={style.div}>
       <div>
         <div className={style.div4}>
           <h1 className={style.h4}> Filters </h1>
         </div>

         <label className={style.label}> Types </label>

         <select className={style.select} onChange={handleFilterType}>
           <option value="All"> ALL </option>
           <option value="normal"> Normal </option>
           <option value="flying"> Flying </option>
           <option value="poison"> Poison </option>
           <option value="ground"> Ground </option>
           <option value="bug"> Bug </option>
           <option value="fire"> Fire </option>
           <option value="water"> Water </option>
           <option value="grass"> Grass </option>
           <option value="electric"> Electric </option>
           <option value="fairy"> Fairy </option>
         </select>

         <label className={style.label}> Created - Api </label>
         <select className={style.select} onChange={handleFilterCreated}>
           <option value="All"> ALL</option>
           <option value="api"> API </option>
           <option value="created"> CREATED </option>
         </select>
       </div>

       <div>
         <select className={style.order} onChange={handleSort}>
           <option value="Filtro"> Alphabetically</option>
           <option value="asc">Upward</option>
           <option value="desc">Falling</option>
         </select>

         <select className={style.order} onChange={(e)=>handleSortByAttack(e)}>
           <option value="Strength"> Strength </option>
           <option value="Mayor fuerza">More strong</option>
           <option value="Menor fuerza">Less strong</option>
         </select>
       </div>

       <div></div>
     </div>
   );
 };

 export default Filters;
