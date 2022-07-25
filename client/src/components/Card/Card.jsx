import React from "react";

 function Card({name, img, types, }){
  return(
    <div>
      <h2>{types}</h2>
        <h3> {name}</h3>
        <img src={img} alt='img no fount' width="200px" height="250px"> </img>
    </div>
  )
}
export default Card;