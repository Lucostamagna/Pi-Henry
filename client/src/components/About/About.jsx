import { Component } from "react";
import style from "./About.module.css";
import { Link } from "react-router-dom";
import pp from "../../Img/pp.png";

class About extends Component {
  render() {
    return (
      <div className={style.div1}>
        <h1 className={style.tittle}> HENRY POKE</h1>
        <div className={style.div}>
          <h2 className={style.p2}> What is Henry Poke? </h2>
          <p className={style.p}>
            {" "}
            It is a Single Page Application (SPA) that consumes data from an
            external API (Poke Api). In it you can have access to all the
            Pokemons and also their statistics, abilities and types. You can
            filter and sort them! In addition, you will be able to create your
            own character assigning the characteristics that you prefer. - -
            <br></br>
            <br></br>
            The technologies used to carry out the application were: - Database:
            PostgreSQL + Sequelize. - Backend: Node.js + Express.j Frontend:
            React.js + Redux.js. - For the API requests, Axios is used, and for
            the styles, they have been developed with pure CSS, using
            Module.css.
          </p>
          <div>
            <Link to="/">
              <button className={style.btn}> BACK </button>
            </Link>
          </div>
          <div className={style.img}>
            <img className={style.image} src={pp} />
          </div>
        </div>
      </div>
    );
  }
}
export default About;
