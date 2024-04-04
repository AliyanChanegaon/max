// theme.js

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      light: "#E5E7EB"

    },
  },
typography: {
    fontFamily: "InterDisplay, sans-serif",
    h1: {
        fontSize: "2.5rem",
        fontWeight: 600
    },
    h2: {
        fontSize: "2rem",
        fontWeight: 500
    }
}
});

export default theme;
