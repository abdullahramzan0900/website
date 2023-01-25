import React from "react";
import "./Contact.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Stack } from "@mui/system";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Textarea from '@mui/joy/Textarea';
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";


import TextareaAutosize from "@mui/base/TextareaAutosize";
import { green } from "@mui/material/colors";
import Contact from "./Contact";

function Contact_detail() {
  const [age, setAge] = React.useState("");

  const theme = createTheme({
    breakpoints: {
      values: {
        xxs: 0, // small phone
        xs: 300, // phone
        sm: 600, // tablets
        md: 900, // small laptop
        lg: 1200, // desktop
        xl: 1536 // large screens
      }
    }
  });


  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <div className="contact_background"></div>
      <div className="contact_detail">
        <div className="contact_detail_1">
          <h1 className="Contact_detail_h1">Contact Us</h1>
          <hr className="Contact_detail_line"></hr>
          <p className="Contact_detail_p">
            We are all you need.Let us know how can we help by getting in touch
          </p>
        </div>

        <div className="contact_detail_2">
          <div className="contact_detail_2_inner">
            <h1 className="contact_detail_2_inner_h1">Leave Us a Message</h1>
            <p className="contact_detail_2_inner_p">
              kindly respond filling this form
            </p>
          </div>
          <Stack
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "45ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              sx={{
                "& .MuiInputLabel-root": { color: "" }, //styles the label
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": { borderColor: "#229958" },
                },
              }}
              label="Enter Your Name"
              variant="outlined"
            />
             <ThemeProvider theme={theme}>

            <TextField
              sx={{
                  "& .MuiInputLabel-root": { color: "" }, //styles the label
                  "& .MuiOutlinedInput-root": {
                      "& > fieldset": { borderColor: "#229958" },
                    },
                }}
                label="Enter Your Email"
                variant="outlined"
                />
                </ThemeProvider>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Select Service
              </InputLabel>
              <Select
                // IconComponent={() => <ArrowDropDownIcon style={{marginRight:10,pointerEvents:'none'}}/>}
                labelStyle={{ color: "#229958" }}
                sx={{
                  color: "black",
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "#229958",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "black",
                  },
                  ".MuiSvgIcon-root ": {
                    fill: "#229958 !important",
                  },
                }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Select Services"
                onChange={handleChange}
              >
                <MenuItem value={"Cloud Services"}>Cloud Services</MenuItem>
                <MenuItem value={"ERP Integration"}>ERP Integration</MenuItem>
                <MenuItem value={"Digital Information"}>
                  Digital Information
                </MenuItem>
                <MenuItem value={"Salesforce"}>Salesforce</MenuItem>
              </Select>
            </FormControl>

            <textarea  placeholder="Drop a message" className="texttt" style={{

 paddingLeft:'20px',
 paddingTop:'10px'

            }} >
  
</textarea>
        

            <Button
              style={{
                width: 100,
                alignSelf: "center",
                color: "#229958",
                border:'1px solid #229958',
                fontFamily:'roboto'
              }}
              variant="submit"
            >
             Submit
            </Button>
          </Stack>
        </div>
      </div>
      <Contact />
    </>
  );
}
export default Contact_detail;
