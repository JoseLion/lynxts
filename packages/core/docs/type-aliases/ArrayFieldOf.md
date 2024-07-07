[**@lynxts/core**](../README.md) • **Docs**

***

[@lynxts/core](../README.md) / ArrayFieldOf

# Type Alias: ArrayFieldOf()\<T\>

> **ArrayFieldOf**\<`T`\>: \<`K`\>(`props`) => `ReactNode`

Helper type to describe an [ArrayField](../functions/ArrayField.md) component of an specific
struct `T`.

## Type Parameters

• **T** *extends* [`Struct`](Struct.md)

struct type of the form values

## Type Parameters

• **K** *extends* [`Path`](Path.md)\<`T`, [`ArrayValue`](ArrayValue.md)\<`T`, `K`\>[]\>

## Parameters

• **props**: [`ArrayFieldProps`](../interfaces/ArrayFieldProps.md)\<`T`, `K`\>

## Returns

`ReactNode`

## Defined in

[components/ArrayField.component.tsx:25](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/components/ArrayField.component.tsx#L25)
