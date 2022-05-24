import { AppBar, Card, Grid, styled } from "@mui/material";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CloseRounded from "@mui/icons-material/CloseRounded";
import zIndex from "@mui/material/styles/zIndex";



export const SearchContainer = styled("div")({
    width: "100%", margin: "auto", display: "flex",
})
export const Search = styled("div")((props) => ({
    backgroundColor: "transparent",
    left: "2%",
    color: "black",
    position: "fixed",
    boxShadow: "none",
    alignItems: "center",
    display: "flex",
    paddingTop: "1rem",
    justifyContent: "center",
    zIndex: 9999,


    "@keyframes slideFromTop": {
        "0%": {
            opacity: "0",
            transform: "translateY(-250px)",
        },

        "100%": {
            opacity: "1",
            transform: "translateY(0)",
        }
    },
    "& input": {
        display: props.toggle ? "flex" : "none",
        boxShadow: "rgba(0, 0, 0, 0.2) 0px 8px  20px",
        background: props.toggle && "#02DAC5",
        color: "#121212",
        fontSize: "24px",
        width: "20rem",
        height: "3rem",
        borderRadius: "50px",
        border: "none",
        opacity: "0.5",
        transition: "0.3s all",
        paddingLeft: "3rem",
        "&:hover,&:focus": {
            outline: "#02DAC5 1px solid",
            opacity: "1",
            transition: "0.2s all",

        },




        "@media (max-width:650px)": {
            display: props.toggle ? "block" : "none"
        }

    }

}));


export const SearchBox = styled("div")((props) => ({
    display: "flex",
    position: "relative",


}))
export const SearchIcon = styled(SearchRoundedIcon)((props) => ({

    display: "flex",
    position: "absolute",
    width: "3rem",
    height: "3rem",
    cursor: "pointer",
    background: props.toggle === false ? "#02DAC5" : "none",
    padding: "0.2rem",
    borderRadius: props.toggle === false ? "50%" : "none",
    boxShadow: props.toggle === false ? "rgba(2, 218, 197, 0.2) 0px 8px  20px" : "none",
    zIndex: 999
}))

export const ResultPage = styled(Grid)((props) => ({

    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "15rem",
    position: "relative",


}))

export const CloseButton = styled(CloseRounded)((props) => ({
    color: "white",
    "&:hover": {
        cursor: "pointer"
    },
    display: props.show ? "block" : "none",
    position: "fixed",
    fontSize: "5rem",
    background: "red",
    borderRadius: "20px",
    top: "10%",
    zIndex: 3,
    right: "3%",
    width: "90px"

}))

export const Result = styled("div")((props) => ({
    display: props.show ? "flex" : "none",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    width: "100%",

    // border: "yellow 1px solid"


}))

export const Cards = styled("div")((props) => ({
    // border: "yellow 1px solid",
    backgroundImage: props.src && `"url(${props.src})"`,
    backgroundPosition: "center",
    backgroundSize: "cover",

    height: "380px",
    display: "flex",
    width: "250px",
    margin: "2rem"
}))
export const Form = styled("form")({
    '@media (max-width: 400px)': {
        "& input": { width: '75%' }
    },
    '@media (max-width: 300px)': {
        "& input": { width: '75%' }
    },

})