import React, { useEffect } from "react";
import * as axios from "axios";
import { Button, Card } from "react-bootstrap";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Pokemons = ({ getPokemonInfo }) => {
  const [pokemons, setPokemons] = useState([]);

  console.log("pokemons =>", pokemons);
  useEffect(() => {
    let isSubscribed = true;
    const CancelToken = axios.CancelToken;
    let cancel;
    axios
      .get("https://pokeapi.co/api/v2/pokemon", {
        cancelToken: new CancelToken(function executor(c) {
          // An executor function receives a cancel function as a parameter
          cancel = c;
        }),
      })
      .then((response) => {
        if (isSubscribed) {
          let pokemons = response.data.results;
          setPokemons(pokemons);
        }
      });

    return () => {
      isSubscribed = false;
      cancel();
    };
  }, []);

  return (
    <div className="container">
      <div className="row">
        {pokemons.map((pokemon, index) => (
          <div key={index} className="col-lg-4 mt-lg-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://htstatic.imgsmail.ru/pic_original/14dda5f3f885a7304a22af4635aa54b0/1658985/"
              />
              <Card.Body>
                <Card.Title>{pokemon.name}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <NavLink to={`/pokemon/${index + 1}`}>
                  {" "}
                  <Button
                    onClick={() =>
                      getPokemonInfo(pokemon, index + 1, pokemon.url)
                    }
                    variant="primary"
                  >
                    Get more info
                  </Button>
                </NavLink>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pokemons;
