import {
  FiltersSection,
  FilterGroup,
  ApplyFiltersButton,
  MobileCloseFilters,
} from "./styles";

const FilterForm = ({
  filterInputs,
  handleFilterChange,
  handleApplyFilters,
  onClose,
}) => {
  return (
    <>
      <MobileCloseFilters onClick={onClose}>✕</MobileCloseFilters>

      <FilterGroup>
        <label htmlFor="author">Author</label>
        <input
          id="author"
          type="text"
          name="author"
          value={filterInputs.author}
          onChange={handleFilterChange}
          placeholder="Filter by author..."
        />
      </FilterGroup>

      <FilterGroup>
        <label htmlFor="topic">Topic</label>
        <input
          id="topic"
          type="text"
          name="topic"
          value={filterInputs.topic}
          onChange={handleFilterChange}
          placeholder="Filter by topic..."
        />
      </FilterGroup>

      <FilterGroup>
        <label htmlFor="sort_by">Sort By</label>
        <select
          id="sort_by"
          name="sort_by"
          value={filterInputs.sort_by}
          onChange={handleFilterChange}
        >
          <option value="created_at">Date</option>
          <option value="comment_count">Comments</option>
          <option value="votes">Votes</option>
        </select>
      </FilterGroup>

      <FilterGroup>
        <label htmlFor="order">Order</label>
        <select
          id="order"
          name="order"
          value={filterInputs.order}
          onChange={handleFilterChange}
        >
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </FilterGroup>

      <FilterGroup>
        <label htmlFor="limit">Items per page</label>
        <select
          id="limit"
          name="limit"
          value={filterInputs.limit}
          onChange={(e) =>
            handleFilterChange({
              target: { name: "limit", value: Number(e.target.value) },
            })
          }
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </FilterGroup>

      <ApplyFiltersButton onClick={handleApplyFilters}>
        Apply Filters
      </ApplyFiltersButton>
    </>
  );
};

export default FilterForm;
