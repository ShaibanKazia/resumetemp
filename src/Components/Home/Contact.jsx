import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles(theme=>({
//   typo:{

//   }
// }))
// const contact = ["Phone", "Gmail","Adress","LinkedIn"]
export const Contact = (props) => {
  return (
    // const classes=useStyles();
    <Box
      sx={{
        backgroundColor: "#EDEFF1",
        justifyContent: "center",
        ml: "50px",
      }}
    >
      <Typography variant="h6" sx={{fontFamily:"Jost",fontWeight:"700",mt:2}}>
        Contact
        <hr style={{ width: "100%", mt: 100 }} />
      </Typography>

      <Stack direction="column">
        {props.contact.map((value) => (
          <Typography
            variant="subtitle2"
            sx={{ fontFamily: "Jost", fontWeight: 400 }}
          >
            {" "}
            {value}
          </Typography>
        ))}
        {/* <Typography variant="caption"> Phone</Typography>
        <Typography variant="caption"> Gmail</Typography>
        <Typography variant="caption"> Adress</Typography>
        <Typography variant="caption"> Linkedin</Typography> */}
      </Stack>
      {/* <Divider variant="inset"/> */}
    </Box>
  );
};
