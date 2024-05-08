[**@lynxts/web**](../README.md) • **Docs**

***

[@lynxts/web](../README.md) / Input

# Function: Input()

> **Input**\<`T`\>(`props`): `ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

Helper component to work with `<input>` elements within a `FormProvider<T>`.
I.e., it implements the useField and useFieldValidation
hooks to provide the value state management and validation helpers right out
of the box.

## Type parameters

• **T** *extends* `Struct`

## Parameters

• **props**: [`InputProps`](../interfaces/InputProps.md)\<`T`\>

the InputProps plus the HTMLInputElement attributes

## Returns

`ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

## Source

[packages/web/src/lib/fields/Input.component.tsx:60](https://github.com/JoseLion/lynxts/blob/main/packages/web/src/lib/fields/Input.component.tsx#L60)
