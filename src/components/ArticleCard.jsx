import React from 'react';
import "../App.css";


const ArticleCard = ({article}) => {
    return (
        <>
        <p>{article.title}</p>
        <img id="article-img" src={article.article_img_url}></img>
        <p>{article.votes}</p>

        </>
    );
}

export default ArticleCard;