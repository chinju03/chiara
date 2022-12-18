import ReactCurvedText from "react-curved-text";

import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react'
const MyComponent = () => {
  return (
    <ReactCurvedText
      text="ReactScriptCom"
    />
  );
};
const Home = () => {
    return (
        <Box position={"relative"} width="100%" height="100vh" >
            <img id="image" src="https://thumbs.dreamstime.com/b/blogging-blogger-freelance-creative-writing-copy-writer-content-management-job-journalist-flat-cartoon-character-illustration-138916445.jpg " width="700" height="700"/>
            <img id="image" src="https://o.remove.bg/downloads/3c0c3f40-b341-4e46-aef4-12d4c1b6143f/women-removebg-preview.png" width="500" height="500"/>

            <Typography
                 fontFamily={"quicksand"}
                fontWeight=""
                variant='h3'
                textAlign={"center"}
                width="100%"
                sx={{ position: "absolute", top: "10px", color: "#111115de", background: "#pink" }}
                >
                Dare to live the life you have always wanted
            </Typography>
            <Box width="100%" height="30%" display={"flex"} flexDirection="column">
                <Typography
                    fontFamily={"Dancing Script,cursive" }
                    fontWeight="bold"
                    textAlign={"center"}
                    variant="h4"
                    padding={1}>
            <Box position={"relative"} width="100%" height="50vh" bgcolor={"lightblue"} >        
            <Typography
                fontFamily={"quicksand,cursive "}
                fontWeight=""
                variant='h2'
                textAlign={"center"}
                width="100%"
                sx={{ position: "absolute", top: "0px", color: "#111115de", background: "lightblue" }}>
                Welcome to Chiara
                </Typography>
            <Typography   
                fontFamily={"quicksand "}
                fontWeight=""
                variant='h5'
                textAlign={"center"}
                width="100%"
                sx={{ position: "absolute", top: "60px", color: "#111115de", background: "lightblue" }}>
                ~~~The answers to women~~~
                </Typography>  
                 
            <Typography   
                fontFamily={"quicksand "}
                fontWeight=""
                variant='h5'
                textAlign={"center"}
                width="100%"
                sx={{ position: "absolute", top: "120px", color: "#111115de", background: "lightblue" }}>
                Dream is not that which you see while sleeping, it is something that does not let you sleep.
                                                                                         ~APJ Abdul Kalam.
                Wanna tell us a story !?... Wanna express your trapped emotion ?! wanna read those struggles and innovation.

                Don't you worry,here is chiara to help you out in expressing and a;so in reading the exceptional stories.
                </Typography>  
                </Box>   
                    Let us through your experience ...
                </Typography>
            
            <Box margin="auto">
                    <Button variant="outlined" sx={{ mr: 2 }}>
                        Share your Story
                    </Button>
                    <Button LinkComponent={Link}
                        to="/diaries"
                        variant="contained"
                        sx={{ ml: 2 }}>
                        View Diaries
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Home