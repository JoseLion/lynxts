[**@lynxts/core**](../README.md) • **Docs**

***

[@lynxts/core](../README.md) / useArrayField

# Function: useArrayField()

> **useArrayField**\<`T`, `V`\>(`path`): [`UseArrayField`](../interfaces/UseArrayField.md)\<`V`\>

A hook to handle array field in the form. It provides the array field items
to iterate over and a few helper functions to handle changes and renders on
the array.

## Type parameters

• **T** *extends* [`Struct`](../type-aliases/Struct.md)

• **V**

## Parameters

• **path**: [`Path`](../type-aliases/Path.md)\<`T`, `V`[]\>

the path of the array field in `T`

## Returns

[`UseArrayField`](../interfaces/UseArrayField.md)\<`V`\>

an object containing the array items and helper array functions

## Source

[lib/hooks/useArrayField.ts:104](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/hooks/useArrayField.ts#L104)
