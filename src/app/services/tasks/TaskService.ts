import { Task } from "@/app/models/tasks/Task";
import { httpService } from "../http/HttpService";

class TaskService {
  async getTaskById(taskId: string): Promise<Task> {
    return await httpService.get(`/tasks/task/${taskId}`).then((response) => {
      return response.data as Task;
    });
  }

  async getAllTasks(): Promise<Task[]> {
    return await httpService.get("/tasks/all").then((response) => {
      return response.data as Task[];
    });
  }

  async createTask(task: Task): Promise<Task> {
    return await httpService.post("/tasks/create", task).then((response) => {
      return response.data as Task;
    });
  }

  async updateTask(task: Task): Promise<Task> {
    return await httpService.post("/tasks/update", task).then((response) => {
      return response.data as Task;
    });
  }
}

export const taskService = new TaskService();
