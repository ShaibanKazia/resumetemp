import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export const Name = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        ml: "50px",
      }}
    >
      <Stack direction="column">
        <Typography
          variant="h3"
          sx={{ fontFamily: "Jost", fontWeight: "700", pt: 5   }}
        >
          Mia Williams
        </Typography>
        <Typography variant="h6" sx={{ fontFamily: "Jost", fontWeight: 400 }}>
          {" "}
          Professional Title
        </Typography>
      </Stack>
      {/* <Divider variant="inset"/> */}
    </Box>
  );
};
