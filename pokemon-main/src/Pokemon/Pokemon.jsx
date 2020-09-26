import React from "react";
import { Card } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import styles from "./Pokemon.module.css";

const Pokemon = ({ selectedPokemon: { serverPokemonInfo } }) => {
  console.log(serverPokemonInfo);
  {
    if (serverPokemonInfo) {
      return (
        <div className={styles.pokemonInfo}>
          <Card>
            <Card.Img
              variant="top"
              src={serverPokemonInfo.sprites.other.dream_world.front_default}
            />
            <Card.Body>
              <Card.Text>{serverPokemonInfo.name}</Card.Text>
            </Card.Body>
          </Card>
          <br />
          <Card className="text-left">
            <Card.Body>
              {serverPokemonInfo.stats.map((stat, index) => (
                <Card.Text key={index}>
                  {stat.stat.name} : {stat.base_stat}
                </Card.Text>
              ))}
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
