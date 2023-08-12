[@lynxts/core](../README.md) / UseField

# Interface: UseField<V, D\>

The result of the [useField](../README.md#usefield) hook

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `V` | `V` | the type of the value of the field |
| `D` | extends [`Optional`](../README.md#optional)<`V`\> | the type of the default value of the field |

## Hierarchy

- **`UseField`**

  ↳ [`FieldRenderProps`](FieldRenderProps.md)

## Table of contents

### Properties

- [setTouched](UseField.md#settouched)
- [setValue](UseField.md#setvalue)
- [value](UseField.md#value)

## Properties

### setTouched

• **setTouched**: () => `void`

#### Type declaration

▸ (): `void`

Changes the touched state of the field to `true`

##### Returns

`void`

#### Defined in

[lib/hooks/useField.ts:19](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/hooks/useField.ts#L19)

___

### setValue

• **setValue**: `Dispatch`<`SetStateAction`<`V` \| `D`\>\>

Changes the value of the field.

#### Defined in

[lib/hooks/useField.ts:23](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/hooks/useField.ts#L23)

___

### value

• **value**: `V` \| `D`

The actual value of the field.

#### Defined in

[lib/hooks/useField.ts:27](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/hooks/useField.ts#L27)
