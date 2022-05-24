import React from "react";

import "./App.css";
import Page from "./Page/Page";
import Navbar from "./component/Navbar";

const App = () => {


  return (
    <div className="container" >
      <div className="navbar">
        <Navbar />
      </div>
      <Page />
    </div>
  );
};

export default App;
