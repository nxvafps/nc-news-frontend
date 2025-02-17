import { useState } from "react";

const initialFilters = {
  author: "",
  topic: "",
  sort_by: "created_at",
  order: "desc",
  limit: 10,
  p: 1,
};

export const useFilters = () => {
  const [filterInputs, setFilterInputs] = useState(initialFilters);
  const [activeFilters, setActiveFilters] = useState(initialFilters);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleApplyFilters = () => {
    setActiveFilters(filterInputs);
    return false;
  };

  const handlePageChange = (newPage) => {
    setActiveFilters((prev) => ({
      ...prev,
      p: newPage,
    }));
    setFilterInputs((prev) => ({
      ...prev,
      p: newPage,
    }));
  };

  return {
    filterInputs,
    activeFilters,
    handleFilterChange,
    handleApplyFilters,
    handlePageChange,
  };
};
