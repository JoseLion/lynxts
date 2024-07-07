[**@lynxts/native**](../README.md) • **Docs**

***

[@lynxts/native](../README.md) / TextField

# Function: TextField()

> **TextField**\<`T`\>(`props`): `ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

Helper component to work with TextInput core component within a
`FormProvider<T>`. I.e., it implements the useField and
useFieldValidation hooks to provide the value state management and
validation helpers right out of the box.

## Type Parameters

• **T** *extends* `Struct`

struct type of the form values

## Parameters

• **props**: [`TextFiedProps`](../interfaces/TextFiedProps.md)\<`T`\>

the TextFiedProps plus the TextInput props

## Returns

`ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

## Defined in

[packages/native/src/lib/fields/TextField.component.tsx:81](https://github.com/JoseLion/lynxts/blob/main/packages/native/src/lib/fields/TextField.component.tsx#L81)
