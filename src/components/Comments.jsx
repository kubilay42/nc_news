import { getComments } from "../utils/api";
import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";
import { useParams } from 'react-router-dom';

export default function CommentsList() {
  const [commentsList, setCommentsList] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    getComments(article_id).then((comments) => {
      setCommentsList(comments)
    });
  }, [article_id]);

  return(<>
      <h1 className="comments-heading">Comments</h1>
      {commentsList.map((comment) => {
        return <CommentCard key={comment.comment_id} comment={comment}
        />;
      })}
    </>);
}
