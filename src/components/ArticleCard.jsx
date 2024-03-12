import React from 'react';
import "../App.css";
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({article}) => {

    return (
        <>
        <p>{article.title}</p>
        <img id="article-img" src={article.article_img_url}></img>
        <p>{article.votes}</p>
        <Link to={`/articles/${article.article_id}`}>
      <button>
        See Article!
      </button>
        </Link>
        </>
    );
}

export default ArticleCard;