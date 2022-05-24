import React from "react";
import { Route, Routes } from "react-router-dom";
import Detail from "./Detail";
import Home from "./Home";
import SearchResult from "./SearchResult";
import Top from "./Top";
const Page = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/search/:query" element={<SearchResult />} />
      <Route exact path="/page/:type/:filter" element={<Top />} />
      <Route exact path="/detail/:anime" element={<Detail />} />
    </Routes>
  );
};

export default Page;
