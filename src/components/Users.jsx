import { getAllUsers } from "../utils/api";
import { useState, useEffect } from "react";
import UserCard from "./UserCard"
import Navbar from "./Navbar";
import { Loading } from "./Loading";
import UserContext from "../contexts/User";
import { useContext } from "react";
import "../App.css";




function UsersList() {
   const [error, setError] = useState(false);
  const [usersList, setUsersList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { loggedInUser } = useContext(UserContext);



  useEffect(() => {
    setLoading(true)
    getAllUsers().then((users) => {
      setError(false)
      setUsersList(users);
      setLoading(false)
    }).catch(()=> {
      setError(true)
      setLoading(false)
    })
  }, []);

  return(
    <div>

    <>
    {loading ? 
    (<Loading/>):
    (<>
    <p id="username">{loggedInUser.username.toUpperCase()}</p>
      <p>is logged in</p>
      <img id="loggedin-img" src={loggedInUser.avatar_url}></img>
      <br></br>
    <Navbar/>
      <h1>Select a User to Login</h1>
      {usersList.map((user) => {
        return (<UserCard key={user.username} user={user} />)
      })}
    </>
    )}
    </>
    {error ? <p>Something went wrong...</p> : null}
    </div>
)}

export default UsersList