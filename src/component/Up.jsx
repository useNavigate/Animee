import React, { useState, useEffect } from "react";
import { withRouter, useLocation } from "react-router-dom";
import { ScrollButton } from "../Style/Up.style";




const Up = () => {
  const [showButton, setShowButton] = useState(false);

  console.log(window.pageYOffset)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.pageYOffset)
    });
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };
  return (

    <ScrollButton onClick={scrollToTop} />

  )
}

export default Up;
