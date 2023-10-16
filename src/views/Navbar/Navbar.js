import React, { useState } from "react";
import "./index.css";
import Logo from "../../images/Logo.png";
import {
  Box,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchIcon from "../../images/magnifying-glass.png";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  input: {
    "& .MuiFormControl-root MuiTextField-root css-1u3bzj6-MuiFormControl-root-MuiTextField-root":
      {
        position: "initial !important",
      },
    "& .MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-formControl MuiInputBase-sizeSmall MuiInputBase-adornedStart makeStyles-input-1 css-1q6at85-MuiInputBase-root-MuiOutlinedInput-root":
      {
        position: "inherit !important",
        paddingLeft: "0px !important",
      },
    "& .css-1q6at85-MuiInputBase-root-MuiOutlinedInput-root": {
      position: "inherit !important",
      paddingLeft: "0px !important",
    },
    "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
      position: "fixed !important",
    },
    "& .MuiOutlinedInput-notchedOutline css-1d3z3hw-MuiOutlinedInput-notchedOutline":
      {
        position: "fixed !important",
      },
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const listItems = [
    "About us",
    "Blockchain",
    "Gaming",
    "Metaverse",
    "Data and AI",
    "Digital Transformation",
  ];

  const [search, setSearch] = useState("");

  const handleSearchClick = () => {
    // Handle search functionality here
    console.log("Search clicked:", search);
  };

  return (
    <Box className="Linear">
      <Grid container className="Navbar">
        <Grid item className="Main">
          <img src={Logo} alt="Logo" />
        </Grid>
        <Grid item>
          <ul className="ListItems">
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Grid>
        <Grid item className="Search">
          <TextField
            placeholder="Search name..."
            variant="outlined"
            size="small"
            name="firstName"
            inputProps={{ maxLength: 256 }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ paddingLeft: "0px !important" }}
            InputProps={{
              className: classes.input,
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton onClick={handleSearchClick}>
                    <img
                      style={{ paddingRight: "15px" }}
                      src={SearchIcon}
                      width={30}
                      height={30}
                      alt="Search"
                    />
                  </IconButton>
                </InputAdornment>
              ),
              style: { border: "none", paddingLeft: "0px !important" },
            }}
          />
        </Grid>
        <Grid item>
          <Box className="Contact">
            <Typography className="Contact-typo">Contact Us</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
