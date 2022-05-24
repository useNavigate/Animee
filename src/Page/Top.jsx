import React, { useState, useRef, useCallback, useEffect } from "react";
import { useParams, useLocation, Link, useNavigate } from "react-router-dom";
import { useFilter } from "../Api/Api";
import { v4 as uuidv4 } from "uuid";


import {
  HomePageSection,
  Page,
  Loading,
  PageContainer,
} from "../Style/Home.style";

import AnimeCards from "../component/AnimeCards";
import HeadingBanner from "../component/HeadingBanner";

import {
  FilterBox,
  FilterButton,
} from "../Style/HeadingBannerStyles";
import { Wrapper } from "../Style/Top.styles";

const Top = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate()

  const [type, setType] = useState(location.state);
  const [pageNumber, setPageNumber] = useState(1);
  const [filtering, setFilter] = useState("tv")
  const filter = ["tv", "movie", "ova", "special", "ona", "music"]

  const URL = "https://api.jikan.moe/v4/top/anime";
  const { animes, hasMore, loading, error } = useFilter(params.type, filtering, pageNumber, URL);

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

  useEffect(() => {
    setType(params.type)

  }, [params]);





  const handleFilter = (e, item) => {
    e.preventDefault()
    setFilter(item)
    navigate(`/page/${type}/${item}`, { state: item })

  }
  return (
    <Wrapper>
      <HomePageSection>
        <PageContainer>
          <Page>
            <HeadingBanner
              type={type}
              loading={loading}
              term={`${type} page`}
              filter={filtering}
            />


          </Page>
          {loading ? (
            <>
              <Loading >
                {`Loading UWU`}
              </Loading>
              <AnimeCards
                key={uuidv4()}
                anime={anime}
                hasMore={hasMore}
                lastAnime={lastAnime}
                type={type}
                loading={loading}
              />
            </>
          ) : (<> <FilterBox>

            {filter.map(item => {
              return (<FilterButton name={item} onClick={(e) => handleFilter(e, item)} key={uuidv4()}>{item}</FilterButton>)
            })}
          </FilterBox>  <AnimeCards
              key={uuidv4()}
              anime={anime}
              hasMore={hasMore}
              lastAnime={lastAnime}
              type={type}
              loading={loading}
            /></>)}
        </PageContainer>
      </HomePageSection>
    </Wrapper>
  );
};

export default Top;
