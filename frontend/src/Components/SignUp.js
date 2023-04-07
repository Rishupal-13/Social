import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import "./style.css"


export default function TextFieldSizes() {
    return (
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }} id="Box">
            <Box
                className="Box"
                component="form"
                sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 450,
                    height: 500,
                    backgroundColor: 'white',
                    "& .MuiTextField-root": { m: 1, width: "25ch" },
                    marginTop: '3rem'
                }}
                noValidate
                autoComplete="off"

            >
                <div style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                    <Typography variant="h4" gutterBottom sx={{ marginTop: "90px", paddingLeft: "8px" }}>
                        Sign up
                    </Typography>
                    <div id="Mukul" style={{ marginTop: '30px' }}>
                        <TextField
                            label="First Name"
                            id="outlined-size-small"
                            size="small"

                        />
                        <TextField
                            label="Last Name"
                            id="outlined-size-small"
                            size="small"

                        />
                    </div>
                    <div id="Mukul" >
                        <TextField style={{ width: '60rem' }}
                            label="User Name"
                            id="outlined-size-small"
                            size="small"

                        />
                    </div>
                    <div id="Mukul">
                        <TextField style={{ width: '60rem' }} label="Password" id="outlined-size-small" size="small"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Button sx={{

                                            textTransform: 'lowercase'

                                        }} size="small" paddingLeft="100px"><Typography>show</Typography></Button>
                                    </InputAdornment>
                                ),
                            }} />

                    </div>
                    <Typography variant="h4" gutterBottom sx={{ fontSize: "1rem", color: '#1976D2', paddingLeft: "10px", fontWeight: '550' }}>
                        Forgot Password?
                    </Typography>
                </div>
                <div id="Mukul" >
               
                <Button variant="contained" size="large"
                        sx={{ marginTop: '50px',width: '8rem', height: '40px', marginLeft:'18px' }}
                    >Log in</Button>
                    <Button variant="contained" size="large"
                        sx={{ marginTop: '50px',width: '8rem', height: '40px', marginLeft:'9.9rem' }}
                    >Next</Button>
                    
                </div>


            </Box>
        </div>
    );
}
