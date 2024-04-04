import { Route, Routes } from "react-router-dom";
import OtpValidation from "../pages/otp-validation";
import Conversation from "../pages/conversation";
import InformedConsent from "../pages/informed-consent";
import SuccessPage from "../pages/success";

const MaxAiAssistantRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<OtpValidation />} />
      <Route path="/:id" element={<OtpValidation />} />
      <Route path="/:id/conversation" element={<Conversation />} />
      <Route path="/:id/temp/:url" element={<OtpValidation />} />
      <Route path="/:id/informed-consent" element={<InformedConsent />} />
      <Route path="/:id/success" element={<SuccessPage />} />
    </Routes>
  );
};

export default MaxAiAssistantRoutes;
