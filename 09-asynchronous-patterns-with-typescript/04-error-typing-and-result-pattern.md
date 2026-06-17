# Error Typing & Result Pattern

`type Result<T, E = Error> = { success: true; value: T } | { success: false; error: E }`. Avoid throwing.

> 📘 Next: [Event Emitter Typing](05-event-emitter-typing.md)
