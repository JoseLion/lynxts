[Lynx.ts Core API](../README.md) / FieldRenderProps

# Interface: FieldRenderProps<T, K, D\>

The result of the [useField](../README.md#usefield) hook

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends [`Struct`](../README.md#struct) | the type of the value of the field |
| `K` | extends [`Path`](../README.md#path)<`T`, [`ValueByPath`](../README.md#valuebypath)<`T`, `K`\>\> | the type of the default value of the field |
| `D` | extends [`Optional`](../README.md#optional)<[`ValueByPath`](../README.md#valuebypath)<`T`, `K`\>\> | - |

## Hierarchy

- [`UseField`](UseField.md)<[`ValueByPath`](../README.md#valuebypath)<`T`, `K`\>, `D`\>

- [`UseFieldValidation`](UseFieldValidation.md)

  ↳ **`FieldRenderProps`**

## Table of contents

### Properties

- [error](FieldRenderProps.md#error)
- [handleChange](FieldRenderProps.md#handlechange)
- [required](FieldRenderProps.md#required)
- [setTouched](FieldRenderProps.md#settouched)
- [setValue](FieldRenderProps.md#setvalue)
- [value](FieldRenderProps.md#value)

## Properties

### error

• **error**: [`Optional`](../README.md#optional)<`string`\>

The error message of the field (if any).

#### Inherited from

[UseFieldValidation](UseFieldValidation.md).[error](UseFieldValidation.md#error)

#### Defined in

[lib/hooks/useFieldValidation.ts:14](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/hooks/useFieldValidation.ts#L14)

___

### handleChange

• **handleChange**: <A\>(`mapper`: (...`args`: `A`) => [`ValueByPath`](../README.md#valuebypath)<`T`, `K`\> \| `D`) => (...`args`: `A`) => `void`

#### Type declaration

▸ <`A`\>(`mapper`): (...`args`: `A`) => `void`

Helper function that creates a handler function which runs the field
setter with the value obtaioed by the `mapper`.

##### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `unknown`[] |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapper` | (...`args`: `A`) => [`ValueByPath`](../README.md#valuebypath)<`T`, `K`\> \| `D` | a function to map the callback arguments to the next value |

##### Returns

`fn`

a callback function that changes the value upon called

▸ (`...args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `A` |

##### Returns

`void`

#### Defined in

[lib/components/Field.component.tsx:30](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/components/Field.component.tsx#L30)

___

### required

• **required**: `boolean`

True when the field is marked as required, false otherwise.

#### Inherited from

[UseFieldValidation](UseFieldValidation.md).[required](UseFieldValidation.md#required)

#### Defined in

[lib/hooks/useFieldValidation.ts:18](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/hooks/useFieldValidation.ts#L18)

___

### setTouched

• **setTouched**: () => `void`

#### Type declaration

▸ (): `void`

Changes the touched state of the field to `true`

##### Returns

`void`

#### Inherited from

[UseField](UseField.md).[setTouched](UseField.md#settouched)

#### Defined in

[lib/hooks/useField.ts:19](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/hooks/useField.ts#L19)

___

### setValue

• **setValue**: `Dispatch`<`SetStateAction`<[`ValueByPath`](../README.md#valuebypath)<`T`, `K`\> \| `D`\>\>

Changes the value of the field.

#### Inherited from

[UseField](UseField.md).[setValue](UseField.md#setvalue)

#### Defined in

[lib/hooks/useField.ts:23](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/hooks/useField.ts#L23)

___

### value

• **value**: [`ValueByPath`](../README.md#valuebypath)<`T`, `K`\> \| `D`

The actual value of the field.

#### Inherited from

[UseField](UseField.md).[value](UseField.md#value)

#### Defined in

[lib/hooks/useField.ts:27](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/hooks/useField.ts#L27)
