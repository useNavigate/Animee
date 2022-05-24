import { Card, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
export const Picture = styled("img")(({ theme }) => ({
    width: "100%",
    objectFit: "cover",

}))


export const ContainerBox = styled(Container)({
    marginTop: "10rem",





})


export const SideCard = styled(Card)({
    color: "white",
    background: "#273D54",
    marginTop: "1rem",
    padding: "1rem",
    boxShadow: "rgba(0,0,0,0.8) 0px 7px 29px 0px",

})


export const Like = styled(FavoriteIcon)({
    color: "red"
})

export const Title = styled("div")({

    width: "100%",
    "& h2": {
        margin: "0",
        marginBottom: "12px",
        fontWeight: "600",
    },
    "& h4": {
        margin: "0",
        fontWeight: "300",
        marginBottom: "12px",
    },
    "& div": {
        width: "100%",

    },
})


export const LikeDiv = styled("div")({

    display: "flex",
    alignItems: "center"
})

export const SynopCard = styled(Card)({
    color: "white",
    background: "#273D54",
    marginTop: "1rem",
    padding: "1rem",
    "@media (max-width:900px)": {
        textAlign: "center"
    },
    boxShadow: "rgba(0,0,0,0.8) 0px 7px 29px 0px",


})

export const Characters = styled("h1")({
    color: "#02DAC5",
    margin: "auto",
    display: "flex",
    justifyContent: 'center'
})
export const CharacterContainer = styled("div")({
    display: "flex",
    flexWrap: "wrap",
    overflow: "auto",
    maxHeight: "600px",
    width: "100%",
    justifyContent: "center",

})



export const CharacterCard = styled("div")({
    display: "flex",
    width: "220px",
    margin: "5px",
    padding: "5px",
    boxShadow: "rgba(0,0,0,0.4) 0px 7px 29px 0px",
    transition: "all 0.3s",
    "&:hover": {
        background: "rgba(0,0,0,0.3)"
    }
})

export const CharacterImg = styled("div")({
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    objectCover: "fit",
    width: "200px",
    height: "150px",


})

export const CharacterName = styled("div")({
    display: "flex",
    flexDirection: "column",
    wordBreak: "break-word",
    marginLeft: "5px",
    width: "100%",

    "& h6": {
        margin: "0",
        color: "#02DAC5",
        fontSize: "12px",
        fontWeight: "400",
    },

    "& h2": {
        margin: "0",
        color: "#02DAC5",
        fontSize: "20px",
        fontWeight: "400",
    }
})