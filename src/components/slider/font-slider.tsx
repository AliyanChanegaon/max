import { Box, Slider, styled } from "@mui/material";
import { useFontSize } from "../../context/font-size-context";

const OutlinedSlider = styled(Slider)(() => ({
  padding: "0px !important",
  height: "2px",
  zIndex: 9,
  "& .MuiSlider-thumb": {
    width: "11px",
    height: "11px",
    "&:hover": {
      boxShadow: "0px 0px 0px 5px rgba(25, 118, 210, 0.16)"
    }
  },
  "& .MuiSlider-track": {
    backgroundColor: "#E5E7EB",
    border: "none"
  },
  "& .MuiSlider-mark": {
    height: "7px",
    width: "3px",
    backgroundColor: "#E5E7EB"
  },
  "& .MuiSlider-rail": {
    backgroundColor: "#E5E7EB",
    opacity: "100%"
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    zIndex: 9,
    backgroundColor: "#0088DF",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&::before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)"
    },
    "& > *": {
      transform: "rotate(45deg)"
    }
  }
}));

const FontSlider = () => {
  const { fontSize, handleFontSize } = useFontSize();

  const handleChange = (_event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      handleFontSize(newValue);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "200px",
        borderRadius: "999px",
        padding: "8px 16px",
        gap: "10px",
        border: "1px solid #E5E7EB",
        alignItems: "center",
        zIndex: 9
      }}
      className="fade-in"
    >
      <img src="/assets/font-change-2.svg" alt="A" style={{ transform: "scale(0.9)" }} />
      <OutlinedSlider
        aria-label="Increase Font Size"
        // defaultValue={fontSize}
        value={fontSize}
        valueLabelDisplay="auto"
        onChange={handleChange}
        step={4}
        marks
        min={8}
        max={24}
        sx={{ flex: 1 }}
      />
      <img src="/assets/font-change-2.svg" alt="A" />
    </Box>
  );
};

export default FontSlider;
