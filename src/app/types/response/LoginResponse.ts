export interface LoginResponse {
    success: boolean;
    errors?: string[];
    token: string;
}