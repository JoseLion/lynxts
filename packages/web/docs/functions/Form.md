[**@lynxts/web**](../README.md) • **Docs**

***

[@lynxts/web](../README.md) / Form

# Function: Form()

> **Form**\<`T`\>(`props`): `ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

The Form component is just like the FormProvider but its children
are wrapped around a `<form>` HTML element. This means you can simply use a
`submit` type form element to trigger the submit, just like a normal
`<form>` would.

**Note:** Because the FormProvider is in charge of the validation, the
defualt value of the `noValidate` prop of the `<form>` is set to `true`.

## Type Parameters

• **T** *extends* `Struct`

struct type of the form values

## Parameters

• **props**: [`FormProps`](../interfaces/FormProps.md)\<`T`\>

the FromProvider props plus the HTMLFormElement props

## Returns

`ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

## Defined in

[packages/web/src/lib/Form.component.tsx:28](https://github.com/JoseLion/lynxts/blob/main/packages/web/src/lib/Form.component.tsx#L28)
