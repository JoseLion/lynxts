[**@lynxts/core**](../README.md) • **Docs**

***

[@lynxts/core](../README.md) / UseField

# Interface: UseField\<V, D\>

The result of the [useField](../functions/useField.md) hook

## Extended by

- [`FieldRenderProps`](FieldRenderProps.md)

## Type Parameters

• **V**

the type of the value of the field

• **D** *extends* [`Optional`](../type-aliases/Optional.md)\<`V`\>

the type of the default value of the field

## Properties

### setTouched()

> **setTouched**: () => `void`

Changes the touched state of the field to `true`

#### Returns

`void`

#### Defined in

[hooks/useField.ts:18](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/hooks/useField.ts#L18)

***

### setValue

> **setValue**: `Dispatch`\<`SetStateAction`\<`V` \| `D`\>\>

Changes the value of the field.

#### Defined in

[hooks/useField.ts:22](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/hooks/useField.ts#L22)

***

### value

> **value**: `V` \| `D`

The actual value of the field.

#### Defined in

[hooks/useField.ts:26](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/hooks/useField.ts#L26)
