import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginForm } from "./app/components/login-form";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
