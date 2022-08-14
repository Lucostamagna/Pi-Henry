import React from "react";
import style from './About.module.css'

const About = () => {
  return (
    <div className={style.div}>
      <h1> HENRY POKE</h1>
      <h2> What is Henry Poke? </h2>
      <p>
        {" "}
        It is a Single Page Application (SPA) that consumes data from an
        external API (Poke Api). In it you can have access to all the Pokemons
        and also their statistics, abilities and types. You can filter and sort
        them! In addition, you will be able to create your own character
        assigning the characteristics that you prefer. 
        The technologies used to carry out the application were: 
        
        - Database: PostgreSQL + Sequelize.
        - Backend: Node.js + Express.j Frontend: React.js + Redux.js. 
        - For the API requests, Axios is used, and for the styles, they have been developed
          with pure CSS, using Module.css.
      </p>
    </div>
  );
};

export default About;
