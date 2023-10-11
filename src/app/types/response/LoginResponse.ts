export interface LoginResponse {
    success: boolean;
    erros?: string[];
    token: string;
}