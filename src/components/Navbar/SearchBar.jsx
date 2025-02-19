import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContainer, SearchIcon, SearchInput } from "./styles";
import debounce from "lodash/debounce";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const debouncedNavigate = useCallback(
    debounce((term) => {
      if (term) {
        navigate(`/articles?search=${encodeURIComponent(term)}`);
      } else {
        navigate("/articles");
      }
    }, 300),
    []
  );

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    debouncedNavigate(term);
  };

  return (
    <SearchContainer>
      <SearchIcon />
      <SearchInput
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search articles..."
        onClick={() => navigate("/articles")}
      />
    </SearchContainer>
  );
};

export default SearchBar;
