import { User } from "@/app/models/users/User";
import { httpService } from "@/app/services/http/HttpService";

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

  async register(user: User): Promise<User> {
    return await httpService.post("/users/register", user, false).then((response) => {
      return response.data as User;
    });
  }
}

export const userService = new UserService();
