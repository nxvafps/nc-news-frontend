import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ArticleItem from "../ArticleItem";
import { Pagination } from "..";
import FilterForm from "./FilterForm";
import { useArticles, useFilters } from "../../hooks";
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
  const [showFilters, setShowFilters] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
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
    const hasValidParams = Object.keys(params).length > 0;

    if (hasValidParams) {
      const newFilters = {
        ...initialFilters,
        ...params,
        p: Number(params.p) || 1,
      };
      setFilters(newFilters);
    }
  }, [searchParams, setFilters]);

  useEffect(() => {
    const newParams = new URLSearchParams();
    Object.entries(activeFilters).forEach(([key, value]) => {
      if (value && value !== initialFilters[key]) {
        newParams.set(key, value);
      }
    });
    setSearchParams(newParams, { replace: true });
  }, [activeFilters, setSearchParams]);

  const { articles, isLoading, error, totalArticles } =
    useArticles(activeFilters);

  useEffect(() => {
    if (showFilters && window.innerWidth < 768) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showFilters]);

  const totalPages = Math.ceil(totalArticles / activeFilters.limit);

  const handleApplyAndClose = () => {
    handleApplyFilters();
    setShowFilters(false);
  };

  return (
    <PageContainer>
      <ContentWrapper>
        <ContentLayout>
          <FilterOverlay
            $show={showFilters}
            onClick={() => setShowFilters(false)}
          />
          <FiltersSection $show={showFilters}>
            <FilterForm
              filterInputs={filterInputs}
              handleFilterChange={handleFilterChange}
              handleApplyFilters={handleApplyAndClose}
              onClose={() => setShowFilters(false)}
            />
          </FiltersSection>

          <div>
            <MobileFilterControls>
              <FilterToggleButton onClick={() => setShowFilters(!showFilters)}>
                {showFilters ? "Hide Filters" : "Show Filters"}
              </FilterToggleButton>
            </MobileFilterControls>

            <ArticlesSection>
              {isLoading ? (
                <div>Loading...</div>
              ) : error ? (
                <div>Error: {error}</div>
              ) : (
                <>
                  <ArticlesGrid>
                    {articles.map((article) => (
                      <ArticleItem key={article.article_id} article={article} />
                    ))}
                  </ArticlesGrid>
                  <Pagination
                    currentPage={activeFilters.p}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
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
