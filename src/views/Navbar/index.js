import React from "react";
import "./index.css";
import Logo from "../../images/Logo.svg";
import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "../../images/magnifying-glass.png";

export default function index() {
  return (
    <Box>
      <Grid container className="Navbar">
        <Grid item className="Main" md={3} lg={3}>
          <img src={Logo} alt="Logo" />
        </Grid>
        <Grid md={5} lg={5}>
          <ul className="ListItems">
            <li>About us</li>
            <li>Blockchain</li>
            <li>Gaming</li>
            <li>Metaverse</li>
            <li>Data and AI</li>
            <li>Digital Transformation</li>
          </ul>
        </Grid>
        <Grid md={2} lg={2}>
          <Box className="Search">
            <img src={SearchIcon} width={30} height={30} alt="Search" />
          </Box>
        </Grid>
        <Grid md={2} lg={2}>
          <Box className="Contact">
            <Typography className="Contact-typo">Contact Us</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
