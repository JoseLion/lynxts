[Lynx.ts Core API](../README.md) / Adapter

# Interface: Adapter<T\>

Validation adapter for a `T` structure. Specifies functions required for the
form validations and their hooks.

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends [`Struct`](../README.md#struct) | struct type of the form values |

## Table of contents

### Properties

- [required](Adapter.md#required)
- [validate](Adapter.md#validate)
- [validateAt](Adapter.md#validateat)

## Properties

### required

• **required**: (`path`: [`Path`](../README.md#path)<`T`\>) => `boolean`

#### Type declaration

▸ (`path`): `boolean`

Should return `true` if the field in the `path` is required in the
validation schema. I.e., whenever the field cannot be `null`,
`undefined`, non-empty, etc.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`Path`](../README.md#path)<`T`\> | the path to check if it's requried |

##### Returns

`boolean`

wether a path is required or not

#### Defined in

[lib/helpers/adapters.ts:30](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/helpers/adapters.ts#L30)

___

### validate

• **validate**: (`values`: `Partial`<`T`\>) => `Promise`<[`Result`](../README.md#result)<`T`, `Map`<[`Path`](../README.md#path)<`T`\>, `string`\>\>\>

#### Type declaration

▸ (`values`): `Promise`<[`Result`](../README.md#result)<`T`, `Map`<[`Path`](../README.md#path)<`T`\>, `string`\>\>\>

Should return a promise containing the `Result<S, E>` of the validation.
Where `S` represents the success and `E` the error.

If the validation success, the promise should resolve to the form values.
Otherwise, if the validation fails, the promise should resolve to a
`Map<Path<T>, string>` of the path/message for the invalid fields.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `Partial`<`T`\> | the form values to validate |

##### Returns

`Promise`<[`Result`](../README.md#result)<`T`, `Map`<[`Path`](../README.md#path)<`T`\>, `string`\>\>\>

a promise with the `Result<S, E>` of the validation

#### Defined in

[lib/helpers/adapters.ts:42](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/helpers/adapters.ts#L42)

___

### validateAt

• **validateAt**: <K\>(`path`: `K`, `value`: [`Optional`](../README.md#optional)<[`ValueByPath`](../README.md#valuebypath)<`T`, `K`\>\>) => `Promise`<[`Result`](../README.md#result)<``true``, `string`\>\>

#### Type declaration

▸ <`K`\>(`path`, `value`): `Promise`<[`Result`](../README.md#result)<``true``, `string`\>\>

Should return a promise containing the `Result<S, E>` of the field
validation. Where `S` represents the success and `E` the error.

If the validation success, the promise should resolve to a simple `true`.
Otherwise, if the validation fails, the promise should resolve to a
`Map<Path<T>, string>` of the path/message for the invalid fields.

##### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `K` | the path on the schema to validate |
| `value` | [`Optional`](../README.md#optional)<[`ValueByPath`](../README.md#valuebypath)<`T`, `K`\>\> | the value to validate against |

##### Returns

`Promise`<[`Result`](../README.md#result)<``true``, `string`\>\>

a promise with the `Result<S, E>` of the validation

#### Defined in

[lib/helpers/adapters.ts:55](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/helpers/adapters.ts#L55)
