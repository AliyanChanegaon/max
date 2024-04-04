import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useFirebase } from "../context/firebase-context";
import { useParams } from "react-router-dom";

const SuccessPage = () => {
  const { setId } = useFirebase();

  const { id } = useParams<{ id: string; url: string }>();

  useEffect(() => {
    if (id) {
      setId(id);
    }
  }, [id]);

  return (
    <Box
      sx={{
        height: "100%",
        display: "grid",
        placeItems: "center",
        padding: "0px 10px"
      }}
    >
      <Box
        sx={{
          justifySelf: "center",
          width: "100%",
          maxWidth: { xs: "400px", sm: "80%" },
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center"
        }}
      >
        <Box height="107px" width="80px">
          <img src="/assets/success-status.svg" alt="max-logo" className="bounce-in-top" />
        </Box>
        <Typography
          width="fit-content"
          color="#005D98"
          fontWeight={500}
          fontSize="24px"
          lineHeight="1.10"
          fontFamily="InterDisplay"
        >
          Thank you!
        </Typography>

        <Typography
          textAlign={"center"}
          color="#6B7280"
          width="fit-content"
          fontWeight={600}
          fontSize="16px"
          lineHeight="23px"
          fontFamily="InterDisplay"
        >
          Thankyou for providing your consent. You can now safely close this application and end the call.
        </Typography>
      </Box>
    </Box>
  );
};

export default SuccessPage;
