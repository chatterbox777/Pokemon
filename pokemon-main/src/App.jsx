import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";

function App({ count }) {
  return (
    <div className="App">
      <div>{count}</div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return { count: state.count };
};

export default connect(mapStateToProps)(App);
