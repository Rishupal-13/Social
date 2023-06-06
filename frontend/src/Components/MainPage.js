import React from 'react'
import { makeStyles } from '@mui/styles';
import { Carousel } from "react-responsive-carousel";
import { Button , Typography} from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css";



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin: "auto",
      marginTop: "10px",
      maxWidth: "1200px",
    },
    carousel: {
      maxHeight: "400px",
      width: "100%",
      margin: "auto",
    },
    slide: {
      height: "500px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    slide1: {
      backgroundImage: `url(${"https://source.unsplash.com/random"})`,
    },
    slide2: {
      backgroundImage: `url(${"https://source.unsplash.com/random"})`,
    },
    slide3: {
      backgroundImage: `url(${"https://source.unsplash.com/random"})`,
    },
    button: {
      marginTop: "50px",
    },
  }));
  

  
  
  
function MainPage() {
    const classes = useStyles();

  return (
    <div className={classes.root}>
        <Carousel className={classes.carousel} showThumbs={false}>
          <div className={`${classes.slide} ${classes.slide1}`}>
            <Typography variant="h2" component="h2" color="inherit">
              Welcome to my website
            </Typography>
          </div>
          <div className={`${classes.slide} ${classes.slide2}`}>
            <Typography variant="h2" component="h2" color="inherit">
              Explore our Products
            </Typography>
            <Button variant="contained" color="primary" className={classes.button}>
              Shop Now
            </Button>
          </div>
          <div className={`${classes.slide} ${classes.slide3}`}>
            <Typography variant="h2" component="h2" color="inherit">
              Contact us
            </Typography>
            <Button variant="contained" color="primary" className={classes.button}>
              Get in touch
            </Button>
          </div>
        </Carousel>
      </div>
  )
}

export default MainPage