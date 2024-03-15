import { getAllUsers } from "../utils/api";
import { useState, useEffect } from "react";
import UserCard from "./UserCard"
import Navbar from "./Navbar";
import { Loading } from "./Loading";
import UserContext from "../contexts/User";
import { useContext } from "react";
import "../App.css";




export default function UsersList() {
  const [usersList, setUsersList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { loggedInUser } = useContext(UserContext);



  useEffect(() => {
    setLoading(true)
    getAllUsers().then((users) => {
        setUsersList(users);
        setLoading(false)
    });
  }, []);

  return loading ? (
  <Loading />
  ) : (
    <>
    <p id="username">{loggedInUser.username.toUpperCase}</p>
      <p>is logged in</p>
      <img id="loggedin-img" src={loggedInUser.avatar_url}></img>
      <br></br>
    <Navbar/>
      <h1>Select a User to Login</h1>
      {usersList.map((user) => {

        return (<UserCard key={user.username} user={user} />)
      })}
    </>
  );
}
