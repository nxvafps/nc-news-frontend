import { SearchContainer, SearchIcon, SearchInput } from "./styles";

const SearchBar = () => {
  return (
    <SearchContainer>
      <SearchIcon />
      <SearchInput type="text" placeholder="Search articles..." />
    </SearchContainer>
  );
};

export default SearchBar;
