[**@lynxts/core**](../README.md) • **Docs**

***

[@lynxts/core](../README.md) / FieldRenderProps

# Interface: FieldRenderProps\<T, K, D\>

The result of the [useField](../functions/useField.md) hook

## Extends

- [`UseField`](UseField.md)\<[`ValueByPath`](../type-aliases/ValueByPath.md)\<`T`, `K`\>, `D`\>.[`UseFieldValidation`](UseFieldValidation.md)

## Type parameters

• **T** *extends* [`Struct`](../type-aliases/Struct.md)

the type of the value of the field

• **K** *extends* [`Path`](../type-aliases/Path.md)\<`T`, [`ValueByPath`](../type-aliases/ValueByPath.md)\<`T`, `K`\>\>

the type of the default value of the field

• **D** *extends* [`Optional`](../type-aliases/Optional.md)\<[`ValueByPath`](../type-aliases/ValueByPath.md)\<`T`, `K`\>\>

## Properties

### error

> **error**: [`Optional`](../type-aliases/Optional.md)\<`string`\>

The error message of the field (if any).

#### Inherited from

[`UseFieldValidation`](UseFieldValidation.md).[`error`](UseFieldValidation.md#error)

#### Source

[lib/hooks/useFieldValidation.ts:14](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/hooks/useFieldValidation.ts#L14)

***

### handleChange()

> **handleChange**: \<`A`\>(`mapper`) => (...`args`) => `void`

Helper function that creates a handler function which runs the field
setter with the value obtaioed by the `mapper`.

#### Type parameters

• **A** *extends* `unknown`[]

#### Parameters

• **mapper**

a function to map the callback arguments to the next value

#### Returns

`Function`

##### Parameters

• ...**args**: `A`

##### Returns

`void`

#### Source

[lib/components/Field.component.tsx:30](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/components/Field.component.tsx#L30)

***

### required

> **required**: `boolean`

True when the field is marked as required, false otherwise.

#### Inherited from

[`UseFieldValidation`](UseFieldValidation.md).[`required`](UseFieldValidation.md#required)

#### Source

[lib/hooks/useFieldValidation.ts:18](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/hooks/useFieldValidation.ts#L18)

***

### setTouched()

> **setTouched**: () => `void`

Changes the touched state of the field to `true`

#### Returns

`void`

#### Inherited from

[`UseField`](UseField.md).[`setTouched`](UseField.md#settouched)

#### Source

[lib/hooks/useField.ts:18](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/hooks/useField.ts#L18)

***

### setValue

> **setValue**: `Dispatch`\<`SetStateAction`\<[`ValueByPath`](../type-aliases/ValueByPath.md)\<`T`, `K`\> \| `D`\>\>

Changes the value of the field.

#### Inherited from

[`UseField`](UseField.md).[`setValue`](UseField.md#setvalue)

#### Source

[lib/hooks/useField.ts:22](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/hooks/useField.ts#L22)

***

### value

> **value**: [`ValueByPath`](../type-aliases/ValueByPath.md)\<`T`, `K`\> \| `D`

The actual value of the field.

#### Inherited from

[`UseField`](UseField.md).[`value`](UseField.md#value)

#### Source

[lib/hooks/useField.ts:26](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/hooks/useField.ts#L26)
