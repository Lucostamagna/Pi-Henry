import React from "react";
import { Link } from "react-router-dom";
import style from "./LangindPage.module.css";

export default function LandingPage() {
  return (
    <div className={style.bg}>
      <div>
        <Link to="/home">
          <button className={style.button}> WELCOME! </button>
        </Link>
        
      </div>
      <div className={style.spinner}>
        <span>H</span>
        <span>E</span>
        <span>N</span>
        <span>R</span>
        <span>Y</span>
        <span></span>
        <span>P</span>
        <span>O</span>
        <span>K</span>
        <span>E</span>
      </div>
     
     <Link to="/about">
     <button className={style.btn}> ABOUT </button>
     </Link>
    </div>
  );
}
