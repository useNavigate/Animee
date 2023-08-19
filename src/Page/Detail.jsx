import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import { v4 as uuidv4 } from "uuid";

import { Grid, Rating } from "@mui/material";
import {
  ContainerBox,
  Like,
  Picture,
  SideCard,
  Title,
  LikeDiv,
  SynopCard,
  Characters,
  CharacterContainer,
  CharacterCard,
  CharacterImg,
  CharacterName
} from "../Style/Details.style";



const Detail = () => {
  const params = useParams();
  const location = useLocation();
  const [data, setData] = useState(location.state);
  const [image, setImage] = useState([data.images.jpg.image_url]);
  const [characters, setCharacters] = useState([]);



  const URL = `https://api.jikan.moe/v4/anime/${data.mal_id}/characters`;

  useEffect(() => {
    let cancel;
    axios({
      method: "GET",
      url: URL,
      params: { id: data.mal_id },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setCharacters(res.data.data);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        console.log(e);
      });
    return () => cancel();
  }, [params]);

  return (
    <ContainerBox>
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={4} sm={4} md={4} key={data.mal_id + "title"}>
          <Picture src={image} />

          <SideCard>
            <Title>
              <h2>{data.title}</h2>
              <h4>{data.title_japanese}</h4>
              <div>
                <Rating
                  name="half-rating-read"
                  defaultValue={data.score / 2 > 0 ? data.score : 0}
                  precision={0.5}
                  readOnly
                />
              </div>
              <LikeDiv>
                <Like />
                {data.favorites}

              </LikeDiv>

            </Title>


            <ul>

              <li>Type : {data.type}</li>
              <li>Raiting: {data.rating}</li>
              <li>
                Score: {data.score ? data.score + "/9.99" : "not scored yet"}{" "}
              </li>
              <li>released year: {data.year}</li>
              <li>Status: {data.status}</li>


              <li>Studio:</li>
              {data.studios.map((s) => {
                return <li key={uuidv4()}> {s.name}</li>;
              })}

              <li>Duration: {data.duration}</li>
            </ul>
          </SideCard>
        </Grid>

        <Grid item xs={4} sm={4} md={8} key={data.mal_id + "image"} >
          <SideCard>

            {data.trailer.embed_url === null ? <h1>Video is currently unavailable</h1>: <iframe
              src={data.trailer.embed_url}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
              style={{ width: "100%", height: "450px" }}
            />}

          </SideCard>
          <SynopCard>
            <p>{data.synopsis}</p>
          </SynopCard>
          <SideCard>
            <Characters>characters</Characters>
            <CharacterContainer>
              {characters.map((c) => {
                return (
                  <CharacterCard key={uuidv4()}>
                    <CharacterImg
                      style={{
                        backgroundImage: `url(${c.character.images.jpg.image_url})`,
                      }}
                    ></CharacterImg>
                    <CharacterName >
                      <h6>
                        {c.role}
                      </h6>
                      <h2 style={{ margin: "0", color: "rgba(257,257,257,0.8)", fontWeight: "500", }}>{c.character.name}</h2>
                    </CharacterName>
                  </CharacterCard>
                );
              })}
            </CharacterContainer>
          </SideCard>
        </Grid>
      </Grid>
    </ContainerBox >
  );
};

export default Detail;
