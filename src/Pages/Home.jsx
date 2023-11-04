import React from "react";
import { Container, Box, Typography } from "@mui/material";
import Typewriter from "typewriter-effect";
import logo from "../Images/logo.png";
const Home = () => {
   return (
      <Container width="100%">
         <Box
            display="grid"
            gridTemplateColumns="repeat(2, 1fr)"
            gridGap="2rem"
            marginTop="3rem"
            sx={{
               "@media (max-width: 700px)": {
                  display: "inline-block",
               },
            }}>
            <Box
               component="img"
               sx={{
                  display: {
                     height: "95%",
                     width: "85%",
                     padding: "5px",
                     objectFit: "cover",
                     borderRadius: "15px",
                     "@media (max-width: 500px)": {
                        height: "80%",
                        width: "70%",
                     },
                  },
               }}
               alt="The house from the offer."
               src={logo}
            />
            <Box padding={5} marginTop={10}  
               sx={{
               "@media (max-width: 700px)": {
                  marginTop:'1'
               },
            }}>
               <Typography variant="h3" color="#27AE60" >
                  Hi, I'm Yatri Doshi.
               </Typography>
               <Typography variant="h5">
               <Typewriter
                     options={{
                        strings: [
                           "I'm from Ahmedabad.", 
                           "I’m a frontend developer",
                           "I love to create beautiful and functional websites.",
                           "Thank You for Visiting...",
                        ],
                        autoStart: true,
                        loop: true,
                     }}
                  />
               </Typography>
            </Box>
         </Box>
      </Container>
   );
};

export default Home;
