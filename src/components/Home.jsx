import React from "react";
import { Link } from "react-router-dom";

const Home = ({}) => {
  return (
    <>
    <Link to="/users">
      <button> <h1>Select a user to login</h1></button>
    </Link>
    </>
  );
};

export default Home;
