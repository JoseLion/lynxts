[**@lynxts/core**](../README.md) • **Docs**

***

[@lynxts/core](../README.md) / FieldOf

# Type alias: FieldOf()\<T\>

> **FieldOf**\<`T`\>: \<`K`, `D`\>(`props`) => `ReactNode`

Helper type to describe a [Field](../functions/Field.md) component of an specific struct `T`.

## Type parameters

• **T** *extends* [`Struct`](Struct.md)

struct type of the form values

## Type parameters

• **K** *extends* [`Path`](Path.md)\<`T`, [`ValueByPath`](ValueByPath.md)\<`T`, `K`\>\>

• **D** *extends* [`Optional`](Optional.md)\<[`ValueByPath`](ValueByPath.md)\<`T`, `K`\>\> = [`Optional`](Optional.md)\<[`ValueByPath`](ValueByPath.md)\<`T`, `K`\>\>

## Parameters

• **props**: [`FieldProps`](../interfaces/FieldProps.md)\<`T`, `K`, `D`\>

## Returns

`ReactNode`

## Source

[lib/components/Field.component.tsx:14](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/components/Field.component.tsx#L14)
