import React from 'react';
import "../App.css";
import { Link } from 'react-router-dom';

const ArticleCard = ({article}) => {

    return (
        <>
        <h2>{article.title}</h2>
        <img id="article-img" src={article.article_img_url}></img>
        <p>{article.votes}</p>
        <Link to={`/articles/${article.article_id}`}>
      <button>
        <h3>See Article!</h3>
      </button>
        </Link>
        </>
    );
}

export default ArticleCard;