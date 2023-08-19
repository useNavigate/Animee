import { AppBar, styled } from "@mui/material";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import UpcomingRoundedIcon from "@mui/icons-material/UpcomingRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
export const Nav = styled("div")((props) => ({
  backgroundColor: "transparent",
  color: "black",
  position: "fixed",
  boxShadow: "none",
  alignItems: "center",
  display: "flex",
  paddingTop: "1rem",
  justifyContent: "center",

  right: "3%",


  zIndex: 9999,

}));

export const NavBox = styled("div")((props) => ({
  display: "flex",
  justifyContent: "flex-end",
}));

export const NavDrop = styled("div")((props) => ({
  display: props.toggle ? "block" : "none",
  background: props.toggle && "#102A41",
  boxShadow: "rgba(0, 0, 0, 0.2) 0px 8px  20px",
  color: "white",
  borderRadius: "10px",

  "& ul": {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "5px",
    width: "100px",
    marginTop: "40px",

    "& li": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "5px",
      justifyContent: "center",
      width: "80px",
      height: "80px",
      fontSize: "12px",
      color: "white",
      background: "rgba(257,257,257,0.1)",
      padding: "5px",
      borderRadius: "10px",
      boxShadow: "rgba(0, 0, 0, 0.2) 0px 8px  20px",
      "&:hover": {
        cursor: "pointer",
        color: "#02DAC5",
      },
    },
  },
}));




export const MenuIcon = styled(MenuRoundedIcon)((props) => ({
  zIndex: "999",
  display: "flex",
  width: "3rem",
  height: "3rem",
  color: props.toggle ? "white" : "initial", // Use "initial" or an appropriate default color
  position: "absolute",
  cursor: "pointer",
  background: props.toggle === undefined ? "#02DAC5" : "none",
  padding: "0.2rem",
  borderRadius: props.toggle === undefined ? "50%" : "none",
  boxShadow: props.toggle === undefined ? "rgba(0, 0, 0, 0.5) 0px 8px 20px" : "none",
}));
export const HomeIcon = styled(HomeRoundedIcon)((props) => ({
  fontSize: "2.5rem",
}));

export const UpcomingIcon = styled(UpcomingRoundedIcon)((props) => ({
  fontSize: "2.5rem",
}));

export const FavoriteIcon = styled(FavoriteRoundedIcon)((props) => ({
  fontSize: "2.5rem",
}));

