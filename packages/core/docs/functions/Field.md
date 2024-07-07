[**@lynxts/core**](../README.md) • **Docs**

***

[@lynxts/core](../README.md) / Field

# Function: Field()

> **Field**\<`T`, `K`, `D`\>(`props`): `ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

Helper component for rendering fields with finner control over the re-renders

## Type Parameters

• **T** *extends* [`Struct`](../type-aliases/Struct.md)

struct type of the form values

• **K** *extends* `string`

the type of the path of the field

• **D** = [`Optional`](../type-aliases/Optional.md)\<[`ValueByPath`](../type-aliases/ValueByPath.md)\<`T`, `K`\>\>

## Parameters

• **props**: [`FieldProps`](../interfaces/FieldProps.md)\<`T`, `K`, `D`\>

the field props

## Returns

`ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

## Defined in

[components/Field.component.tsx:79](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/components/Field.component.tsx#L79)
