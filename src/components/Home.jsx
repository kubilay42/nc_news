import React from "react";
import { Link } from "react-router-dom";

const Home = ({}) => {
  return (
    <>
    <Link to="/users">
      <button> click to select a user</button>
    </Link>
    </>
  );
};

export default Home;
