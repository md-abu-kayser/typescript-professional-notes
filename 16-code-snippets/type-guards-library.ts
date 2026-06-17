export function isString(value: unknown): value is string {
  return typeof value === "string";
}
export function isDefined<T>(value: T | undefined | null): value is T {
  return value !== undefined && value !== null;
}
