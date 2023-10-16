import React from "react";
import Line from "../../images/Block-2(Line).png";
import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import CardStructure from "./CardStructure";
import "./index.css"
const useStyles = makeStyles((theme) => ({}));

export default function AboutUs() {
  const classes = useStyles();

  return (
    <Box className="Main3">
      <Grid container className="Div1">
        <Grid item style={{textAlign:"center"}}>
          <img src={Line} alt="" />
        </Grid>
        <Grid item>
          <Typography
            color={"#1E9AD3"}
            fontFamily={"Inter"}
            fontStyle={"normal"}
            fontWeight={600}
            lineHeight={"36px"}
            fontSize={"24px"}
          >
            About Us
          </Typography>
        </Grid>
        <Grid item>
          <img src={Line} alt="" />
        </Grid>
      </Grid>
      <div>
        <Typography
          color={"#1B2733"}
          textAlign={"center"}
          fontFamily={"Inter"}
          fontSize={"52px"}
          fontStyle={"normal"}
          fontWeight={700}
          lineHeight={"67.6px"}
        >
          Unleash Digital Innovation with
          <br/>
           Our Technology Expertise
        </Typography>
      </div>
      <div>
        <CardStructure />
      </div>
    </Box>
  );
}
