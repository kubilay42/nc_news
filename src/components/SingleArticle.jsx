import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticleById } from '../utils/api';
import { Loading } from './Loading';
import Navbar from './Navbar';

export default function SingleArticle () {
    const [article, setArticle] = useState()
    const [loading, setLoading] = useState(true)

    const { article_id } = useParams();

    useEffect(() => {
    setLoading(true)

      fetchArticleById(article_id).then((articleData) => {
          setLoading(false)
          setArticle(articleData);
        });
      }, [article_id]);
    
      return loading ? (
        <>
        <Loading />
        </>
        ) : (<>
              <Navbar />
            <h1 className='title'>{article.title}</h1>
            <img className='article-img' src={article.article_img_url}></img>
            <p className='topic'>Topic: {article.topic}</p>
            <p className='body'>{article.body}</p>
            <p className='author'>Author: {article.author}</p>
            <p className='votes'>Votes: {article.votes}</p>
            <p className='created_at'>Created at: {article.created_at}</p>

          </>);
    }