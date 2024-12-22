import { User } from "@/app/models/users/User";
import { httpService } from "../http/httpService";

class UserService {
  async login(userId: string, password: string): Promise<User | unknown> {
    return await httpService.post("/login", { userId, password }, false);
  }
}

export const userService = new UserService();
