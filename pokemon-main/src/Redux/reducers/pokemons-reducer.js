const initialState = {
  pokemons: [],
};

const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POKEMONS_INIT":
      return {
        ...state,
        pokemons: [...action.payload],
      };

    default:
      return state;
  }
};
export default pokemonsReducer;
