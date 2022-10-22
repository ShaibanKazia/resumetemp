import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export const Skills = () => {
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
        sx={{ fontFamily: "Jost", fontWeight: "700", mt: 2 }}
      >
        Skills
        <hr style={{ width: "100%", mt: 100 }} />
      </Typography>
      <Stack direction="column">
        <Typography
          variant="subtitle2"
          sx={{ fontFamily: "Jost", fontWeight: 400 }}
        >
          Team Building
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ fontFamily: "Jost", fontWeight: 400 }}
        >
          Meeting Deadlines
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ fontFamily: "Jost", fontWeight: 400 }}
        >
          Punctuality{" "}
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ fontFamily: "Jost", fontWeight: 400 }}
        >
          Priotization
        </Typography>
      </Stack>
      {/* <Divider variant="inset"/> */}
    </Box>
  );
};
