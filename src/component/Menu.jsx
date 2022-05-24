import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import LiveTvIcon from "@mui/icons-material/LiveTv";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import {
  Nav,
  MenuIcon,
  NavBox,
  NavDrop,
  HomeIcon,
  UpcomingIcon,
  FavoriteIcon,
} from "../Style/Navbar.style";

const Navbar = () => {

  const [isToggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!isToggle);
  };

  const closeMenu = () => {
    setToggle(!isToggle);
  };
  const navItems = ["favorite", "popular", "airing", "upcoming"]



  useEffect(() => { }, [isToggle]);
  return (
    <Nav  >
      <NavBox>

        <MenuIcon onClick={handleClick} toggle={isToggle} />
        <NavDrop toggle={isToggle}>
          <ul>
            <Link to="/">
              <li onClick={closeMenu}>
                <HomeIcon />
                Home
              </li>
            </Link>
            <Link to="/page/upcoming/tv" state={"upcoming"}>
              <li>
                <UpcomingIcon />
                Upcoming
              </li>
            </Link>
            <Link to="/page/airing/tv" state={"airing"}>
              <li>
                <LiveTvIcon style={{ fontSize: "2.5rem" }} />
                Airing
              </li>
            </Link>
            <Link to="/page/bypopularity/tv" state={"bypopularity"}>
              <li>
                <ThumbUpAltRoundedIcon style={{ fontSize: "2.5rem" }} />
                Popular
              </li>
            </Link>
            <Link to="/page/favorite/tv" state={"favorite"}>
              <li>
                <FavoriteIcon style={{ fontSize: "2.5rem" }} />
                Favorite
              </li>
            </Link>
          </ul>
        </NavDrop>
      </NavBox>
    </Nav>
  );
};

export default Navbar;
