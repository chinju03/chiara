import React, { useState } from "react";
import { Box, Button, Typography } from '@mui/material';
import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import SpaIcon from "@mui/icons-material/Spa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const linksArr = ["home", "diaries", "auth"];
const loggedInLinks = ["home", "diaries", "add", "profile"];

const Header = () => {

  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [value, setValue] = useState();
  return (
    
    <AppBar sx={{ bgcolor: "lightblue", position: "sticky", width :"100%"}}>
      <Toolbar>
      <Typography
                fontFamily={"Dancing Script, cursive"}
                fontWeight="bold"
                variant='h3'
                textAlign={"center"}
                width="100%"
                sx={{ position: "absolute", top: "0px", color: "#111115de", background: "lightblue", }}>
                CHIARA
                </Typography>
      
        <SpaIcon sx={{ color: "white",top: "10px" }} />
        <Tabs
          value={value}
          onChange={(e, val) => setValue(val)}
          sx={{ ml: "auto", textDecoration: "none" }}
        >
          {isLoggedIn ?
            loggedInLinks.map((link) => (
              <Tab
                LinkComponent={Link}
                to={`/${link === "home" ? "" : link}`}
                sx={{
                  textDecoration: "none",
                  ":hover": {
                    textDecoration: "underline",
                    textUnderlineOffset: "18px",
                  },
                }}
                key={link}
                label={link}
              />
            )) :
            linksArr.map((link) => (
              <Tab
                LinkComponent={Link}
                to={`/${link === "home" ? "" : link}`}
                sx={{
                  textDecoration: "none",
                  ":hover": {
                    textDecoration: "underline",
                    textUnderlineOffset: "18px",
                  },
                }}
                key={link}
                label={link}
              />
            ))}
        </Tabs>
      </Toolbar>
    </AppBar>
    
  );
};

export default Header;
