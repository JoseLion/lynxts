[**@lynxts/core**](../README.md) • **Docs**

***

[@lynxts/core](../README.md) / FormProviderProps

# Interface: FormProviderProps\<T\>

The [FormProvider](../functions/FormProvider.md) component props.

## Type parameters

• **T** *extends* [`Struct`](../type-aliases/Struct.md)

struct type of the form values

## Properties

### children

> **children**: `ReactNode` \| `ReactNode`[] \| (`props`) => `ReactNode`

The children of the provider may rather be any kind of React.js node(s),
or a function which takes [<T>|RenderProps\<T\>](RenderProps.md) and
returns a React.js node.

#### Source

[lib/Form.provider.tsx:110](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.provider.tsx#L110)

***

### onSubmit()

> **onSubmit**: (`values`) => `void`

The function to be called uppon form submision.

#### Parameters

• **values**: `T`

the validated values `T` of the form

#### Returns

`void`

#### Source

[lib/Form.provider.tsx:116](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.provider.tsx#L116)

***

### validation

> **validation**: `ObjectSchema`\<`T`, `AnyObject`, `any`, `""`\> \| `ZodType`\<`T`, `ZodTypeDef`, `T`\> \| [`Adapter`](Adapter.md)\<`T`\>

A validation schema of `T` used to validate the form fields. Both Yup and
Zod schemas are supported out-of-the-box.

However, if you want to use another validation library, or your own
schemas, you can also pass a validation [Adapter<T>](Adapter.md) which
tells the form and the hooks how to handle the validation.

#### Source

[lib/Form.provider.tsx:125](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.provider.tsx#L125)

***

### values?

> `optional` **values**: [`DeepPartial`](../type-aliases/DeepPartial.md)\<`T`\>

The values `T` of the form. Changing this prop with a state will change
the field values as well.

#### Source

[lib/Form.provider.tsx:130](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.provider.tsx#L130)
