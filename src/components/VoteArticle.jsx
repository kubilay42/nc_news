import { useState } from "react";
import { updateArticleVotes } from "../utils/api";
import "../App.css";

const VoteArticle = ({ articleId, setNewVote }) => {
  const [voting, setVoting] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = (voteChange) => {
    if (!hasVoted){
    setVoting(true);
    setNewVote((currVote) => {
      return currVote + voteChange
    });
    updateArticleVotes(articleId, voteChange).catch(()=> {
      setNewVote((currVote) => {
        return currVote - voteChange
      })
    })
    setVoting(false);
    setHasVoted(true)}
  };

  return (
    <div className="vote-article">
      <h3>Vote for this article:</h3>
      <button onClick={() => handleVote(1)} disabled={hasVoted}>LIKE</button>
      <button onClick={() => handleVote(-1)} disabled={hasVoted}>DISLIKE</button>
    </div>
  );
};

export default VoteArticle;
