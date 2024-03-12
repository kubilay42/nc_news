import "../App.css";
import { useContext } from "react";
import UserContext from "../contexts/User";


export default function Header() {
  const { loggedInUser } = useContext(UserContext);
  return (
    <header>
      <h1>NewMakers</h1>
      <img
        className="logo"
        src="https://pbs.twimg.com/profile_images/1333392601450426370/x_DT51WI_400x400.jpg"
      ></img>
      <p id="username">{loggedInUser.username}</p>
      <p>is logged in</p>
      <img id="loggedin-img" src={loggedInUser.avatar_url}></img>
    </header>
  );
}
