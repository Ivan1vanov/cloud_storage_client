import { ObjectWithUnknowValues } from "./types";

export class ObjectUtils {

    public static objectValuesToArray<
    TObjectType extends ObjectWithUnknowValues,
    TResult = TObjectType[keyof TObjectType]
    >(obj: TObjectType): TResult[] {
        return Object.keys(obj).map((key) => obj[key]) as TResult[];
    }
}