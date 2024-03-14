import React from "react";
import { useState } from "react";
import { postComment } from "../utils/api.js";
import { useContext } from "react";
import UserContext from "../contexts/User";

const PostCommment = ({ article_id, setCommentsList }) => {
  const { loggedInUser } = useContext(UserContext);
  const [newComment, setNewComment] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newComment.length !== 0) {
      setIsPosting(true);
      postComment(newComment, article_id, loggedInUser)
        .then((newCommentFromApi) => {
          setError(false)
          setIsPosting(false);
          setNewComment("");
          setCommentsList((prevComments) => [
            newCommentFromApi,
            ...prevComments,
          ]);
        })
        .catch(() => {
          setError(true);
          setIsPosting(false);
        });
    }
  };
  return (
    <div>
      <form className="PostComment" onSubmit={handleSubmit}>
        {isPosting ? (
          <p disabled={isPosting}>POSTING...</p>
        ) : (
          <>
            <label htmlFor="newComment">Add a new comment</label>
            <textarea
              id="newComment"
              value={newComment}
              multiline="true"
              onChange={(e) => setNewComment(e.target.value)}
            ></textarea>
            <button type="submit" disabled={isPosting}>
              POST
            </button>
          </>
        )}
      </form>
      {error ? <p>something went wrong</p> : null}
    </div>
  );
};

export default PostCommment;
