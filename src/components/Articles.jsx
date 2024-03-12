import { getAllArticles } from "../utils/api";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import ArticleCard from "./ArticleCard";
import { Loading } from "./Loading";
import { Link } from "react-router-dom";

export default function ArticlesList() {
  const [articlesList, setArticlesList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    getAllArticles().then((articles) => {
      setLoading(false)
      setArticlesList(articles)
    });
  }, []);

  return loading ? (
  <Loading />
  ) : (<>
      <Navbar />
      <h1>Articles</h1>
      {articlesList.map((article) => {
        return <ArticleCard key={article.article_id} article={article} 
        />;
      })}
    </>);
}
