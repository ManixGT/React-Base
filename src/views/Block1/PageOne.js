import React, { useState } from "react";
import "./index.css";
import Block1 from "../../images/Block-1.png";
import Logo from "../../images/Block-1(title).svg";
import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({}));

export default function PageOne() {
  const classes = useStyles();
  return (
    <Box className="Background">
      <Grid container className="MainDiv">
        <Grid item lg={6} className="InnerDiv">
          <div>
            <img src={Logo} alt="" />
          </div>
          <div className="Heading">
            <Typography
              color={"#1b2733"}
              fontFamily={"Inter"}
              fontSize={"48px"}
              fontWeight={600}
              lineHeight={"45px"}
            >
              Unlocking Tomorrow's Potential. Seamless Solutions for:
              Blockchain, Gaming, Data, AI, and Metaverse Innovation
            </Typography>
          </div>
          <div className="SubHeading">
            <Typography
              fontFamily={"Inter"}
              fontSize={"20px"}
              fontStyle={"normal"}
              lineHeight={"36px"}
            >
              Empowering individuals to navigate the intricate labyrinth of
              career choices, our expert career counseling services ensure a
              clear, fulfilling path t o success and personal growth in a
              rapidly changing world.
            </Typography>
          </div>
          <div className="ButtonPair">
            <div className="Button1">
              <Typography
                className="TypographyText1"
                color={"#fff"}
                textAlign={"center"}
                fontFamily={"Inter"}
                fontSize={"22px"}
                fontStyle={"normal"}
                fontWeight={600}
                lineHeight={"33px"}
              >
                For Services
              </Typography>
            </div>
            <div className="Button2">
              <Typography
                className="TypographyText2"
                color={"#fff"}
                textAlign={"center"}
                fontFamily={"Inter"}
                fontSize={"22px"}
                fontStyle={"normal"}
                fontWeight={600}
                lineHeight={"33px"}
              >
                For Career
              </Typography>
            </div>
          </div>
        </Grid>
        {/* <Grid item>
          <img src={Block1} alt="" />
        </Grid> */}
      </Grid>
    </Box>
  );
}
