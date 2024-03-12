import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import Users from "./components/Users";
import Articles from "./components/Articles";
import UserContext from "./contexts/User";
import SingleArticle from "./components/SingleArticle";
 
export default function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "tickle122",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953"
  });
  const [user, setUser] = useState({});
  return (
    <>
      <UserContext.Provider value={{loggedInUser:loggedInUser, setLoggedInUser: setLoggedInUser}}>
        <Header />
        <Routes>
          <Route path="/" element={<Home user={user} setUser={setUser} />} />
          <Route path="/users" element={<Users />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:article_id" element={<SingleArticle />}/>
        </Routes>
      </UserContext.Provider>
    </>
  );
}
