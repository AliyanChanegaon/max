import { Box, Typography } from "@mui/material";
import React from "react";

const HeaderMessage: React.FC<{ heading?: string; key: string }> = ({ heading, key }) => {
  return (
    <>
      {Boolean(heading) ? (
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
            padding: "5px 0px",
            bgcolor: "#F5F5F5",
            marginBottom: "-5px"
          }}
          key={key}
        >
          <Typography
            sx={{
              fontFamily: "InterDisplay",
              fontSize: "14px",
              fontWeight: "500",
              color: "#003F66"
            }}
          >
            {heading}
          </Typography>
        </Box>
      ) : null}
    </>
  );
};

export default HeaderMessage;
