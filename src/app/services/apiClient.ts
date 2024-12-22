import axios, { AxiosInstance } from "axios";
import { CustomAuthConfig } from "../models/shared/Auth";

const apiClient: AxiosInstance = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config: CustomAuthConfig) => {
  if (config.type === "Basic") {
    config.headers["Authorization"] = `Basic ${btoa(`${config.username}:${config.password}`)}`;
  } else if (config.type === "Bearer") {
    config.headers["Authorization"] = `Bearer ${config.token}`;
  }
  return config;
});

export default apiClient;
