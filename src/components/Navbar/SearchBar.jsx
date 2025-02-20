import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContainer, SearchIcon, SearchInput } from "./styles";
import debounce from "lodash/debounce";

const SearchBar = ({ isMobile = false }) => {
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
    <SearchContainer $isMobile={isMobile}>
      <SearchIcon />
      <label htmlFor="search-input" className="sr-only">
        {isMobile ? "Search" : "Search articles"}
      </label>
      <SearchInput
        id="search-input"
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder={isMobile ? "Search..." : "Search articles..."}
        onClick={() => !isMobile && navigate("/articles")}
        $isMobile={isMobile}
        autoFocus={isMobile}
      />
    </SearchContainer>
  );
};

export default SearchBar;
