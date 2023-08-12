[@lynxts/core](../README.md) / UseFieldValidation

# Interface: UseFieldValidation

The result of the [useFieldValidation](../README.md#usefieldvalidation) hook.

## Hierarchy

- **`UseFieldValidation`**

  ↳ [`FieldRenderProps`](FieldRenderProps.md)

## Table of contents

### Properties

- [error](UseFieldValidation.md#error)
- [required](UseFieldValidation.md#required)

## Properties

### error

• **error**: [`Optional`](../README.md#optional)<`string`\>

The error message of the field (if any).

#### Defined in

[lib/hooks/useFieldValidation.ts:14](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/hooks/useFieldValidation.ts#L14)

___

### required

• **required**: `boolean`

True when the field is marked as required, false otherwise.

#### Defined in

[lib/hooks/useFieldValidation.ts:18](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/hooks/useFieldValidation.ts#L18)
