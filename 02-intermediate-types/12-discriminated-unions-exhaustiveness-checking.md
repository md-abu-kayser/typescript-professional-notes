# Discriminated Unions & Exhaustiveness

Common `kind` property. `never` type in default case ensures all variants handled.

```ts
type Shape = { kind: "circle"; radius: number } | { kind: "square"; x: number };
function area(s: Shape) {
  switch (s.kind) {
    case "circle":
      return Math.PI * s.radius ** 2;
    case "square":
      return s.x * s.x;
    default:
      const _exhaustive: never = s;
      return _exhaustive;
  }
}
```
