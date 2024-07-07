[**@lynxts/core**](../README.md) • **Docs**

***

[@lynxts/core](../README.md) / Adapter

# Interface: Adapter\<T\>

Validation adapter for a `T` structure. Specifies functions required for the
form validations and their hooks.

## Type Parameters

• **T** *extends* [`Struct`](../type-aliases/Struct.md)

struct type of the form values

## Properties

### required()

> **required**: (`path`) => `boolean`

#### Parameters

• **path**: [`Path`](../type-aliases/Path.md)\<`T`\>

the path to check if it's requried

#### Returns

`boolean`

wether a path is required or not

#### Defined in

[helpers/adapters.ts:30](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/helpers/adapters.ts#L30)

***

### validate()

> **validate**: (`values`) => `Promise`\<[`Result`](../type-aliases/Result.md)\<`T`, `Map`\<[`Path`](../type-aliases/Path.md)\<`T`\>, `string`\>\>\>

#### Parameters

• **values**: `Partial`\<`T`\>

the form values to validate

#### Returns

`Promise`\<[`Result`](../type-aliases/Result.md)\<`T`, `Map`\<[`Path`](../type-aliases/Path.md)\<`T`\>, `string`\>\>\>

a promise with the `Result<S, E>` of the validation

#### Defined in

[helpers/adapters.ts:42](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/helpers/adapters.ts#L42)

***

### validateAt()

> **validateAt**: \<`K`\>(`path`, `value`) => `Promise`\<[`Result`](../type-aliases/Result.md)\<`true`, `string`\>\>

#### Type Parameters

• **K** *extends* `string`

#### Parameters

• **path**: `K`

the path on the schema to validate

• **value**: [`Optional`](../type-aliases/Optional.md)\<[`ValueByPath`](../type-aliases/ValueByPath.md)\<`T`, `K`\>\>

the value to validate against

#### Returns

`Promise`\<[`Result`](../type-aliases/Result.md)\<`true`, `string`\>\>

a promise with the `Result<S, E>` of the validation

#### Defined in

[helpers/adapters.ts:55](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/helpers/adapters.ts#L55)
