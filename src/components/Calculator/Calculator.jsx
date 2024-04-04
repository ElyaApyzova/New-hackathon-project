import React from "react";
import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemAvatar,
  Avatar,
  ListItemText,
 Typography,
  Divider,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";
import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";


export const MuiSelect = () => {
    const [countries, setCountries] = useState<string[]>([])
    console.log({ countries })
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setCountries(typeof value === 'string' ? value.split(',') : value)
    }


const Calculator = () => {
  const navigate = useNavigate()
  return (
    <Container sx={{ marginBottom: "100px" }}>
      <Grid container spacing={4}>
        <Grid item xs={4}>
        <List>
            <ListItem disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    <ListItemAvatar>
                    <Avatar>
                    <KeyboardArrowRightIcon />
                    </Avatar>
                    </ListItemAvatar>
                    </ListItemIcon>
                <ListItemText primary='List item 1' />
                </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem>
            <ListItemIcon>
            <ListItemAvatar>
                    <Avatar>
                    <KeyboardArrowRightIcon />
                    </Avatar>
                    </ListItemAvatar>
                    </ListItemIcon>
                <ListItemText primary='List item 2' secondary='Secondary text' />
            </ListItem>
            <Divider />
            <ListItem>
            <ListItemIcon>
            <ListItemAvatar>
                    <Avatar>
                    <KeyboardArrowRightIcon />
                    </Avatar>
                    </ListItemAvatar>
                    </ListItemIcon>
                <ListItemText primary='List item 3' />
            </ListItem>
          </List>

          <Box width='250px'>
        <TextField label='Select country' 
        select value={countries} 
        onChange={handleChange}
        fullWidth
        SelectProps={{
            multiple: true
        }}
        size='small'
        color="secondary"
        helperText='Please select your country'
        error>
           <MenuItem value='KG'>Kyrgyzstan</MenuItem>
           <MenuItem value='US'>USA</MenuItem>
           <MenuItem value='GE'>Germany</MenuItem> 
        </TextField>
    </Box>
         {/* <List sx={{ 
              width: '100%',
              maxWidth: 300,
              borderRadius: 2,
              border: '2px solid',
              borderColor: '#C4C4C4',
              backgroundColor: '#FFFFFF',
            boxShadow: "2" }}>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <ListItemAvatar>
                    <Avatar  sx={{
                  width: "18px",
                  height: "18px",
                  backgroundColor: "#C8C8C8",
                }}>
              <KeyboardArrowRightIcon  sx={{width: '18px', height: '18px'}}
                onClick={() => navigate("/gallery")}
              />
              </Avatar>
              </ListItemAvatar>
              </ListItemIcon>
              <ListItemText  primary='Галерея наших работ'
                sx={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#6D6C6C"
                }}
              />
              </ListItemButton>
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
                onClick={() => navigate("/contact")}
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
                onClick={() => navigate("/feedback")}
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
            </List>*/}
          </Grid>
      </Grid>
    </Container>
  );
};

export default Calculator;
