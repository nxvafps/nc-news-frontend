import { useState, useEffect } from "react";
import { getArticles } from "../api/articlesService";

const useArticles = (activeFilters) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalArticles, setTotalArticles] = useState(0);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsLoading(true);
        const data = await getArticles(activeFilters);
        setArticles(data.articles);
        setTotalArticles(data.total_count);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, [activeFilters]);

  return { articles, isLoading, error, totalArticles };
};

export default useArticles;
