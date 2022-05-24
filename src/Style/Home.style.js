import { styled } from "@mui/material";

export const HomePageSection = styled("div")({
  margin: "0",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  position: "relative",
  flexWrap: "wrap",
  alignItems: "center",
  textAlign: "center",
});

export const PageContainer = styled("div")({
  maxWidth: "1800px"
})

export const WelcomeText = styled("h2")({
  color: "white",
  marginTop: "12rem",
  fontSize: "3rem",
  "& span": {
    color: "#02DAC5",
    marginLeft: "8px",
  },
  display: "flex",
  justifyContent: "center",
  '@media (max-width: 600px)': {
    flexDirection: "column",
    textAlign: "center",

  }
});

export const Logo = styled("h1")({
  color: "white",
  margin: "0",
  position: "fixed",
  paddingTop: "1rem",
  left: "48%",
});

export const Page = styled("div")({

  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
});

export const Loading = styled("h1")({
  fontWeight: "bold",
  fontSize: "3rem",
  animationName: "Text",
  animationDuration: "4s",
  animationIterationCount: "infinite",
  display: "flex",
  margin: "auto",
  justifyContent: "center",

  "@keyframes Text": {
    "0%": {
      color: "lightblue",
      opacity: "0.5",
    },
    "20%": {
      color: "pink",
      opacity: "1",
    },
    "40%": {
      color: "#02DAC5",
      opacity: "0.1",
    },

    "60%": {
      color: "#AEEE98 ",
      opacity: "0.7",
    },
    "80%": {
      color: "yellow",
      opacity: "0.2",
    },
    "100%": {
      color: "#02DAC5 ",
      opacity: "0.5",
    },
  },
});
