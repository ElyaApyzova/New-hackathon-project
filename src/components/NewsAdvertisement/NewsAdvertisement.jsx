import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import NewsImage from '../../assets/news_image.png'

const NewsAdvertisement = () => {
  return (
    <>
    <Box
      sx={{
        marginTop: '100px',
        background: "#A0D206",
        color: "#FFFFFF",
        width: '100vw',
        height: '100px',
        display: 'flex',
        justifyContent: 'start',
      }}
    >
      <Container>
        <Typography variant="h4" component="div" marginTop={4}>
          Новости и объявления
        </Typography>
      </Container>
    </Box>

    <Container>
    <Typography variant="h3" component="div" marginTop={6} marginBottom={6} sx={{
        fontWeight: '700'
      }}>
    В Бишкеке состарилось 30 процентов деревьев-агроном
          </Typography>
          </Container>
          <Container sx={{ marginBottom: "100px"}}>
  <Grid container spacing={4}>
    <Grid item xs={6}>
      <Typography variant="body1" component="div" marginBottom={1} sx={{
        fontWeight: '500', color: '#A49F9F'
      }}>
        16.02.2024
        </Typography>
        <img src={NewsImage} alt="NewsImage" />
      </Grid>
      <Grid item xs={6} marginTop={3}>
        <Typography variant="h6" component="div" sx={{
        fontWeight: '700'
      }}>
          По словам агронома, у старых деревьев ослабевает иммунитет, они подвергаются атакам различных паразитов.
        </Typography>
        <Typography variant="body1" component="div" marginTop={2} sx={{
        fontWeight: '500'
      }}>
          БИШКЕК, 1 сен —  <span style={{ fontWeight: '600' }}>Sputnik. </span> 
          В Бишкеке состарилось <span style={{ fontWeight: '600' }}>30</span> процентов деревьев, сообщил главный агроном "Бишкекзеленхоза" Жаныбек Жумалиев в эфире радио Sputnik Кыргызстан.
          На балансе муниципального предприятия числится свыше <span style={{ fontWeight: '600' }}>250</span> тысяч городских деревьев на <span style={{ fontWeight: '600' }}>832</span> гектарах земли.
        </Typography>
      </Grid>
    </Grid>
</Container>
    </>
  );
};

export default NewsAdvertisement;