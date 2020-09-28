import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

import { NavLink, BrowserRouter } from "react-router-dom";
import styles from "./Ability.module.css";
const Ability = ({ ability }) => {
  console.log(ability);
  const [ablityName, setAbilityName] = useState("");
  const [state, setstate] = useState({});

  useEffect(() => {
    console.log("RENDERED");

    if (Array.isArray(ability)) {
      console.log("выполняется поиск");
      setAbilityName(ability[ability.length - 1]);
      const neededText = ability.find((el, index) => {
        return el.language.name === "en";
      });
      setstate({ neededText });
    }
  }, [ability]);

  console.log(state);
  // остановился на том что приходят две языковых версии текста абилок... надо придумать как будет отображаться именно английская..
  return (
    <div className={styles.abilityInfoBlock}>
      <div className="container">
        <div className="row">
          <Card className="text-center">
            <Card.Header>Ability name : {ablityName}</Card.Header>
            <Card.Body>
              {state.neededText && (
                <div className="col-lg-12">
                  <Card.Title>{state.neededText.effect}</Card.Title>
                  <Card.Text>{state.neededText.short_effect}</Card.Text>{" "}
                </div>
              )}
              <NavLink to="/pokemon">
                <Button className="mt-lg-4" variant="primary">
                  Go back
                </Button>
              </NavLink>
            </Card.Body>
            <Card.Footer className="text-muted">Pokemon Go</Card.Footer>
          </Card>

          <div className="col-lg-12"></div>
        </div>
      </div>
    </div>
  );
};

export default Ability;
