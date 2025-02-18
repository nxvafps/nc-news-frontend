import { useState, useEffect, useCallback } from "react";
import { getArticleComments } from "../api/articlesService";

const useComments = (articleId) => {
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchComments = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await getArticleComments(articleId, currentPage);
      setComments(data.comments);
      setTotalPages(Math.ceil(data.total_count / 10));
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [articleId, currentPage]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  const updateComment = useCallback((updatedComment) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.comment_id === updatedComment.comment_id
          ? updatedComment
          : comment
      )
    );
  }, []);

  return {
    comments,
    currentPage,
    totalPages,
    isLoading,
    error,
    setCurrentPage,
    setComments,
    updateComment,
  };
};

export default useComments;
