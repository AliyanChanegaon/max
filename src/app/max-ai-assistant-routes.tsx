import { Route, Routes } from "react-router-dom";
import OtpValidation from "../pages/otp-validation";
import Conversation from "../pages/conversation";

const MaxAiAssistantRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<OtpValidation />} />
      <Route path="/:id" element={<OtpValidation />} />
      <Route path="/:id/conversation" element={<Conversation />} />
      <Route path="/:id/temp/:url" element={<OtpValidation />} />
    </Routes>
  );
};

export default MaxAiAssistantRoutes;
