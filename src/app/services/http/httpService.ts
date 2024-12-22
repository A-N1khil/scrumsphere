import { ResponseHolder } from "@/app/models/shared/ResponseHolder";
import apiClient from "../apiClient";
import { CustomAuthConfig } from "@/app/models/shared/Auth";

class HttpService {
  async get(
    url: string,
    params: unknown,
    setAuth: boolean = true,
    authConfig?: CustomAuthConfig
  ): Promise<ResponseHolder> {
    if (setAuth) {
      const response = await apiClient.get<ResponseHolder>(url, {
        params,
        ...authConfig,
      });
      return response.data;
    } else {
      const response = await apiClient.get<ResponseHolder>(url, { params });
      return response.data;
    }
  }

  async post(
    url: string,
    data: unknown,
    setAuth: boolean = true,
    authConfig?: CustomAuthConfig
  ): Promise<ResponseHolder> {
    if (setAuth) {
      const response = await apiClient.post<ResponseHolder>(url, data, authConfig);
      return response.data;
    } else {
      const response = await apiClient.post<ResponseHolder>(url, data);
      return response.data;
    }
  }
}

export const httpService = new HttpService();
