[**@lynxts/web**](../README.md) • **Docs**

***

[@lynxts/web](../README.md) / Select

# Function: Select()

> **Select**\<`T`, `K`\>(`props`): `ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

Helper component to work with `<select>` elements within a `FormProvider<T>`.
I.e., it implements the useField and useFieldValidation
hooks to provide the value state management and validation helpers right out
of the box.

## Type Parameters

• **T** *extends* `Struct`

struct type of the form values

• **K** *extends* `string`

the type of the Path<T> of the field

## Parameters

• **props**: [`SelectProps`](../interfaces/SelectProps.md)\<`T`, `K`\>

the SelectProps plus the HTMLSelectElement attributes

## Returns

`ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

## Defined in

[packages/web/src/lib/fields/Select.component.tsx:90](https://github.com/JoseLion/lynxts/blob/main/packages/web/src/lib/fields/Select.component.tsx#L90)
