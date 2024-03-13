import { useState } from "react";
import { updateArticleVotes } from "../utils/api";
import "../App.css";

const VoteArticle = ({ articleId, setArticle }) => {
  const [voting, setVoting] = useState(false);

  const handleVote = (voteChange) => {
    setVoting(true);
    setArticle((prevArticle) => ({
      ...prevArticle,
      votes: prevArticle.votes + voteChange,
    }));
    updateArticleVotes(articleId, voteChange).then(() => {
      setArticle((updatedArticle) => {
        setArticle(updatedArticle);
      });
    });
    setVoting(false);
  };

  return (
    <div className="vote-article">
      <h3>Vote for this article:</h3>
      <button onClick={() => handleVote(1)}>LIKE</button>
      <button onClick={() => handleVote(-1)}>DISLIKE</button>
    </div>
  );
};

export default VoteArticle;
