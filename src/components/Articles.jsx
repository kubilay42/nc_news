import { getAllArticles } from "../utils/api";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import ArticleCard from "./ArticleCard";
import { Loading } from "./Loading";
import Dropdown from "./Dropdown";
import { useSearchParams } from "react-router-dom";

export default function ArticlesList() {
  const [articlesList, setArticlesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const topicsQuery = searchParams.get("topic");

  useEffect(() => {
    setLoading(true);
    getAllArticles(topicsQuery).then((articles) => {
      setArticlesList(articles);
      setLoading(false);
    });
  }, [topicsQuery]);

  return (
    <div className="Articles-list">
      <Navbar />
      <br></br>
      <br></br>

      <Dropdown
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      { (topicsQuery) ?
      ( <h2>Articles About {topicsQuery.toUpperCase()}</h2>) :
      (<h1>ALL ARTICLES</h1>)
      }
      {loading ? (
        <Loading />
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
