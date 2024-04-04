import { Box, Typography } from "@mui/material";
import React from "react";
// import { useFontSize } from "../../context/font-size-context";

const UserMessage: React.FC<{ title?: string; fontSize: string }> = ({ title, fontSize }) => {
  //   const { fontSize } = useFontSize();
  return (
    <>
      {Boolean(title) ? (
        <Box
          sx={{
            backgroundColor: "#0088DF",
            alignSelf: "flex-end",
            width: "fit-content",
            padding: "10px 12px",
            color: "white",
            borderRadius: "8px",
            margin: "0px 15px"
          }}
        >
          <Typography fontSize={fontSize} fontFamily="InterDisplay, sans-serif" fontWeight={400}>
            {title}
          </Typography>
        </Box>
      ) : null}
    </>
  );
};

export default UserMessage;
