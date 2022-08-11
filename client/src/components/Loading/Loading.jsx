import React from "react";
import style from "./Loading.module.css";


const Loading = () => {
  return (
    <nav>
      <div className={style.div}>
        <div className={style.loader}> </div>
      </div>
    </nav>
  );
};

export default Loading;
