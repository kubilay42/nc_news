import React from "react";
import { useContext } from "react";
import UserContext from "../contexts/User";
import { Link } from "react-router-dom";
import "../App.css";


const UserCard = ({ user }) => {
  const { setLoggedInUser } = useContext(UserContext);
  return (
    <>
    <div className="userCard">
      <img className="img" src={user.avatar_url}></img>
      <h2>{user.username}</h2>
      <Link to ="/articles"><button onClick={() => {setLoggedInUser(user)}}><h3>LOGIN as {user.username}</h3></button>
      </Link>
      </div>
    </>
  );
};

export default UserCard;
