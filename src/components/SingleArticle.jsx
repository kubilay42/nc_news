import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticleById } from '../utils/api';
import { Loading } from './Loading';

export default function SingleArticle () {
    const [article, setArticle] = useState()
    const [loading, setLoading] = useState(true)

    const { article_id } = useParams();

    useEffect(() => {
        fetchArticleById(article_id).then((articleData) => {
          setArticle(articleData);
          setLoading(false)
        });
      }, [article_id]);
    
      return loading ? (
        <>
        <Loading />
        </>
        ) : (<>
            <h2 className='title'>{article.title}</h2>
            <img className='article-img' src={article.article_img_url}></img>
            <p className='body'>{article.body}</p>
            <p className='author'>Author: {article.author}</p>
            <p className='votes'>Votes: {article.votes}</p>
            <p className='created_at'>Created at: {article.created_at}</p>
            <p className='topic'>Topic: {article.topic}</p>

          </>);
    }