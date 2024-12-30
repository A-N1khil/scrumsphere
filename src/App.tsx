import LoginPage from "@/app/Pages/LoginPage";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistrationPage from "./app/Pages/RegistrationPage";
import UserLanding from "./app/Pages/UserLanding";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { ThemeProvider } from "./app/components/ThemeProvider";
import TaskView from "./app/components/tasks/TaskView";
import { Task } from "./app/models/tasks/Task";

const task: Task = {
  id: "676eeddaf5264633ed8421ba",
  taskId: "TASK-1",
  projectId: "PROJ-101",
  title: "Design database schema",
  description: "Create and finalize the schema for the project database.",
  status: "TODO",
  assignee: "Alice",
  reporter: "Bob",
  dueDate: "2024-01-15",
  createdDate: "2023-12-20",
  updatedDate: "2023-12-25",
  messages: [
    {
      id: "676eeddaf5264633ed8421ba",
      content: "This is the first message.",
      author: "Alice",
      upVotes: 3,
    },
    {
      id: "676eeddaf5264633ed8421bb",
      content: `# Hello`,
      author: "Bob",
      upVotes: 0,
    },
  ],
};

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
              <Route path="/task" element={<TaskView task={task} />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
