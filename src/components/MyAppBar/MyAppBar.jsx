import React from "react";
import {
  AppBar,
  Toolbar,
  InputBase,
  Typography,
  Link,
  InputAdornment,
  Stack,
} from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link as RouterLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const MyAppBar = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: " #fff", boxShadow: "none", marginTop: "30px" }}
    >
      <Toolbar style={{ justifyContent: "flex-end" }}>
        <div>
          <div>
            <InputBase
              sx={{
                borderColor: "#A0D206",
                borderWidth: "1px",
                borderRadius: "25px",
                paddingLeft: "10px",
                fontSize: "14px",
                "&:hover": { borderColor: "#00821E" }
              }}
              placeholder="Поиск"
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon style={{ color: "black", width: "17px", height: "17px" }} />
                </InputAdornment>
              }
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </div>
        <div style={{ marginLeft: "50px" }}>
          <Typography variant="body1" component="div">
            <Stack
              direction="row"
              spacing={0}
              marginRight={12}
              sx={{ fontSize: "16px", display: { xs: "none", md: "flex" } }}
            >
              <Link
                component={RouterLink}
                to="#"
                sx={{ textDecoration: "none", color: "#0E0E0E" }}
              >
                Войти
              <ArrowForwardIosIcon 
                edge="start"
                aria-label="arrow"
                sx={{ width: "12px", height: "12px", marginLeft: "2px" }}
              />
              </Link>
            </Stack>
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;
