import React, { useState, useRef, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSearch } from "../Api/Api";
import { v4 as uuidv4 } from "uuid";
import AnimeCards from "../component/AnimeCards";
import HeadingBanner from "../component/HeadingBanner";
import { Page } from "../Style/Home.style";
import { Loading } from "../Style/Home.style";
import { SearchResultContainer } from "../Style/Search.styles"

const SearchResult = () => {
  const URL = "https://api.jikan.moe/v4/anime";

  const params = useParams();
  const searchQuery = params.query.replace(/%/g, " ");
  const [query, setQuery] = useState(searchQuery);
  const [pageNumber, setPageNumber] = useState(1);

  const { animes, hasMore, loading, error } = useSearch(query, pageNumber, URL);

  useEffect(() => { }, [params.query]);

  const anime = animes.map((a) => a.data);

  const observer = useRef();
  const lastAnime = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <SearchResultContainer
    >
      <Page>
        <HeadingBanner type={searchQuery} term={"search result of "} />


        <AnimeCards
          key={uuidv4()}
          anime={anime}
          hasMore={hasMore}
          lastAnime={lastAnime}
          loading={loading}
        />
        <Loading >
          {loading && "loading"}
        </Loading>

      </Page>
    </SearchResultContainer>
  );
};

export default SearchResult;
