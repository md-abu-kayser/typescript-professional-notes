type Shape = { kind: "circle"; radius: number } | { kind: "square"; x: number };
export function area(s: Shape): number {
  switch (s.kind) {
    case "circle":
      return Math.PI * s.radius ** 2;
    case "square":
      return s.x ** 2;
  }
}
