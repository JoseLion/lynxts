[**@lynxts/web**](../README.md) • **Docs**

***

[@lynxts/web](../README.md) / Textarea

# Function: Textarea()

> **Textarea**\<`T`\>(`props`): `ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

Helper component to work with `<textarea>` elements within a
`FormProvider<T>`. I.e., it implements the useField and
useFieldValidation hooks to provide the value state management and
validation helpers right out of the box.

## Type Parameters

• **T** *extends* `Struct`

struct type of the form values

## Parameters

• **props**: [`TextareaProps`](../interfaces/TextareaProps.md)\<`T`\>

the TextareaProps plus the HTMLTextAreaElement attributes

## Returns

`ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

## Defined in

[packages/web/src/lib/fields/Textarea.component.tsx:62](https://github.com/JoseLion/lynxts/blob/main/packages/web/src/lib/fields/Textarea.component.tsx#L62)
