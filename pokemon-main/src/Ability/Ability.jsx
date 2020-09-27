import React from "react";
import { NavLink } from "react-bootstrap";
import styles from "./Ability.module.css";
const Ability = ({ ability }) => {
  console.log(ability);
  // остановился на том что приходят две языковых версии текста абилок... надо придумать как будет отображаться именно английская..
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* <p>{ability.effect}</p>
            <p>{ability.short_effect}</p> */}
          </div>
          <div className="col-lg-12">
            <NavLink to="/pokemon">Вернуться назад</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ability;
