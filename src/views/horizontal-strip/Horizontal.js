import React, { useState } from "react";
import "./index.css";
import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import Image1 from "../../images/horizontal-strip/h1.svg";
import Image2 from "../../images/horizontal-strip/h2.svg";
import Image3 from "../../images/horizontal-strip/h3.svg";
import Image4 from "../../images/horizontal-strip/h4.svg";
import Image5 from "../../images/horizontal-strip/h5.svg";

const useStyles = makeStyles((theme) => ({}));
export default function Horizontal() {
  const classes = useStyles();

  return (
    <div className="Main2">
      <div className="Inner">
        <div className="Image1">
          <img src={Image1} alt="" />
        </div>
        <div className="Image2">
          <img src={Image2} alt="" />
        </div>
        <div className="Image3">
          <img src={Image3} alt="" />
        </div>
        <div className="Image4">
          <img src={Image4} alt="" />
        </div>
        <div className="Image5">
          <img src={Image5} alt="" />
        </div>
      </div>
    </div>
  );
}
