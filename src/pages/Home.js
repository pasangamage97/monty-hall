import React from "react";
import logo from "../logo.svg";
import "./Home.css";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home-content">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Welcome to <br /> Monty Hall Simulation</h1>
      <Link to="/config">
        <Button>Press me!</Button>
      </Link>
    </div>
  );
}

export default Home;
