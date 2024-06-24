[**@lynxts/core**](../README.md) • **Docs**

***

[@lynxts/core](../README.md) / DeepPartial

# Type alias: DeepPartial\<T\>

> **DeepPartial**\<`T`\>: `{ [P in keyof T]?: T[P] extends Function ? T[P] : T[P] extends (infer U)[] ? DeepPartial<U>[] : T[P] extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : DeepPartial<T[P]> }`

Helper type which recursively transforms object keys from required to
optional. Like Partial but for nested objects.

## Type parameters

• **T**

the object type to make partial recursively

## Source

[lib/Form.context.ts:30](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.context.ts#L30)
