import React from "react";
import style from "./Card.module.css";

function Card({ name, img, types }) {
  return (
    <div className={style.card}>
      <h2>{name}</h2>
      <img src={img} alt="imagen" width="120px" height="120px" />
      {
      types?.map((e, k) => {
        return (
          <div key={k}>
            <p>{e.name}</p>
          </div>
        );
      })
      }
    </div>
  );
}
export default Card;
