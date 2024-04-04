import { Box } from "@mui/material";
import PrimaryButton from "../buttons/primary-button";
import { useState } from "react";
import FontSlider from "../slider/font-slider";

const Footer = () => {
  const [isSliderOpen, setIsSliderOpen] = useState<boolean>(false);


  const openSlider = () => {
    setIsSliderOpen(true);

    setTimeout(() => {
      setIsSliderOpen(false);
    }, 4000);
  };


  return (
    <Box
      sx={{
        zIndex: 999,
        width: "-webkit-fill-available",
        position: "fixed",
        bottom: 0
      }}
    >
    <Box
        sx={{
          // border: "1px solid",
          display: "flex",
          justifyContent: "space-between",
          padding: {
            xs: "15px",
            md: "20px"
          },
          borderTop: "1px solid #E5E7EB",
          bgcolor: "white"
        }}
      >
        {!isSliderOpen ? (
          <PrimaryButton padding="0" border="1px solid #E5E7EB" onClick={openSlider}>
            <img src="/assets/font-change.svg" alt="tcognition logo" height="100%" />
          </PrimaryButton>
        ) : (
          <FontSlider />
        )}

        {/* <InfoTile description="Listening" comp={<PulseDot dotColor="#8ABC00" boxHeight="8px" />} color="#739D00" /> */}
      </Box>
    </Box>
  );
};

export default Footer;
