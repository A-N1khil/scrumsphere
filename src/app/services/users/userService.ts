import { User } from "@/app/models/users/User";
import { httpService } from "../http/httpService";

class UserService {
  async login(userId: string, password: string): Promise<User> {
    return await httpService.post("/users/login", { userId, password }, false).then((response) => {
      return response.data as User;
    });
  }
}

export const userService = new UserService();
