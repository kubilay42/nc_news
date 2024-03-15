import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../utils/api";
import { Loading } from "./Loading";
import Navbar from "./Navbar";
import CommentsList from "./Comments";
import VoteArticle from "./VoteArticle";
import { useContext } from 'react';
import UserContext from '../contexts/User';
import { Link } from "react-router-dom";

export default function SingleArticle() {
  const[newVote, setNewVote] = useState(0)
  const { currentUser } = useContext(UserContext)
  const [article, setArticle] = useState();
  const [loading, setLoading] = useState(true);
  const { article_id } = useParams();
  const [error, setError] = useState(false)
  

  useEffect(() => {
    setLoading(true);
    fetchArticleById(article_id).then((articleData) => {
    setError(false)
      setLoading(false);
      setArticle(articleData);
    }).catch(() => {
        setLoading(false);
        setError(true);
      });
  }, [article_id]);

  return (
    <div>
      <Navbar />
      {loading ? (
        <Loading />
      ) : error ? (
        <>
        <p>That article does not exist, </p>
        <Link to="/articles">
        check some other articles here.
        </Link>
        </>
      ) : (
        <>

      <h1 className="title">{article.title}</h1>
      <img className="article-img" src={article.article_img_url}></img>
      <p className="topic">Topic: {article.topic}</p>
      <p className="body">{article.body}</p>
      <p className="author">Author: {article.author}</p>
      <p className="votes">Votes: {article.votes + newVote}</p>
      <p className="created_at">Created at: {article.created_at}</p>
      <VoteArticle articleId={article_id} setNewVote= {setNewVote}/>
      <CommentsList currentUser={currentUser}/>
      </>
      )}
    </div>
  );
}
