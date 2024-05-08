[**@lynxts/core**](../README.md) • **Docs**

***

[@lynxts/core](../README.md) / FormCtxt

# Interface: FormCtxt\<T\>

The from context type based on a struct type `T`.

## Type parameters

• **T** *extends* [`Struct`](../type-aliases/Struct.md)

the struct type of the form values

## Properties

### setTouched

> **setTouched**: `Dispatch`\<`SetStateAction`\<`Map`\<`GetPath`\<`T`, `unknown`, `T`\>, `boolean`\>\>\>

Changes the touched state of the fields.

#### Param

either a new touched `Map<Path<T>, boolean>` or its equivalent
       action callback

#### Source

[lib/Form.context.ts:136](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.context.ts#L136)

***

### setValues

> **setValues**: `Dispatch`\<`SetStateAction`\<`Partial`\<`T`\>\>\>

Changes the values `T` of the form.

#### Param

either a new `T` object or its equivalent action callback

#### Source

[lib/Form.context.ts:142](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.context.ts#L142)

***

### setViolations

> **setViolations**: `Dispatch`\<`SetStateAction`\<`Map`\<`GetPath`\<`T`, `unknown`, `T`\>, `string`\>\>\>

Changes the violation state of the fields.

#### Param

either a new violations `Map<Path<T>, string>` or its equivalent
       action callback

#### Source

[lib/Form.context.ts:149](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.context.ts#L149)

***

### submit()

> **submit**: () => `void`

Submits the form when called.

#### Returns

`void`

#### Source

[lib/Form.context.ts:153](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.context.ts#L153)

***

### submitted

> **submitted**: `boolean`

True if the form was submitted before, false otherwise.

#### Source

[lib/Form.context.ts:157](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.context.ts#L157)

***

### touched

> **touched**: `Map`\<`GetPath`\<`T`, `unknown`, `T`\>, `boolean`\>

A Map of the path and a touched state boolean.

#### Source

[lib/Form.context.ts:161](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.context.ts#L161)

***

### validation

> **validation**: `ObjectSchema`\<`T`, `AnyObject`, `any`, `""`\> \| `ZodType`\<`T`, `ZodTypeDef`, `T`\> \| [`Adapter`](Adapter.md)\<`T`\>

The validation schema used by the Form. This may be Yup/Zod schema or a
custom [Adapter<T>](Adapter.md), depending on what was passed to the
Form context provider.

#### Source

[lib/Form.context.ts:167](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.context.ts#L167)

***

### values

> **values**: `Partial`\<`T`\>

The state of the values `T` of the form.

#### Source

[lib/Form.context.ts:171](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.context.ts#L171)

***

### violations

> **violations**: `Map`\<`GetPath`\<`T`, `unknown`, `T`\>, `string`\>

A Map of the path and a violation message (if any).

#### Source

[lib/Form.context.ts:175](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.context.ts#L175)
