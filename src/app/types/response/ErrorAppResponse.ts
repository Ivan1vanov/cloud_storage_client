export interface ErrorAppResponse {
    error: string[] | ErrorResponseObject
}

export interface ErrorResponseObject {
    errors: {
        [key: string]: string;
    }
}