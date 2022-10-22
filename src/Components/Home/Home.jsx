import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { Contact } from "./Contact";
import { Education } from "./Education";
import { Name } from "./Name";
import { Profile } from "./Profile";
import { Skills } from "./Skills";
import { WorkExp } from "./WorkExp";
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const contact = ["Home", "Phone", "Accounts", "linkedIn"];
// const contact = [{name:"Phone",icon: <PhoneIcon/>},
//                   {name:"Mail",icon:<MailIcon/>},
//                   {name:"Adress",icon:<HomeIcon/>},
//                   {name:"LinkedIn",icon:<LinkedInIcon/>}
//                 ];

const education = [
  "Enter your major",
  "Major goes here",
  "Enter your degree",
  "Degree goes here",
];

export const Home = (props) => {
  return (
    <Container maxWidth="md" >
      <Box sx={{ bgcolor: "#EDEFF1", height: "100vh" }}>
        <Grid container sx={{ height: "100vh" }}>
          <Grid item xs={4} sx={{ bgcolor: "#EDEFF1" }}>
            <Grid item xs={4}>
              <Box
                sx={{
                  bgcolor: "silver",
                  height: "10rem",
                  width: "10rem",
                  borderRadius: "50%",
                  ml: "35px",
                }}
              ></Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ bgcolor: "#EDEFF1" }}>
                <Contact contact={contact} />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ bgcolor: "#EDEFF1" }}
            >
              <Box sx={{ bgcolor: "#EDEFF1" }}>
                <Education education={education} />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ bgcolor: "#EDEFF1" }}>
                <Skills />
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={8} sx={{ bgcolor: "#FFFFFF" }}>
            <Grid item xs={12}>
              <Box sx={{ bgcolor: "#FFFFFF" }}>
                <Name />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ bgcolor: "#FFFFFF" }}>
                <Profile />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ bgcolor: "#FFFFFF" }}>
                <WorkExp />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
