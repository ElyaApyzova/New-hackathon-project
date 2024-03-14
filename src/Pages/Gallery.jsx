import React from "react";
import { Container, Typography }  from "@mui/material";


const Gallery = () => {

    return (
        <Container>
         <Typography variant="h1" component="div" sx={{ fontSize: "40px", fontWeight: "600", textAlign: "center", marginTop: "50px"}}>Галерея наших работ</Typography>
        </Container>
    )
}

export default Gallery;