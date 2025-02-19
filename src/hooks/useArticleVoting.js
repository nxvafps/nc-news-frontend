import { useState, useEffect } from "react";
import { updateArticleVotes } from "../api/articlesService";

const useArticleVoting = (initialVotes, articleId, auth, onVotesUpdate) => {
  const [votes, setVotes] = useState(initialVotes || 0);
  const [userVote, setUserVote] = useState(0);
  const [isVoting, setIsVoting] = useState(false);

  useEffect(() => {
    setVotes(initialVotes || 0);
  }, [initialVotes]);

  const handleVote = async (increment) => {
    if (isVoting || !auth.token) return;

    setIsVoting(true);
    const previousVotes = votes;
    const previousUserVote = userVote;

    const newVote = userVote === increment ? 0 : increment;
    const voteChange = newVote - userVote;

    const newVotes = previousVotes + voteChange;
    setVotes(newVotes);
    setUserVote(newVote);
    onVotesUpdate(newVotes);

    try {
      await updateArticleVotes(articleId, voteChange, auth.token);
    } catch (error) {
      setVotes(previousVotes);
      setUserVote(previousUserVote);
      onVotesUpdate(previousVotes);
      console.error("Failed to update vote:", error);
    } finally {
      setIsVoting(false);
    }
  };

  return { votes, userVote, isVoting, handleVote };
};

export default useArticleVoting;
