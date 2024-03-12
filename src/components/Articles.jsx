import { getAllArticles } from "../utils/api";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import ArticleCard from "./ArticleCard"

export default function ArticlesList() {
  const [articlesList, setArticlesList] = useState([]);


  useEffect(() => {
    getAllArticles().then((articles) => {
        setArticlesList(articles);
    });
  }, []);

  return (
    <>
      <Navbar/>
      <h1>Articles</h1>
      {articlesList.map((article) => {
        return (<ArticleCard key={article.article_id} article={article} />)
      })}
    </>
  );
}
