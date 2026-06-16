# Union and Intersection Types

Union: `string | number`. Intersection: `A & B`. Combine types.

```ts
type Admin = { name: string; privileges: string[] };
type Employee = { name: string; startDate: Date };
type ElevatedEmployee = Admin & Employee;
```
