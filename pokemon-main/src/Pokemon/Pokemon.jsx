import React from "react";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./Pokemon.module.css";

const Pokemon = ({
  selectedPokemon: { serverPokemonInfo },
  getChosenAbility,
}) => {
  console.log(serverPokemonInfo);
  {
    if (serverPokemonInfo) {
      return (
        <div className={styles.pokemonInfo}>
          <Card>
            <Card.Img
              className={styles.pokemonInfoCard}
              variant="top"
              src={serverPokemonInfo.sprites.other.dream_world.front_default}
            />
            <Card.Body>
              <Card.Text>{serverPokemonInfo.name}</Card.Text>
            </Card.Body>
          </Card>
          <br />
          <Card className="text-left">
            <div className={`col-lg-12 ${styles.link}`}>
              <NavLink to="/pokemons">
                <div className={`col-lg-12 ${styles.linkToMainPage} text-left`}>
                  <strong>*Return to the main page*</strong>
                </div>
              </NavLink>
            </div>
            <Card.Body>
              <div className="row">
                <div className="col-lg-6">
                  {" "}
                  {serverPokemonInfo.stats.map((stat, index) => (
                    <Card.Text key={index}>
                      {stat.stat.name} : {stat.base_stat}
                    </Card.Text>
                  ))}
                </div>
                <div className="col-lg-6 d-flex ">
                  {" "}
                  Type:
                  {serverPokemonInfo.types.map((el, index) => (
                    <p className="pl-lg-2" key={index}>
                      {" "}
                      {el.type.name}{" "}
                    </p>
                  ))}
                </div>
                <div className="col-lg-12 d-flex justify-content-center pt-lg-4">
                  Abilities:
                  {serverPokemonInfo.abilities.map((el, index) => (
                    <NavLink key={index} to="/ability">
                      <p
                        onClick={() => getChosenAbility(el.ability.url)}
                        className="pl-lg-2"
                      >
                        {" "}
                        {el.ability.name}{" "}
                      </p>
                    </NavLink>
                  ))}
                </div>
              </div>
            </Card.Body>
            <Card.Img
              variant="bottom"
              src="https://3dnews.ru/assets/external/illustrations/2020/03/13/1005911/Pokemon-Go.jpg"
            />
          </Card>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
};

export default Pokemon;
