import { styled } from "@mui/material";


export const Banner = styled("div")({
    width: "100%",
    height: "3rem",

})
export const TitleBanner = styled("div")({
    display: "flex",
    borderLeft: "10px solid #02DAC5",
    background: "#273D54 ",
    padding: "0",
    height: "100%",
    boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",



})

export const TitleText = styled("h1")({
    textTransform: "capitalize",
    fontSize: "24px",
    color: "white",
    marginLeft: "5px",

})

export const FilterBox = styled("ul")({
    width: "100%",
    display: "flex",
    background: "#102A41",
    margin: "0",
    justifyContent: "center"


})
export const FilterButton = styled("button")({

    marginLeft: "5px",
    marginRight: "5px",
    padding: "2.5px",
    border: "none",
    background: "transparent",
    color: "rgba(257,257,257,0.3)",
    transition: "ease-in 0.2s",
    "&:hover": {

        color: "rgba(257,257,257,0.8)",
        cursor: "pointer",
        border: "3px"

    }


})