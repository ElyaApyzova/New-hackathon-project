import React from "react";
import {
  Container,
  TextField,
  Button,
  Link,
  IconButton,
  Typography,
  Grid,
  Stack,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import Create from "../../assets/create.png";
import Group211 from "../../assets/Group 211.png";
import Group212 from "../../assets/Group 212.png";
import Group213 from "../../assets/Group 213.png";

const LoginContainer = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Create})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: 'space-around'
      }}
    >
    <Container 
    sx={{
      display: "flex",
      justifyContent: 'space-around'
    }}
    >
      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: "rgba(236, 235, 235, 0.15)",
          padding: "24px",
          borderRadius: "8px",
          display: "flex",
          position: "relative",
          bottom: "100px",
          flexDirection: "column",
        }}
      >
        <Grid>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "end",
            }}
          >
            <IconButton>
              <CancelIcon />
            </IconButton>
          </div>
          <TextField
            sx={{
              backgroundColor: "rgba(239, 239, 239, 1)",
              margin: "8px",
              width: "70%", 
            }}
            label="Телефон"
            variant="outlined"
          />
          <TextField
            sx={{
              backgroundColor: "rgba(239, 239, 239, 1)",
              margin: "8px",
              width: "70%",
            }}
            label="Пароль"
            variant="outlined"
            type="password"
          />
          <span>
            <Button
              sx={{
                backgroundColor: "#A0D206",
                color: "#FFFFFF",
                margin: "20px",
                width: "50%",
              }}
              variant="contained"
            >
              Войти
            </Button>
            <Link href="#" variant="body2" sx={{ margin: "8px" }}>
              Не помню пароль
            </Link>
          </span>
        </Grid>
      </Container>
      <Container 
      sx={{
        marginTop:"6%",
        marginLeft:'7%',
      }}
      >
        <Grid item xs={12} sm={4}>
              <Stack  sx={{  fontSize: '18px',  display: { xs: 'none', md: 'flex' }}}> 
                <Stack direction='row' spacing={1}  marginRight={12}   sx={{    display: { xs: 'none', md: 'flex' }}}>
                   <img src={Group211}  edge='start'  aria-label="logo" sx={{ width: '16px', height: '16px', }}      />
                   <Link href="#" color="inherit" variant="body2"sx={{  marginTop:'-10px', textDecoration: 'none', color:'white',fontSize: '16px', paddingTop:'1rem'   }}>
                   Забота об экологии и окружающей среде
                  </Link>
                </Stack>
                <br />
                <Stack direction='row' spacing={1}  marginRight={12}   sx={{  fontSize: '18px',  display: { xs: 'none', md: 'flex' }}}>
                   <img src={Group212}  edge='start'  aria-label="logo" sx={{ width: '17px', height: '16px'}}      />
                   <Link href="#" color="inherit" variant="body2"sx={{  marginTop:'-10px', textDecoration: 'none',color:'white' ,fontSize: '16px', paddingTop:'1rem'   }}>
                   Возможность посадить дерево онлайн
                  </Link>
                  </Stack>
                <br />

                <Stack direction='row' spacing={1}  marginRight={12}   sx={{  fontSize: '18px',  display: { xs: 'none', md: 'flex' }}}>
                   <img src={Group213}  edge='start'  aria-label="logo" sx={{ width: '17px', height: '16px'}}      />
                   <Link href="#" color="inherit" variant="body2"sx={{  marginTop:'-10px', textDecoration: 'none',color:'white',fontSize: '16px', paddingTop:'1rem'   }}>
                   Один дерево - вклад в целый лес
                  </Link>
                  </Stack>
                </Stack>
              </Grid>
      </Container>
      </Container>
    </div>
  );
};

export default LoginContainer;
