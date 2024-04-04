import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React, { ReactNode } from "react";

interface PrimaryButtonProps {
  children: string | ReactNode;
  border?: string;
  textcolor?: string;
  padding?: string;
  fontSize?: string;
  bg?: string;
  onClick?: () => void;
}

export const OutlinedButton = styled(Button)<{
  border?: string;
  textcolor?: string;
  padding?: string;
  fontSize?: string;
  bg?: string;
}>(({ border, textcolor, padding, fontSize, bg }) => ({
  textTransform: "none",
  borderRadius: "999px",
  color: textcolor,
  padding: padding ?? "6px 12px",
  lineHeight: "unset",
  border: border ?? "2px solid #eeee",
  fontSize: fontSize ?? "14px",
  backgroundColor: bg ?? "white",
  height: "fit-content",
  "&:hover": {
    backgroundColor: bg ?? "#eeee",
    border: border ?? "2px solid #eeee"
  },
  fontFamily: "InterDisplay, sans-serif"
}));

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, border, textcolor, padding, fontSize, bg, onClick }) => {
  return (
    <OutlinedButton
      variant="outlined"
      border={border}
      textcolor={textcolor}
      padding={padding}
      fontSize={fontSize}
      bg={bg}
      onClick={onClick}
    >
      {children}
    </OutlinedButton>
  );
};

export default PrimaryButton;
