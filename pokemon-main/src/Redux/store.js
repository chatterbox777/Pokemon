import { createStore, combineReducers, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunkMiddleware from "redux-thunk";
import pokemonsReducer from "./reducers/pokemons-reducer";

let reducers = combineReducers({
  root: rootReducer,
  pokemons: pokemonsReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
