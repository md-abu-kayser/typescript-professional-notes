declare const __brand: unique symbol;
type Branded<T, B> = T & { readonly [__brand]: B };
export type UserId = Branded<string, "UserId">;
