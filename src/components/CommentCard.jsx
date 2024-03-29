import React from "react";
import "../App.css";
import { useContext } from "react";
import UserContext from "../contexts/User";
import { deleteComment } from "../utils/api";

const CommentCard = ({ comment, setCommentsList }) => {
  const { loggedInUser } = useContext(UserContext);

  const handleDelete = () => {
    setCommentsList((prevComments) =>
      prevComments.filter((comm) => comment.comment_id !== comm.comment_id)
    )
    deleteComment(comment.comment_id, loggedInUser.username);
  };

  return (
    <>
      <p className="comment-body">{comment.body}</p>
      <p className="comment-votes">Votes:{comment.votes}</p>
      <p className="comment-author">Author: {comment.author.toUpperCase()}</p>
      <p className="comment-created_at">{comment.created_at}</p>
      {loggedInUser.username === comment.author ? (
        <button onClick={handleDelete} >Delete your comment</button>
      ) : (
        <p></p>
      )}
    </>
  );
};

export default CommentCard;
