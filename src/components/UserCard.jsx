import React from "react";
import { useContext } from "react";
import UserContext from "../contexts/User";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  const { setLoggedInUser } = useContext(UserContext);
  return (
    <>
      <p>{user.username}</p>
      <img className="img" src={user.avatar_url}></img>
      <Link to ="/articles"><button onClick={() => {setLoggedInUser(user)}}>login</button>
      </Link>
    </>
  );
};

export default UserCard;
