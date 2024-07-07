[**@lynxts/core**](../README.md) • **Docs**

***

[@lynxts/core](../README.md) / RenderProps

# Interface: RenderProps\<T\>

The renders props when the children of [FormProvider](../functions/FormProvider.md) is a function.

## Type Parameters

• **T** *extends* [`Struct`](../type-aliases/Struct.md)

struct type of the form values

## Properties

### handleChange()

> **handleChange**: \<`K`, `A`\>(`path`, `valueOrCallback`) => (...`args`) => `void`

#### Type Parameters

• **K** *extends* `string`

• **A** *extends* `unknown`[]

#### Parameters

• **path**: `K`

the path to change the value

• **valueOrCallback**: [`Optional`](../type-aliases/Optional.md)\<[`ValueByPath`](../type-aliases/ValueByPath.md)\<`T`, `K`\>\> \| [`ChangeCallback`](../type-aliases/ChangeCallback.md)\<`T`, `K`, `A`\>

either a value or a callback to change it

#### Returns

`Function`

a function which infers the arguments of a callback where applied
         and returns void

##### Parameters

• ...**args**: `A`

##### Returns

`void`

#### Defined in

[Form.provider.tsx:74](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.provider.tsx#L74)

***

### setValue()

> **setValue**: \<`K`\>(`path`) => [`SetValue`](../type-aliases/SetValue.md)\<[`ValueByPath`](../type-aliases/ValueByPath.md)\<`T`, `K`\>\>

#### Type Parameters

• **K** *extends* `string`

#### Parameters

• **path**: `K`

the path to change the value

#### Returns

[`SetValue`](../type-aliases/SetValue.md)\<[`ValueByPath`](../type-aliases/ValueByPath.md)\<`T`, `K`\>\>

a value setter function

#### Defined in

[Form.provider.tsx:96](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.provider.tsx#L96)

***

### submit()

> **submit**: () => `void`

Helper function that triggers the form submit on demand.

#### Returns

`void`

#### Defined in

[Form.provider.tsx:100](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.provider.tsx#L100)

***

### values

> **values**: `Partial`\<`T`\>

The curretn values `Partial<T>` of the form. These values are partial
because they might not be present or changed by the user yet.

#### Defined in

[Form.provider.tsx:105](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.provider.tsx#L105)
