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
import axios from "axios";



import TextareaAutosize from "@mui/base/TextareaAutosize";
import { green } from "@mui/material/colors";
import Contact from "./Contact";
import { GridColumnsPanel } from "@mui/x-data-grid";

function Contact_detail() {
  const [service, Setservice] = React.useState("");
  const [name,Setname]=useState();
  const [email,Setemail]=useState();
  const [message,setMessage]=useState();
  useState(()=>{
    axios.get("http://localhost:3000/contactUs").then(function (response) {
      console.log(response,"aa");
   
    });
  },[])
  
function handleChange(e){
Setname(e.target.value);
console.log(e.target.value)
}
function handleChange2(e){
  Setemail(e.target.value);
  console.log(e.target.value)
  }
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



  const handleChange3 = (event) => {
    Setservice(event.target.value);
    console.log(event.target.value)
  };
  const handleChange4 = (event) => {
    setMessage (event.target.value);
    console.log(event.target.value);
  };
  function PostData()
{
  axios.post("http://localhost:3000/contactUs",{
    "name":name,
    "email":email,
    "service":service,
    "message":message

  })

  setMessage("");
  Setname("");
  Setemail("");
  Setservice("");
}

  return (
    <>
      {/* <div className="contact_background"></div> */}
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
             type="text"
             id="name"
             name="name"
             onChange={handleChange}
             value={name}
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
                id="email"
                name="email"
                onChange={handleChange2}
                value={email}
                required
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
                value={service}
                label="Select Services"
                onChange={handleChange3}
              >
                <MenuItem value={"Cloud Services"}>Cloud Services</MenuItem>
                <MenuItem value={"ERP Integration"}>ERP Integration</MenuItem>
                <MenuItem value={"Digital Information"}>
                  Digital Information
                </MenuItem>
                <MenuItem value={"Salesforce"}>Salesforce</MenuItem>
              </Select>
            </FormControl>

            <textarea 
             value={message}
       
             onChange={handleChange4}
            
            placeholder="Drop a Message" className="texttt" style={{
             paddingLeft:'13px',
             paddingTop:'10px',
             fontSize:'16px',
             fontFamily:'roboto',
             background:'transparent'
            }} >
  
</textarea>
        

            <Button onClick={()=>{
              PostData()
            }}
              style={{
                width: 100,
                alignSelf: "center",
                color: "#229958",
                border:'1px solid #229958',
                fontFamily:'roboto',
                textTransform:'none'
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
