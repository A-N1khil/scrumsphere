export interface User {
    id?: string;
    userId?: string;
    name: string;
    email: string;
    role: string;
    password?: string;
    jwtToken?: string;
}