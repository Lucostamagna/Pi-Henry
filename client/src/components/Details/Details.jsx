import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../action/action";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import style from './Detail.module.css'

const Detail = (props) => {
  const dispatch = useDispatch();
  const myPokemon = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getDetail(props.match.params.id)); //accedo a mi id
  }, [dispatch]);

  return (
    <div >
      { myPokemon.length > 0 ? 
        <div>
          <div className={style.card}>
            <h2  className={style.name}>
              {myPokemon[0].name.charAt(0).toUpperCase() +
                myPokemon[0].name.slice(1)}
            </h2>
            <p className={style.id}>_ {myPokemon[0].id}_</p>
            <img
            className={style.img}
              src={myPokemon[0].img}
              alt="img not found"
              height="250px"
              width="200px"
            />
            <div>
              <h3 className={style.dates}>
                {myPokemon[0].types?.map((e, k) => {
                  return (
                    <div key={k}>
                      <p>{e.name.charAt(0).toUpperCase() + e.name.slice(1)}</p>
                    </div>
                  );
                })}{" "}
              </h3>
            </div>
            <h5 className={style.date}>HP: {myPokemon[0].hp}</h5>
            <h5 className={style.date}>Attack: {myPokemon[0].attack}</h5>
            <h5 className={style.date} >Defense: {myPokemon[0].defense}</h5>
            <h5 className={style.date}>Speed: {myPokemon[0].speed}</h5>
            <h5 className={style.date}>Height: {myPokemon[0].height}</h5>
            <h5 className={style.date}>Weight: {myPokemon[0].weight}</h5>
          </div>
          <div>
        <Link to="/home">
          <button className={style.btn}>CLOSE</button>
        </Link>
      </div>
        </div>
        
      : 
        <Loading/>  
      }
      
    </div>
  );
};
export default Detail;
