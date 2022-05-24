import { styled } from "@mui/material";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { Link } from "react-router-dom"
export const Cards = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  width: "100%",
  position: "relative",


});

export const Card = styled("div")({
  width: "200px",
  height: "300px",

  display: "flex",
  background: "#02DAC5",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  objectCover: "cover",
  boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.86)",
  '@media (max-width: 440px)': {
    width: "430px",
    height: "100%",
    margin: "10px",

  }



});

export const Gradient = styled("div")({
  width: "100%",
  height: "100%",
  background: 'rgb(18,18,18)',
  background: "linear-gradient(180deg, rgba(18,18,18,1) 1%, rgba(0,0,0,0.25253851540616246) 53%, rgba(18,18,18,1) 100%)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  margin: "auto",
  transition: 'all 0.2s ease-in',
  alignContent: "center",



  opacity: "0",
  "& h3": {
    maxHeight: "100px",
    fontSize: "18px",
    color: "#f9f9f9 ",
    overflow: "hidden",
    textAlign: "center",
    textShadow: "3px 3px 5px rgba(0, 0, 0, 0.7)",
    textOverflow: "ellipsis"


  },

  "&:hover": {
    opacity: "1",
    cursor: "pointer",

  },
  '@media (max-width: 445px)': {
    opacity: "1",
    justifyContent: "center",
    padding: "10px",
    background: 'rgba(18,18,18,0.5)',
    background: "linear-gradient(180deg, rgba(18,18,18,0.5) 1%, rgba(0,0,0,0.25253851540616246) 53%, rgba(18,18,18,0.5) 100%)",
    "& h3": {
      width: "60%",
      margin: "auto",
      fontSize: "18px",
      color: "#f9f9f9 ",
      overflow: "hidden",
      textAlign: "center",
      textShadow: "3px 3px 5px rgba(0, 0, 0, 0.7)",
      textOverflow: "ellipsis"


    },

  }


})



export const GenreUl = styled("ul")({
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",


  "& li": {
    display: "flex",
    justifyContent: "center",
    background: "#02DAC5",
    padding: "5px",
    margin: "3px",
    borderRadius: "15px",
    fontSize: "12px",
    fontWeight: "bold",
    color: "#273D54",
    zIndex: "999",
    height: "20px",
    textAlign: "center",
    alignItems: "center",
    boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.7)",

  },
})

export const PlayButton = styled(PlayCircleOutlineIcon)({
  fontSize: "80px",
  color: "white",
  display: "flex",
  margin: "auto",
  transition: 'all 0.3s ease-in',
  "&:hover": {
    color: "#02DAC5",

  },
  '@media (max-width: 445px)': {
    opacity: "0"

  }

})

export const Select = styled("select")({
  width: "150px",
  background: "#273D54",
  border: "none",
  padding: "5px",
  borderRadius: "25px",
  color: "white",
  marginLeft: "10px",
  marginRight: "10px",
  marginTop: "0",
  marginBottom: "0",
  height: "40px",
  fontSize: "1.2rem",
  boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.7)"
})

export const ALink = styled(Link)({
  '@media (max-width: 440px)': {
    margin: "10px"
  }

})