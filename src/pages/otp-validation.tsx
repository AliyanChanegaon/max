import { Box, Typography } from "@mui/material";
import { OtpField } from "../components/otp-fields/otp-field";
import { useEffect, useState } from "react";
import { useFirebase } from "../context/firebase-context";
import { useNavigate, useParams } from "react-router-dom";

const OtpValidation = () => {
  const { userData, setId } = useFirebase();
  const { verification_code, caller_id } = userData || {};

  const [otp, setOtp] = useState<string | undefined>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const [isInvalid, setIsInvalid] = useState<boolean>(false);
  const navigate = useNavigate();

  const { id, url } = useParams<{ id: string; url: string }>();

  const handleButtonClick = () => {
    if (otp && otp.length === 3) {
      const apiEndpoint = `https://${url ? url : "74f4-35-188-49-12.ngrok-free.app"}/validation`;
      const data = { caller_id, validation_code: otp, call_id: id };

      fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then((response) => response.json())
        .then((data) => {
          if (data?.message === "Valid") {
            setIsValid(true);
            setIsInvalid(false);
            setTimeout(() => {
              navigate(`/${id}/conversation`); // Navigate to the next page
            }, 2000);
          } else {
            setIsValid(false);
            setIsInvalid(true);
          }
          console.log(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  useEffect(() => {
    handleButtonClick();
  }, [otp]);

  useEffect(() => {
    if (id) {
      setId(id);
    }
  }, [id]);

  useEffect(() => {
    setOtp(`${verification_code ?? ""}`);
  }, [verification_code]);

  return (
    <Box
      sx={{
        height: "-webkit-fill-available"
      }}
    >
      <Box sx={{ height: "-webkit-fill-available", display: "grid" }}>
        <Box
          sx={{
            height: "-webkit-fill-available",
            alignSelf: "end",
            justifySelf: "center",
            margin: "20px",
            width: "85%",
            maxWidth: "400px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            alignItems: "center"
          }}
        >
          <Box mt={10} height="107px" width="80px">
            <img src="/assets/max-logo.svg" alt="max-logo" className="bounce-in-top" />
          </Box>

          <Box mt={3} display="flex" flexDirection="column" alignItems="center" gap={2.5}>
            <OtpField setOtp={setOtp} verificationCode={`${verification_code}` || ""} isInvalid={isInvalid} />

            {isValid && (
              <Box display="flex" gap={0.5} justifyContent="center">
                <img src="/assets/done.svg" alt="done-sign" />
                <Typography color="green" fontFamily="InterDisplay">
                  Number verified
                </Typography>
              </Box>
            )}

            {isInvalid && (
              <Typography color="red" fontFamily="InterDisplay">
                Invalid number. Please verify again.
              </Typography>
            )}

            <Typography
              width="fit-content"
              color="#0088DF"
              fontWeight={500}
              fontSize="14px"
              borderBottom="1px solid"
              lineHeight="1.10"
              fontFamily="InterDisplay"
            >
              Re-send
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OtpValidation;
