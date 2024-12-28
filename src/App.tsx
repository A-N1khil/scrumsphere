import LoginPage from "@/app/Pages/LoginPage";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistrationPage from "./app/Pages/RegistrationPage";
import UserLanding from "./app/Pages/UserLanding";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { ThemeProvider } from "./app/components/ThemeProvider";
import TaskComponent from "./app/components/TaskComponent";

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegistrationPage />} />
              <Route path="/tasks" element={<UserLanding />} />
              <Route path="/task" element={<TaskComponent />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
