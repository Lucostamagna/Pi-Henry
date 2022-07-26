import React from 'react';
import {Link} from 'react-router-dom'
import style from './LangindPage.module.css'

export default function LandingPage(){
    return (
      <div className={style.bg}>
        <h2> - WELCOME to the Pokemon APP - </h2>
        <h5> Pokemon Api by Lucía Costamagna.</h5>
        <Link to ='/home'>
            <button> Let`s GO! </button>
        </Link>
      </div>
    )

    
}