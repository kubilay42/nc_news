import { useState, useEffect } from "react";
import React from "react";
import { getAllArticles } from "../utils/api";

function Sortby ({ searchParams, setSearchParams, setArticlesList }){
  const [queries, setQueries] = useState([]);


    const handleChange = (key, input) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set(key, input);
    setSearchParams(newParams);
  };

  useEffect(() => {
    getAllArticles().then((query) => {
        setArticlesList(query);
    });
  }, [queries]);

    return(
        <div>
        <select
        onChange={(event) => {
            handleChange("date", event.target.value);
        }}>
            <option value="asc" >ASCENDING</option>
            <option value="desc" >DESCENDING</option>
            </select>
            <select
        onChange={(event) => {
            handleChange("comment_count", event.target.value);
          }}>
            <option value="asc" >ASCENDING</option>
            <option value="desc" >DESCENDING</option>
            </select>
            <select
        onChange={(event) => {
            handleChange("votes", event.target.value);
          }}>
            <option value="asc" >ASCENDING</option>
            <option value="desc" >DESCENDING</option>
            </select>
            </div>
    )
}
export default Sortby