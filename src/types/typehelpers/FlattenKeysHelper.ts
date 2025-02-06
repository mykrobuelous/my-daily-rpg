/* eslint-disable @typescript-eslint/no-explicit-any */
export type DepthLimit = 5; // Arbitrary limit to prevent infinite recursion

export type FlattenObjectKeys<
    T,
    Prefix extends string = '',
    Depth extends number[] = [],
> = Depth['length'] extends DepthLimit
    ? never
    : T extends Record<string, any>
      ? T extends any[]
          ? never
          : {
                [K in keyof T]:
                    | `${Prefix}${K & string}`
                    | (T[K] extends Record<string, any>
                          ? FlattenObjectKeys<T[K], `${Prefix}${K & string}.`, [...Depth, 1]>
                          : never);
            }[keyof T]
      : never;
