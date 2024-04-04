import { Box } from "@mui/material";
import "./App.css";
import LandingScreen from "./pages/landing-screen";
import { useEffect, useState } from "react";
import MaxAiAssistantRoutes from "./app/max-ai-assistant-routes";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

function App() {
  const [InitialStart, setInitialStart] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setInitialStart(false);
    }, 2500);
  }, []);

  return (
    <Box className="App">
      <Box className="container">
        <Navbar />

        <Box className="content-container" p="20px 0px">
          {InitialStart ? <LandingScreen /> : <MaxAiAssistantRoutes />}
        </Box>

        {!InitialStart && <Footer />}
      </Box>
    </Box>
  );
}

export default App;
