import React from "react";
import "../App.css";

const CommentCard = ({ comment }) => {

  return (
    <>
    <p className="comment-body">{comment.body}</p>
    <p className="comment-author">author: {comment.author}</p>
    <p className="comment-created_at">{comment.created_at}</p>
    <p className="comment-votes">votes:{comment.votes}</p>
    </>
  );
};

export default CommentCard;
