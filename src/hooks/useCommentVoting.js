import { useState } from "react";
import { updateCommentVotes } from "../api/commentService";

export const useCommentVoting = (initialVotes, commentId, auth) => {
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
      await updateCommentVotes(commentId, voteChange, auth.token);
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
