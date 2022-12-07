import React from "react";
import logo from "../logo.svg";
import "./Home.css";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home-content">
      <img src="/img-monty-hall.png" className="logo" alt="logo" />
      <h1>Welcome to <br /> Monty Hall Simulation</h1>
      <Link to="/config">
        <Button>Run Simulation</Button>
      </Link>
    </div>
  );
}

export default Home;
