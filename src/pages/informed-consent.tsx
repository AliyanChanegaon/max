import { Box, Button, Typography } from "@mui/material";
import { useEffect } from "react";
import { useFirebase } from "../context/firebase-context";
import { useNavigate, useParams } from "react-router-dom";

const InformedConsent = () => {
  const { setId } = useFirebase();

  const navigate = useNavigate();

  const { id } = useParams<{ id: string; url: string }>();

  useEffect(() => {
    if (id) {
      setId(id);
    }
  }, [id]);

  return (
    <Box
      sx={{
        height: "-webkit-fill-available",
        display: "grid",
        placeItems: "center",
        padding: "0px 10px"
      }}
    >
      <Box
        className="chat-container"
        sx={{
          alignSelf: "end",
          justifySelf: "center",
          width: "100%",
          maxWidth: { xs: "400px", sm: "80%" },
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center"
        }}
      >
        <Box mt={10} height="107px" width="80px">
          <img src="/assets/max-logo.svg" alt="max-logo" className="bounce-in-top" />
        </Box>
        <Typography
          width="fit-content"
          color="#005D98"
          fontWeight={500}
          fontSize="24px"
          lineHeight="1.10"
          fontFamily="InterDisplay"
        >
          Informed Consent
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
          Please be assured that all the information you provided will be kept confidential and will only be accessible to
          authorized personnel involved in the study. Your identity will be protected, and your personal information will not
          be disclosed without your explicit consent, except as required by law. Do you consent to share the information
          gathered?
        </Typography>
        <Box display={"flex"} width="100%">
          <Button
            sx={{
              width: "100%",
              borderRadius: "999px",
              fontSize: "14px",
              fontFamily: "InterDisplay",
              textTransform: "none",
              backgroundColor: "#0088DF"
            }}
            onClick={() => navigate(`/${id}/conversation`)}
            variant="contained"
          >
            I consent
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default InformedConsent;
