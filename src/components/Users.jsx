import { getAllUsers } from "../utils/api";
import { useState, useEffect } from "react";
import UserCard from "./UserCard"
import Navbar from "./Navbar";

export default function UsersList() {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    getAllUsers().then((users) => {
        setUsersList(users);
    });
  }, []);

  return (
    <>
    <Navbar/>
      <h1>Select a User to Login</h1>
      {usersList.map((user) => {

        return (<UserCard key={user.username} user={user} />)
      })}
    </>
  );
}
