// A collection of useful custom utility types
export type Nullable<T> = T | null;
export type DeepReadonly<T> = { readonly [P in keyof T]: DeepReadonly<T[P]> };
export type ValueOf<T> = T[keyof T];
export type NonEmptyArray<T> = [T, ...T[]];
