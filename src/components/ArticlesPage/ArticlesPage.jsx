import { useState, useEffect } from "react";
import ArticleItem from "../ArticleItem";
import { Pagination } from "..";
import FilterForm from "./FilterForm";
import { useArticles } from "../../hooks/useArticles";
import { useFilters } from "../../hooks/useFilters";
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

const ArticlesPage = () => {
  const [showFilters, setShowFilters] = useState(false);
  const {
    filterInputs,
    activeFilters,
    handleFilterChange,
    handleApplyFilters,
    handlePageChange,
  } = useFilters();
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
