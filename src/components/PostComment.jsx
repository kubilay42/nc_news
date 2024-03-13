import React from "react";
import { useState, useEffect } from "react";
import { postComment } from "../utils/api.js";
import { useContext } from "react";
import UserContext from "../contexts/User";

const PostCommment = ({ article_id, setCommentsList }) => {
  const { loggedInUser } = useContext(UserContext);
  
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(newComment, article_id, loggedInUser).then((newCommentFromApi) => {
      setNewComment("");
      setCommentsList((prevComments) => [newCommentFromApi, ...prevComments]);
    });
  };
  return (
    <form className="PostComment" onSubmit={handleSubmit}>
      <label htmlFor="newComment">Add a new comment</label>
      <textarea
        id="newComment"
        value={newComment}
        multiline="true"
        onChange={(e) => setNewComment(e.target.value)}
      ></textarea>
      <p>comment as : {loggedInUser.username}</p>
      <button type="submit">Add</button>
    </form>
  );
};

export default PostCommment;
