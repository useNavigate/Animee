import React, { useState, useRef, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFilter } from "../Api/Api";
import { v4 as uuidv4 } from "uuid";

import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import HeadingBanner from "../component/HeadingBanner";
import AnimeCards from "../component/AnimeCards";

import {
  HomePageSection,
  Logo,
  Page,
  Loading,
  WelcomeText,
  PageContainer,
} from "../Style/Home.style";

import {
  FilterBox,
  FilterButton,
} from "../Style/HeadingBannerStyles";





const Home = () => {
  const navigate = useNavigate()

  //Default Value 
  const [filtered, setFiltered] = useState("tv")
  const filter = ["tv", "movie", "ova", "special", "ona", "music"]
  const [type, setType] = useState("upcoming");
  //Fetch Lazy Loading Screen
  const URL = "https://api.jikan.moe/v4/top/anime";
  const [pageNumber, setPageNumber] = useState(1);
  const { animes, hasMore, loading, error } = useFilter(type, filtered, pageNumber, URL);
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


  //Render when Filter is Changed 
  const handleFilter = (item) => setFiltered(item)
  useEffect(() => { }, [filtered]);

  return (
    <HomePageSection>
      <PageContainer>
        {/* <Logo>Logo</Logo> */}
        <Page>
          <WelcomeText>
            welcome to <span>Animee</span>
          </WelcomeText>

          {loading ? (
            " "
          ) : (
            <>

              <HeadingBanner loading={loading} type={type} filter={filtered} />

              {/* FILTERING DIV */}
              <FilterBox>
                {filter.map(item => { return (<FilterButton name={item} onClick={() => handleFilter(item)} key={uuidv4()}>{item}</FilterButton>) })}
              </FilterBox>
              {/* FILTERING DIV */}

            </>
          )}
          <AnimeCards
            key={uuidv4()}
            anime={anime}
            hasMore={hasMore}
            lastAnime={lastAnime}
            type={type}
            Loading={loading}
          />
          {/* {LOADING} */}
          <Loading >
            {loading && "loading"}
          </Loading>
          {/* {LOADING} */}
        </Page>
      </PageContainer>
    </HomePageSection >
  );
};

export default Home;
