import { Box, Typography } from "@mui/material";

const LandingScreen = () => {
  return (
    <Box
      sx={{
        // border: "3px solid red",
        height: "100%",
        marginTop: { xs: "0px", sm: "20px" }
      }}
    >
      <Box className={"text-focus-in"} position="absolute" right={0} zIndex={-2}>
        <img src="/assets/pattern-one.svg" alt="pattern-one" />
      </Box>
      <Box className={"text-focus-in"} position="absolute" left={0} top={550} zIndex={-2}>
        <img src="/assets/pattern-two.svg" alt="pattern-two" />
      </Box>

      <Box
        //   border="1px solid green"
        height="100%"
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center"
        }}
      >
        <Box className="text-focus-in" mt={6}>
          <img src="/assets/max-logo.svg" alt="max-logo" />
          <Typography
            sx={{
              fontSize: "16px",
              lineHeight: "19px",
              letterSpacing: "0em",
              color: "#8F8F8F",
              marginTop: 1
            }}
          >
            A medical Information Agent <br /> by
            <span style={{ textDecoration: "underline" }}> tCognition</span>
          </Typography>
        </Box>
      </Box>

      <Box width="full" mt={5} display="grid"></Box>
    </Box>
  );
};

export default LandingScreen;
