import { ErrorAppResponse } from "../types";
import { ObjectUtils } from "./ObjectUtils";
import { ObjectWithStringValues } from "./types";

export class HttpResponseUtils {

    public static getErrorMessagesFromErrorResponse(response: ErrorAppResponse): string[] {
        // validation errors
        if(Array.isArray(response.error)) {
            return response.error;
          }
      
        // custom errors
        if(response.error.errors) {
            return ObjectUtils.objectValuesToArray<ObjectWithStringValues>(response.error.errors)
          }

        return [];
    }
}