import { InternalAxiosRequestConfig } from "axios";

enum AuthType {
  basic = "Basic",
  bearer = "Bearer",
}

interface AuthConfig extends InternalAxiosRequestConfig {
  type?: AuthType;
}

export interface BasicAuthConfig extends AuthConfig {
  type?: AuthType.basic;
  username?: string;
  password?: string;
}

export interface TokenAuthConfig extends AuthConfig {
  type?: AuthType.bearer;
  token?: string;
}

export type CustomAuthConfig = BasicAuthConfig | TokenAuthConfig;
