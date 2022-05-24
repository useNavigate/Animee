import { Container, Grid } from "@mui/material";
import React, { useState, useRef, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSearch } from "../Api/Api";
import { useNavigate, useParams } from "react-router-dom";

import {
  Search,
  SearchIcon,
  SearchBox,
  ResultPage,
  CloseButton,
  Result,
  Cards,
  Form,
  SearchContainer
} from "../Style/FloatingSearch.style";

const FloatingSearch = () => {
  const params = useParams();

  const [isClick, setClick] = useState(false);
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [submit, setSubmit] = useState(false);

  const handleClick = () => {
    setClick(!isClick);
  };

  const navigate = useNavigate();
  const queryRef = useRef(null);

  const handleSubmit = (e) => {
    setPageNumber(1);

    setQuery(e.target.value);
    navigate(`/search/${queryRef.current.value}`);
  };

  return (
    <SearchContainer>
      <Search toggle={isClick}>
        <SearchBox>
          <SearchIcon onClick={handleClick} toggle={isClick} />
          <Form type="submit" onSubmit={handleSubmit}>
            <input
              type="text"
              toggle={isClick}
              ref={queryRef}
              placeholder="search..."
            />
          </Form>
        </SearchBox>
      </Search>
    </SearchContainer>
  );
};

export default FloatingSearch;
