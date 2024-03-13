import { getComments } from "../utils/api";
import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";
import { useParams } from 'react-router-dom';
import PostComment from "./PostComment";


export default function CommentsList() {
  const [commentsList, setCommentsList] = useState([]);
  const { article_id } = useParams();

  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true)
    getComments(article_id, username).then((comments) => {
      setLoading(false)
      setCommentsList(comments)
    });
  }, [article_id]);

  return (
    <div className="comments-list">
      <h2>Comments</h2>
      {loading ? (
        <p>Loading comments...</p>
      ) : commentsList.length === 0 ? (
        <p>No comments available.</p>
      ) : (
        <>
        <PostComment setCommentsList={setCommentsList} article_id={article_id}/>
        {commentsList.map((comment) => (
          <CommentCard key={comment.comment_id} comment={comment} />
        ))}
        </>
      )}
    </div>
  );
}
