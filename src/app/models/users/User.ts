export interface User {
  userId: string;
  name: string;
  email: string;
  role: string;
  password?: string;
  jwtToken?: string;
}
