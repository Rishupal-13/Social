import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import "./style.css"


export default function TextFieldSizes(visibility) {
    console.log(visibility)
    return (
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }} id="Box">
            <Box 
                className="Box"
                component="form"
                sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 300,
                    height: 400,
                    backgroundColor: 'white',
                    "& .MuiTextField-root": { m: 1, width: "25ch" }
                }}
                noValidate
                autoComplete="off"

            >
                <Typography variant="h4" gutterBottom  sx ={{marginTop:"90px", paddingLeft:"41px"}}>
                    Log in
                </Typography>
                <div id="Mukul" style={{ marginTop: '30px' }}>
                    <TextField 
                        label="User Name"
                        id="outlined-size-small"
                        size="small"

                    />
                </div>
                <div id="Mukul">
                    <TextField label="Password" id="outlined-size-small" size="small"
                     InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <Button sx={{
                                
                                    textTransform: 'lowercase'
            
                            }} size="small" paddingLeft="100px"><Typography>show</Typography></Button>
                          </InputAdornment>
                        ),
                      }}/>
            
                </div>
                <div id="Mukul" style={{ marginTop: '30px' }}>
                    <Button color="primary" variant="contained"
                    sx={{
                        borderRadius:'50px',
                        minWidth:'215px'
                    }}
                    >Continue</Button>
                </div>

            </Box>
        </div>
    );
}
