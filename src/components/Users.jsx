import { getAllUsers } from "../utils/api";
import { useState, useEffect } from "react";
import UserCard from "./UserCard"
import Navbar from "./Navbar";
import { Loading } from "./Loading";


export default function UsersList() {
  const [usersList, setUsersList] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    getAllUsers().then((users) => {
        setUsersList(users);
        setLoading(false)
    });
  }, []);

  return loading ? (
  <Loading />
  ) : (
    <>
    <Navbar/>
      <h1>Select a User to Login</h1>
      {usersList.map((user) => {

        return (<UserCard key={user.username} user={user} />)
      })}
    </>
  );
}
