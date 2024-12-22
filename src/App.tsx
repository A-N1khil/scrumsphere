import LoginPage from "@/app/Pages/LoginPage";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistrationPage from "./app/Pages/RegistrationPage";
import UserLanding from "./app/Pages/UserLanding";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/tasks" element={<UserLanding />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
