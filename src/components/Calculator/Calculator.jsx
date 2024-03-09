import React from "react";
import {
  Container,
  Grid,
  List,
  ListItem,
 Typography,
  Divider,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";


const Calculator = () => {
  return (
    <Container sx={{ marginBottom: "100px" }}>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <List
            aria-label="mailbox folders"
            sx={{  p: 0,
              width: '100%',
              maxWidth: 280,
              borderRadius: 2,
              border: '2px solid',
              borderColor: '#C4C4C4',
              backgroundColor: '#FFFFFF',
            boxShadow: "2" }}
          >
            <ListItem>
              <KeyboardArrowRightIcon
                sx={{
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  backgroundColor: "#C8C8C8",
                  marginRight: "12px",
                }}
              />
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#6D6C6C"
                }}>Галерея наших работ
              </Typography>
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <KeyboardArrowRightIcon
                sx={{
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  backgroundColor: "#C8C8C8",
                  marginRight: "12px",
                }}
              />
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#6D6C6C"
                }}>Наши контакты
              </Typography>
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <KeyboardArrowRightIcon
                sx={{
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  backgroundColor: "#C8C8C8",
                  marginRight: "12px",
                }}
              />
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#6D6C6C"
                }}>Отзывы
              </Typography>
            </ListItem>
            <Divider component="li" />
            <ListItem sx={{ backgroundColor: "#00BF4D", borderBottomLeftRadius: "4px", borderBottomRightRadius: "4px"
          }}>
              <KeyboardArrowRightIcon
                sx={{
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  backgroundColor: "#FFFFFF",
                  marginRight: "12px",
                }}
              />
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#FFFFFF"
                }}>Калькулятор
              </Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid
          item
          xs={6}>
         <List
            aria-label="mailbox folders"
            sx={{  p: 0,
              width: '100%',
              maxWidth: 820,
              height: 183,
              borderRadius: 2,
              border: '2px solid',
              borderColor: '#C4C4C4',
              backgroundColor: '#FFFFFF',
            boxShadow: "2" }}>
          <Typography component="div" sx={{ fontSize: "18px", fontWeight: "600", color: "#6D6C6C", textAlign: "center", marginTop: "10px"}}>Онлайн калькулятор нейтрализации углерода</Typography>
          </List>
          </Grid>
      </Grid>
    </Container>
  );
};

export default Calculator;
