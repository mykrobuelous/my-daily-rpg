declare const brand: unique symbol;

type Brand<T, TBrand> = T & { [brand]: TBrand };

export type IDBrand = Brand<string, 'Brand'>;
