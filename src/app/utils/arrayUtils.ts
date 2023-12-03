export class ArrayUtils {
    public static getLastElement <TInput>(array: TInput[]): TInput {
        const LAST_ELEMENT_INDEX = -1;

        return array.at(LAST_ELEMENT_INDEX) as TInput;
    }
}