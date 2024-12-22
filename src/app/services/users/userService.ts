import { User } from "@/app/models/users/User";
import { httpService } from "../http/httpService";

class UserService {
  async login(userId: string, password: string): Promise<User> {
    return await httpService.post("/users/login", { userId, password }, false).then((response) => {
      return response.data as User;
    });
  }

  async isUserNameAvaiable(userId: string): Promise<boolean> {
    return await httpService.get(`/users/checkUserId`, { userId }, false).then((response) => {
      return response.data as boolean;
    });
  }
}

export const userService = new UserService();
