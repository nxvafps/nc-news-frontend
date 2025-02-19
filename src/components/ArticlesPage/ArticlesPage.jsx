import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import ArticleItem from "../ArticleItem";
import { Pagination } from "..";
import FilterForm from "./FilterForm";
import { useArticles, useFilters } from "../../hooks";
import { searchArticles } from "../../api/articlesService";
import {
  PageContainer,
  ContentLayout,
  FiltersSection,
  ArticlesSection,
  FilterToggleButton,
  ArticlesGrid,
  ContentWrapper,
  MobileFilterControls,
  FilterOverlay,
  NewArticleButton,
  ButtonContainer,
  LeftColumn,
} from "./styles";

const initialFilters = {
  author: "",
  topic: "",
  sort_by: "created_at",
  order: "desc",
  limit: 10,
  p: 1,
};

const ArticlesPage = () => {
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const {
    filterInputs,
    activeFilters,
    handleFilterChange,
    handleApplyFilters,
    handlePageChange,
    setFilters,
  } = useFilters();

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());
    const searchTerm = params.search;

    const filterParams = { ...params };
    delete filterParams.search;

    if (Object.keys(filterParams).length > 0) {
      const newFilters = {
        ...initialFilters,
        ...filterParams,
        p: Number(filterParams.p) || 1,
      };
      setFilters(newFilters);
    }

    if (searchTerm) {
      const fetchSearchResults = async () => {
        try {
          const results = await searchArticles(searchTerm);
          setSearchResults(Array.isArray(results) ? results : []);
        } catch (error) {
          console.error("Search failed:", error);
          setSearchResults([]);
        }
      };
      fetchSearchResults();
    } else {
      setSearchResults([]);
    }
  }, [searchParams, setFilters]);

  useEffect(() => {
    if (showFilters) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showFilters]);

  const { articles, isLoading, error, totalArticles } =
    useArticles(activeFilters);
  const displayArticles = searchParams.get("search")
    ? searchResults
    : articles || [];
  const totalPages = Math.ceil(totalArticles / activeFilters.limit);

  const handleApplyAndClose = () => {
    handleApplyFilters();
    setShowFilters(false);

    const newParams = new URLSearchParams(searchParams);
    Object.entries(filterInputs).forEach(([key, value]) => {
      if (value && value !== initialFilters[key]) {
        newParams.set(key, value);
      } else {
        newParams.delete(key);
      }
    });
    setSearchParams(newParams, { replace: true });
  };

  return (
    <PageContainer>
      <FilterOverlay
        $show={showFilters}
        onClick={() => setShowFilters(false)}
      />
      <ContentWrapper>
        <ContentLayout>
          <LeftColumn>
            <NewArticleButton onClick={() => navigate("/articles/new")}>
              Create New Article
            </NewArticleButton>
            <FiltersSection $show={true}>
              <FilterForm
                filterInputs={filterInputs}
                handleFilterChange={handleFilterChange}
                handleApplyFilters={handleApplyAndClose}
                onClose={() => setShowFilters(false)}
              />
            </FiltersSection>
          </LeftColumn>

          <div>
            <MobileFilterControls>
              <NewArticleButton onClick={() => navigate("/articles/new")}>
                Create New Article
              </NewArticleButton>
              <FilterToggleButton onClick={() => setShowFilters(true)}>
                Show Filters
              </FilterToggleButton>
            </MobileFilterControls>

            <FiltersSection $show={showFilters}>
              <FilterForm
                filterInputs={filterInputs}
                handleFilterChange={handleFilterChange}
                handleApplyFilters={handleApplyAndClose}
                onClose={() => setShowFilters(false)}
              />
            </FiltersSection>

            <ArticlesSection>
              {isLoading ? (
                <div>Loading...</div>
              ) : error ? (
                <div>Error: {error}</div>
              ) : (
                <>
                  <ArticlesGrid>
                    {displayArticles.map((article) => (
                      <ArticleItem key={article.article_id} article={article} />
                    ))}
                  </ArticlesGrid>
                  {!searchResults && (
                    <Pagination
                      currentPage={activeFilters.p}
                      totalPages={totalPages}
                      onPageChange={handlePageChange}
                    />
                  )}
                </>
              )}
            </ArticlesSection>
          </div>
        </ContentLayout>
      </ContentWrapper>
    </PageContainer>
  );
};

export default ArticlesPage;
