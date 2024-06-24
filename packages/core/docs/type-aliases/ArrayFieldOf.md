[**@lynxts/core**](../README.md) • **Docs**

***

[@lynxts/core](../README.md) / ArrayFieldOf

# Type alias: ArrayFieldOf()\<T\>

> **ArrayFieldOf**\<`T`\>: \<`K`\>(`props`) => `ReactNode`

Helper type to describe an [ArrayField](../functions/ArrayField.md) component of an specific
struct `T`.

## Type parameters

• **T** *extends* [`Struct`](Struct.md)

struct type of the form values

## Type parameters

• **K** *extends* [`Path`](Path.md)\<`T`, [`ArrayValue`](ArrayValue.md)\<`T`, `K`\>[]\>

## Parameters

• **props**: [`ArrayFieldProps`](../interfaces/ArrayFieldProps.md)\<`T`, `K`\>

## Returns

`ReactNode`

## Source

[lib/components/ArrayField.component.tsx:25](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/components/ArrayField.component.tsx#L25)
