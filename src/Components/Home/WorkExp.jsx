import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles(theme=>({
//   typo:{

//   }
// }))
export const WorkExp = () => {
  return (
    // const classes=useStyles();
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        ml: "50px",
        pt: "70px",
      }}
    >
      <Typography
        variant="h5"
        sx={{ fontFamily: "Jost", fontWeight: "700", mt: 2 }}
      >
        Work Experience
        <hr style={{ width: "100%", mt: 100 }} />
      </Typography>
      <Stack direction="column">
        <Typography
          variant="subtitle2"
          sx={{ fontFamily: "Jost", fontWeight: 400 }}
        >
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </Typography>
      </Stack>
      {/* <Divider variant="inset"/> */}
    </Box>
  );
};
