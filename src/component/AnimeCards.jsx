import React from "react";
import { Link } from "react-router-dom"
import { v4 as uuidv4 } from "uuid";
import {
  Cards,
  Card,
  Gradient,
  GenreUl,
  PlayButton,
  ALink
} from "../Style/AnimeCards.style";

const AnimeCards = ({ anime, Loading, hasMore, lastAnime, type }) => {
  return (
    <>
      <div style={{ marginTop: "10px" }}>



        <Cards key={uuidv4()} >
          {anime.map((aa, i) => {
            return (
              <React.Fragment key={uuidv4()}>
                {aa.map((a) => {
                  if (hasMore) {
                    return (
                      <ALink key={uuidv4()} to={"/detail/" + a.mal_id} state={a}>
                        <Card
                          key={uuidv4()}
                          style={{
                            backgroundImage: `url(${a.images.jpg.image_url})`,
                            margin: "10px"
                          }}
                        >
                          <Gradient>
                            <h3 ref={lastAnime}>{a.title}</h3>
                            <PlayButton />
                            <GenreUl>
                              {a.genres.map((g) => {
                                return <li key={uuidv4()}>{g.name}</li>;
                              })}
                            </GenreUl>
                          </Gradient>
                        </Card>
                      </ALink>
                    );
                  } else {
                    return (
                      <ALink to={"/detail/" + a.mal_id} key={uuidv4()} state={a}>
                        <Card
                          key={uuidv4()}
                          style={{
                            backgroundImage: `url(${a.images.jpg.image_url})`,
                          }}
                        >
                          <Gradient>
                            <h3 ref={lastAnime}>{a.title}</h3>
                            <PlayButton />
                            <GenreUl>
                              {a.genres.map((g) => {
                                return <li key={uuidv4()}>{g.name}</li>;
                              })}
                            </GenreUl>
                          </Gradient>
                        </Card>
                      </ALink>
                    );
                  }
                })}
              </React.Fragment>
            );
          })}
        </Cards>
      </div>
    </>
  );
};

export default AnimeCards;
