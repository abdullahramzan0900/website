import React from "react";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
function Message()
{
    return(
        <>
           <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Name"
         
        
        />
           <TextField
          required
          id="outlined-required"
          label="Last name"
         
        
        />
                
    
      

      </div>
      <div>
                
    
           <TextField
          required
          id="outlined-required"
          label="Last name"
         
        
        />
      </div>
      <TextField
    sx={{
        width: 700
    }}
    InputProps={{ sx: { height: 80 } }}
    placeholder="SX + InputProps"
/>
    
    
    </Box> 
        
        </>
    )
}
export default Message