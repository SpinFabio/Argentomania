import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <BrowserRouter>
      <div className=" text-gray-100 w-screen h-screen font-sans overflow-x-hidden select-none">
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
