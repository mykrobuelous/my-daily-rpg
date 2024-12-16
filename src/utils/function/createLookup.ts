export const createLookup = <T, K extends keyof T>(
    array: T[],
    key: K
): Record<T[K] & string, T> => {
    return array.reduce(
        (lookup, item) => {
            lookup[item[key] as T[K] & string] = item;
            return lookup;
        },
        {} as Record<T[K] & string, T>
    );
};
