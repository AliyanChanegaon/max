import styled from "@emotion/styled";
import { Box, Input } from "@mui/material";
import React, { useEffect, useRef, useState, ChangeEvent, KeyboardEvent } from "react";

const OTP_LENGTH = 3;

interface OtpFieldProps {
  setOtp: (otp: string | undefined) => void;
  verificationCode?: string;
  isInvalid?: boolean;
  isAlertOpen?: boolean;
}

const SmallOutlinedInput = styled(Input)(() => ({
  "& .MuiInputBase-input": {
    textAlign: "center",
    // border: isInvalid ? "1px solid #DE1B00" : "1px solid #dee1e9",
    // boxShadow: isInvalid ? "0px 0px 0px 3px #DE1B0026" : "unset",

    animationDuration: "10ms",
    fontSize: "32px",
    color: "#6B7280",
    width: "52px",
    height: "72px",
    padding: 0
  },
  "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
    "-webkit-appearance": "none"
  },
  "& input[type=number]": {
    "-moz-appearance": "textfield",
    //   borderBottom: "2px solid #51a8e2 !important",
    zIndex: 9
  }
}));

export const OtpField: React.FC<OtpFieldProps> = ({ setOtp: setCompleteOtp, isAlertOpen, verificationCode, isInvalid }) => {
  const [otp, setOtp] = useState<string[]>(new Array(OTP_LENGTH).fill(""));
  const [activeOtpIndex, setActiveOtpIndex] = useState<number>(0);
  const [currentOTPIndex, setCurrentOTPIndex] = useState<number | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const focusNextInputField = (index: number) => {
    setActiveOtpIndex(index + 1);
  };

  const focusPrevInputField = (index: number) => {
    const targetIndex = index > 0 ? index - 1 : 0;
    setActiveOtpIndex(targetIndex);
  };

  const handleOtpChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const newOtp = [...otp];

    const isValidOtp = /^\d{4}$/.test(value);

    if (value.length < 4) {
      newOtp[currentOTPIndex!] = value.substring(value.length - 1, value.length);

      if (!value) focusPrevInputField(currentOTPIndex!);
      else focusNextInputField(currentOTPIndex!);
    } else {
      if (isValidOtp) {
        for (let i = 0; i < OTP_LENGTH; i++) {
          newOtp[i] = value[i];
        }
        // Focus the last input field
        setActiveOtpIndex(OTP_LENGTH - 1);
      }
    }

    setOtp(newOtp);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
    setCurrentOTPIndex(index);
    if (event.key === "Backspace") {
      focusPrevInputField(index);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOtpIndex]);

  useEffect(() => {
    return setCompleteOtp(otp.join(""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [otp]);

  useEffect(() => {
    if (verificationCode !== undefined) {
      setOtp(verificationCode?.split(""));
    }
  }, [verificationCode]);

  return (
    <Box
      className="greeting-screen-input "
      sx={{ textAlign: "center", display: "flex", borderColor: isAlertOpen ? "red" : "#51a8e2" }}
    >
      {Array.from({ length: OTP_LENGTH }, (_, index) => (
        <SmallOutlinedInput
          key={index}
          sx={{
            marginLeft: 1,
            marginRight: 1,
            border: isInvalid ? "1px solid #DE1B00" : "1px solid #dee1e9",
            boxShadow: isInvalid ? "0px 0px 0px 3px #DE1B0026" : "unset",
            borderRadius: "6px"
          }}
          inputRef={activeOtpIndex === index ? inputRef : null}
          type="number"
          value={otp[index] || ""}
          onChange={handleOtpChange}
          onKeyDown={(e) => handleKeyDown(e, index)}
          inputProps={{
            maxLength: 1,
            border: "none"
          }}
          error={isAlertOpen}
        />
      ))}
    </Box>
  );
};
