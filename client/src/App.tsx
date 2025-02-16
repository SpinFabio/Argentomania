import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import MainPage from "./Pages/MainPage";
import CookiePolicy from "./components/CookiePolicy";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  return (
    <BrowserRouter>
      <div className=" text-gray-100 w-screen h-screen font-sans overflow-x-hidden select-none">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
