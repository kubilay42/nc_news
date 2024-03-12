import { getAllArticles } from "../utils/api";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import ArticleCard from "./ArticleCard";
import { Loading } from "./Loading";

export default function ArticlesList() {
  const [articlesList, setArticlesList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllArticles().then((articles) => {
      setArticlesList(articles)
      setLoading(false)
    });
  }, []);

  return loading ? (
  <Loading />
  ) : (<>
      <Navbar />
      <h1>Articles</h1>
      {articlesList.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </>);
}
