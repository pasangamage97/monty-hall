import React from "react";
import logo from "../logo.svg";
import "./Home.css";
import Button from "../components/Button";

function Home() {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Welcome to Monty Hall Simulation</h1>
      <Button>Press me!</Button>
    </div>
  );
}

export default Home;
