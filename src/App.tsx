import LoginPage from "@/app/Pages/LoginPage";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistrationPage from "./app/Pages/RegistrationPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
