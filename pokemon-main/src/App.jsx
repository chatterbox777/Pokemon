import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as axios from "axios";
import { Button, Card } from "react-bootstrap";
import { useState } from "react";
import { BrowserRouter, NavLink, Redirect, Route } from "react-router-dom";
import Pokemon from "./Pokemon/Pokemon";
import Pokemons from "./Pokemons/Pokemons";
import Ability from "./Ability/Ability";

const App = (props) => {
  const [selectedPokemon, setSelectedPokemon] = useState({});
  const [ability, setAbility] = useState({});

  let getPokemonInfo = (pokemon, id, url) => {
    const CancelToken = axios.CancelToken;
    let cancel;
    let isSubscribed = true;
    axios
      .get(url, {
        cancelToken: new CancelToken(function executor(c) {
          // An executor function receives a cancel function as a parameter
          cancel = c;
        }),
      })
      .then((response) => {
        if (isSubscribed) {
          const serverPokemonInfo = response.data;
          setSelectedPokemon({ ...pokemon, id, serverPokemonInfo });
        }
      });
    return () => {
      isSubscribed = false;
      cancel();
    };
  };

  let getChosenAbility = (url) => {
    axios.get(url).then((response) => {
      const serverAbilityInfo = response.data.effect_entries;
      setAbility([...serverAbilityInfo]);
      console.log([...serverAbilityInfo]);
    });
  };
  console.log("выбранный покемон =>", selectedPokemon);
  return (
    <BrowserRouter>
      <Redirect to={"/pokemons"}></Redirect>
      <div className="App">
        <Route path="/pokemons">
          <Pokemons getPokemonInfo={getPokemonInfo} />
        </Route>
        <Route path={`/pokemon`}>
          <Pokemon
            selectedPokemon={selectedPokemon}
            getChosenAbility={getChosenAbility}
          />
        </Route>
        <Route path="/ability">
          <Ability ability={ability} />
        </Route>
      </div>
    </BrowserRouter>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return { count: state.count };
};

export default connect(mapStateToProps)(App);
