import { getAllArticles } from "../utils/api";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import ArticleCard from "./ArticleCard";
import { Loading } from "./Loading";
import Dropdown from "./Dropdown";
import { useSearchParams } from "react-router-dom";
import Sortby from "./Sortby";
import { Link } from "react-router-dom";

export default function ArticlesList() {
  const [error, setError] = useState(false);
  const [articlesList, setArticlesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const topicsQuery = searchParams.get("topic");

  useEffect(() => {
    setLoading(true);
    getAllArticles(topicsQuery)
      .then((articles) => {
        setError(false);
        setArticlesList(articles);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, [topicsQuery]);

  return (
    <div className="Articles-list">
      <Navbar />
      <br></br>
      <br></br>
      <Dropdown searchParams={searchParams} setSearchParams={setSearchParams} />
      <br></br>
      <br></br>
      <Sortby
        setArticlesList={setArticlesList}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      {topicsQuery ? (
        <h2>Articles About {topicsQuery.toUpperCase()}</h2>
      ) : (
        <h1>ALL ARTICLES</h1>
      )}
      {loading ? (
        <Loading />
      ) : error ? (
        <p>There is no article in here,    <br></br>
          <Link to="/articles">
           search another article
          </Link>
          </p>
      ) : (
        <>
          {articlesList.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </>
      )}
    </div>
  );
}
