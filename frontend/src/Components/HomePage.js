import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../Resources/images/logo.png';


function HomePage() {
    const location = useLocation();

    const [visibility, setVisibility] = useState(true);

    console.log(visibility);
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar elevation={1} position="static" sx={{background:"white"}}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <img src={logo} alt="Logo" style={{
                            width: "150px",
                            height: "60px"
                        }} />
                        <div style={{marginLeft:"55rem", margintop:'50px', width:'9rem'}}>
                        <Link to="/LoginPage">
                            {(visibility || (location.pathname === '/')) &&
                                (<Button variant="contained" size="large" onClick={() =>
                                    setVisibility(false)}
                                    >Log in</Button>)

                            }

                        </Link>
                        </div>
                        <div style={{marginLeft:"-1rem"  ,margintop:'50px', width:'9rem'}}>
                        <Link to="/SignUp">
                            <Button variant="contained" size="large">Sign up</Button>
                        </Link>
                        </div>

                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default HomePage
