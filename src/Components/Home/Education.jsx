import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export const Education = (props) => {
  return (
    <Box
      sx={{
        backgroundColor: "#EDEFF1",
        justifyContent: "center",
        ml: "50px",
        pt: "40px",
      }}
    >
      <Typography
        variant="h6"
        sx={{ fontFamily: "Jost", fontWeight: "700" }}
      >
        Education
        <hr style={{ width: "100%", mt: 100 }} />
      </Typography>
      <Stack direction="column">
        {props.education.map((value) => (
          <Typography variant="subtitle2"  sx={{ fontFamily: "Jost", fontWeight: 400 }}>{value}</Typography>
        ))}
        {/* <Typography variant="caption"> Enter Your Major</Typography>
      <Typography variant="caption"> Major goes here</Typography>
      <Typography variant="caption"> Enter your degree</Typography>
      <Typography variant="caption"> degree goes here</Typography> */}
      </Stack>
      {/* <Divider variant="inset"/> */}
    </Box>
  );
};
