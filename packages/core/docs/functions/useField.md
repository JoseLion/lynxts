[**@lynxts/core**](../README.md) • **Docs**

***

[@lynxts/core](../README.md) / useField

# Function: useField()

> **useField**\<`T`, `V`, `D`\>(`path`, `fallback`?): [`UseField`](../interfaces/UseField.md)\<`V`, `D`\>

A hook to handle fields in the form. It provides the current value of the
field and helper function to change its state.

If the `fallback` parameter is not set, the default value is `undefined`.

## Type parameters

• **T** *extends* [`Struct`](../type-aliases/Struct.md)

• **V**

• **D** = [`Optional`](../type-aliases/Optional.md)\<`V`\>

## Parameters

• **path**: [`Path`](../type-aliases/Path.md)\<`T`, [`Optional`](../type-aliases/Optional.md)\<`V`\>\>

the path of the field in `T`

• **fallback?**: `D`

optional default value the field should take

## Returns

[`UseField`](../interfaces/UseField.md)\<`V`, `D`\>

an object with the field value and some helper functions

## Source

[lib/hooks/useField.ts:39](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/hooks/useField.ts#L39)
