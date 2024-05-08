[**@lynxts/core**](../README.md) • **Docs**

***

[@lynxts/core](../README.md) / ArrayValue

# Type alias: ArrayValue\<T, K\>

> **ArrayValue**\<`T`, `K`\>: [`ValueByPath`](ValueByPath.md)\<`T`, `K`\> *extends* infer A[] \| `undefined` ? `A` : `never`

Helper type to look up the inner type of an array field.

## Type parameters

• **T** *extends* [`Struct`](Struct.md)

struct type of the form values

• **K** *extends* [`Path`](Path.md)\<`T`\>

the path type of the array field

## Source

[lib/components/ArrayField.component.tsx:13](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/components/ArrayField.component.tsx#L13)
