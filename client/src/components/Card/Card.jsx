import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Card.module.css";
import noImg from "../../Img/5.jpg";

function Card({ name, img, types, id }) {
  return (
    <NavLink className={style.none} to={`/pokemons/${id}`}>
      <div>
        <div className={style.card}>
          <h1 className={style.name}>
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </h1>

          <img
            className={style.img}
            src={img ? img : noImg}
            alt="imagen"
            width="120px"
            height="120px"
          />
          <div className={style.type}>
            {types?.map((e, k) => {
              return (
                <div key={k}>
                  <p>{e.name.charAt(0).toUpperCase() + e.name.slice(1)}</p>
                </div>
              );
            })}
          </div>
          {/* </NavLink> */}
        </div>
      </div>
    </NavLink>
  );
}

export default Card;
