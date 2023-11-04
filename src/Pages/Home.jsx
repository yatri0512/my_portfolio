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
                        height: "95%",
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
                  marginTop={3}
               },
            }}>
               <Typography variant="h2" color="#27AE60" 
                   sx={{
                     "@media (max-width: 700px)": {
                        variant="h3",
                     },
                  }}>
                  Hi, I'm Yatri Doshi.
               </Typography>
               <Typography variant="h4"
                  sx={{
                     "@media (max-width: 700px)": {
                        variant="h5",
                     },
                  }}>
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
