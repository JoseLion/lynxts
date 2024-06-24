[**@lynxts/core**](../README.md) • **Docs**

***

[@lynxts/core](../README.md) / ChangeCallback

# Type alias: ChangeCallback()\<T, K, A\>

> **ChangeCallback**\<`T`, `K`, `A`\>: (...`args`) => [`Optional`](Optional.md)\<[`ValueByPath`](ValueByPath.md)\<`T`, `K`\>\>

Generic callback function. Infers the arguments types and the return type is
resolved from the path type.

## Type parameters

• **T** *extends* [`Struct`](Struct.md)

struct type of the form values

• **K** *extends* [`Path`](Path.md)\<`T`\>

path type of `T`

• **A** *extends* `unknown`[]

callback arguments types

## Parameters

• ...**args**: `A`

## Returns

[`Optional`](Optional.md)\<[`ValueByPath`](ValueByPath.md)\<`T`, `K`\>\>

## Source

[lib/Form.provider.tsx:36](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.provider.tsx#L36)
