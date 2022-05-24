import { styled } from "@mui/material";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

export const ScrollButton = styled(ArrowCircleUpIcon)({
    fontSize: "2rem",
    background: "#02DAC5",
    borderRadius: "50%",
    zIndex: "999",
    width: "3rem",
    height: "3rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    position: "fixed",
    right: "10%",
    bottom: "5%",
    "&:hover": {
        cursor: "pointer"
    }
})

