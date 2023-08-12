[Lynx.ts Core API](../README.md) / FormCtxt

# Interface: FormCtxt<T\>

The from context type based on a struct type `T`.

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends [`Struct`](../README.md#struct) | the struct type of the form values |

## Table of contents

### Properties

- [setTouched](FormCtxt.md#settouched)
- [setValues](FormCtxt.md#setvalues)
- [setViolations](FormCtxt.md#setviolations)
- [submit](FormCtxt.md#submit)
- [submitted](FormCtxt.md#submitted)
- [touched](FormCtxt.md#touched)
- [validation](FormCtxt.md#validation)
- [values](FormCtxt.md#values)
- [violations](FormCtxt.md#violations)

## Properties

### setTouched

• **setTouched**: `Dispatch`<`SetStateAction`<`Map`<`GetPath`<`T`, `unknown`, `T`\>, `boolean`\>\>\>

Changes the touched state of the fields.

**`Param`**

either a new touched `Map<Path<T>, boolean>` or its equivalent
       action callback

#### Defined in

[lib/Form.context.ts:136](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.context.ts#L136)

___

### setValues

• **setValues**: `Dispatch`<`SetStateAction`<`Partial`<`T`\>\>\>

Changes the values `T` of the form.

**`Param`**

either a new `T` object or its equivalent action callback

#### Defined in

[lib/Form.context.ts:142](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.context.ts#L142)

___

### setViolations

• **setViolations**: `Dispatch`<`SetStateAction`<`Map`<`GetPath`<`T`, `unknown`, `T`\>, `string`\>\>\>

Changes the violation state of the fields.

**`Param`**

either a new violations `Map<Path<T>, string>` or its equivalent
       action callback

#### Defined in

[lib/Form.context.ts:149](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.context.ts#L149)

___

### submit

• **submit**: () => `void`

#### Type declaration

▸ (): `void`

Submits the form when called.

##### Returns

`void`

#### Defined in

[lib/Form.context.ts:153](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.context.ts#L153)

___

### submitted

• **submitted**: `boolean`

True if the form was submitted before, false otherwise.

#### Defined in

[lib/Form.context.ts:157](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.context.ts#L157)

___

### touched

• **touched**: `Map`<`GetPath`<`T`, `unknown`, `T`\>, `boolean`\>

A Map of the path and a touched state boolean.

#### Defined in

[lib/Form.context.ts:161](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.context.ts#L161)

___

### validation

• **validation**: `ObjectSchema`<`T`, `AnyObject`, `any`, ``""``\> \| `ZodType`<`T`, `ZodTypeDef`, `T`\> \| [`Adapter`](Adapter.md)<`T`\>

The validation schema used by the Form. This may be Yup/Zod schema or a
custom [Adapter<T>](Adapter.md), depending on what was passed to the
Form context provider.

#### Defined in

[lib/Form.context.ts:167](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.context.ts#L167)

___

### values

• **values**: `Partial`<`T`\>

The state of the values `T` of the form.

#### Defined in

[lib/Form.context.ts:171](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.context.ts#L171)

___

### violations

• **violations**: `Map`<`GetPath`<`T`, `unknown`, `T`\>, `string`\>

A Map of the path and a violation message (if any).

#### Defined in

[lib/Form.context.ts:175](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.context.ts#L175)
