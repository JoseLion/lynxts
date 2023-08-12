[Lynx.ts Core API](../README.md) / FormProviderProps

# Interface: FormProviderProps<T\>

The [FormProvider](../README.md#formprovider) component props.

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends [`Struct`](../README.md#struct) | struct type of the form values |

## Table of contents

### Properties

- [children](FormProviderProps.md#children)
- [onSubmit](FormProviderProps.md#onsubmit)
- [validation](FormProviderProps.md#validation)
- [values](FormProviderProps.md#values)

## Properties

### children

• **children**: `ReactNode` \| `ReactNode`[] \| (`props`: [`RenderProps`](RenderProps.md)<`T`\>) => `ReactNode`

The children of the provider may rather be any kind of React.js node(s),
or a function which takes [<T>|RenderProps\<T\>](RenderProps.md) and
returns a React.js node.

#### Defined in

[lib/Form.provider.tsx:111](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.provider.tsx#L111)

___

### onSubmit

• **onSubmit**: (`values`: `T`) => `void`

#### Type declaration

▸ (`values`): `void`

The function to be called uppon form submision.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `T` | the validated values `T` of the form |

##### Returns

`void`

#### Defined in

[lib/Form.provider.tsx:117](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.provider.tsx#L117)

___

### validation

• **validation**: `ObjectSchema`<`T`, `AnyObject`, `any`, ``""``\> \| `ZodType`<`T`, `ZodTypeDef`, `T`\> \| [`Adapter`](Adapter.md)<`T`\>

A validation schema of `T` used to validate the form fields. Both Yup and
Zod schemas are supported out-of-the-box.

However, if you want to use another validation library, or your own
schemas, you can also pass a validation [Adapter<T>](Adapter.md) which
tells the form and the hooks how to handle the validation.

#### Defined in

[lib/Form.provider.tsx:126](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.provider.tsx#L126)

___

### values

• `Optional` **values**: [`DeepPartial`](../README.md#deeppartial)<`T`\>

The values `T` of the form. Changing this prop with a state will change
the field values as well.

#### Defined in

[lib/Form.provider.tsx:131](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.provider.tsx#L131)
