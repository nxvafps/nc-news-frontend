import { useState } from "react";
import { updateArticleVotes } from "../api/articlesService";

const useArticleVoting = (initialVotes, articleId, auth) => {
  const [votes, setVotes] = useState(initialVotes);
  const [userVote, setUserVote] = useState(0);
  const [isVoting, setIsVoting] = useState(false);

  const handleVote = async (increment) => {
    if (isVoting || !auth.token) return;

    setIsVoting(true);
    const previousVotes = votes;
    const previousUserVote = userVote;

    const newVote = userVote === increment ? 0 : increment;
    const voteChange = newVote - userVote;

    setVotes(votes + voteChange);
    setUserVote(newVote);

    try {
      await updateArticleVotes(articleId, voteChange, auth.token);
    } catch (error) {
      setVotes(previousVotes);
      setUserVote(previousUserVote);
      console.error("Failed to update vote:", error);
    } finally {
      setIsVoting(false);
    }
  };

  return { votes, userVote, isVoting, handleVote };
};

export default useArticleVoting;
