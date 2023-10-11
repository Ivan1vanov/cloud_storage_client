export interface ErrorAppResponse {
    error: string[] | ErroResponseObject
}

export interface ErroResponseObject {
    errors: {
        [key: string]: string;
    }
}