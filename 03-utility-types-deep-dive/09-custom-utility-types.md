# Custom Utility Types

Build own: `type DeepReadonly<T> = { readonly [K in keyof T]: DeepReadonly<T[K]>; }`. Community examples.

> 📘 Next: [Utility Type Library Collection](10-utility-type-library-collection.md)
