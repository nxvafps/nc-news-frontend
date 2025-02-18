import { useState, useCallback } from "react";

const initialFilters = {
  author: "",
  topic: "",
  sort_by: "created_at",
  order: "desc",
  limit: 10,
  p: 1,
};

const useFilters = () => {
  const [filterInputs, setFilterInputs] = useState(initialFilters);
  const [activeFilters, setActiveFilters] = useState(initialFilters);

  const setFilters = useCallback((newFilters) => {
    const resetFilters = {
      ...initialFilters,
      ...newFilters,
    };
    setFilterInputs(resetFilters);
    setActiveFilters(resetFilters);
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleApplyFilters = useCallback(() => {
    setActiveFilters(filterInputs);
  }, [filterInputs]);

  const handlePageChange = useCallback(
    (newPage) => {
      const newFilters = {
        ...filterInputs,
        p: newPage,
      };
      setFilters(newFilters);
    },
    [filterInputs, setFilters]
  );

  const resetFilters = useCallback(() => {
    setFilters(initialFilters);
  }, [setFilters]);

  return {
    filterInputs,
    activeFilters,
    handleFilterChange,
    handleApplyFilters,
    handlePageChange,
    setFilters,
    resetFilters,
  };
};

export default useFilters;
