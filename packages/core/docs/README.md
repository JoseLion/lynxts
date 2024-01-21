@lynxts/core

# Lynx.ts Core API

## Table of contents

### Interfaces

- [Adapter](interfaces/Adapter.md)
- [ArrayFieldProps](interfaces/ArrayFieldProps.md)
- [FieldProps](interfaces/FieldProps.md)
- [FieldRenderProps](interfaces/FieldRenderProps.md)
- [FormCtxt](interfaces/FormCtxt.md)
- [FormProviderProps](interfaces/FormProviderProps.md)
- [RenderProps](interfaces/RenderProps.md)
- [UseArrayField](interfaces/UseArrayField.md)
- [UseField](interfaces/UseField.md)
- [UseFieldValidation](interfaces/UseFieldValidation.md)

### Type Aliases

- [ArrayFieldOf](README.md#arrayfieldof)
- [ArrayValue](README.md#arrayvalue)
- [ChangeCallback](README.md#changecallback)
- [DeepPartial](README.md#deeppartial)
- [FieldOf](README.md#fieldof)
- [Optional](README.md#optional)
- [Path](README.md#path)
- [Result](README.md#result)
- [SetValue](README.md#setvalue)
- [Struct](README.md#struct)
- [ValueByPath](README.md#valuebypath)

### Functions

- [ArrayField](README.md#arrayfield)
- [Field](README.md#field)
- [FormProvider](README.md#formprovider)
- [arrayFieldOf](README.md#arrayfieldof-1)
- [fieldOf](README.md#fieldof-1)
- [noValidate](README.md#novalidate)
- [useArrayField](README.md#usearrayfield)
- [useField](README.md#usefield)
- [useFieldValidation](README.md#usefieldvalidation)
- [useForm](README.md#useform)
- [useFormSelector](README.md#useformselector)

## Type Aliases

### ArrayFieldOf

Ƭ **ArrayFieldOf**\<`T`\>: \<K\>(`props`: [`ArrayFieldProps`](interfaces/ArrayFieldProps.md)\<`T`, `K`\>) => `ReactNode`

Helper type to describe an [ArrayField](README.md#arrayfield) component of an specific
struct `T`.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends [`Struct`](README.md#struct) | struct type of the form values |

#### Type declaration

▸ \<`K`\>(`props`): `ReactNode`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends [`Path`](README.md#path)\<`T`, [`ArrayValue`](README.md#arrayvalue)\<`T`, `K`\>[]\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ArrayFieldProps`](interfaces/ArrayFieldProps.md)\<`T`, `K`\> |

##### Returns

`ReactNode`

#### Defined in

[lib/components/ArrayField.component.tsx:24](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/components/ArrayField.component.tsx#L24)

___

### ArrayValue

Ƭ **ArrayValue**\<`T`, `K`\>: [`ValueByPath`](README.md#valuebypath)\<`T`, `K`\> extends infer A[] \| `undefined` ? `A` : `never`

Helper type to look up the inner type of an array field.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends [`Struct`](README.md#struct) | struct type of the form values |
| `K` | extends [`Path`](README.md#path)\<`T`\> | the path type of the array field |

#### Defined in

[lib/components/ArrayField.component.tsx:13](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/components/ArrayField.component.tsx#L13)

___

### ChangeCallback

Ƭ **ChangeCallback**\<`T`, `K`, `A`\>: (...`args`: `A`) => [`Optional`](README.md#optional)\<[`ValueByPath`](README.md#valuebypath)\<`T`, `K`\>\>

Generic callback function. Infers the arguments types and the return type is
resolved from the path type.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends [`Struct`](README.md#struct) | struct type of the form values |
| `K` | extends [`Path`](README.md#path)\<`T`\> | path type of `T` |
| `A` | extends `unknown`[] | callback arguments types |

#### Type declaration

▸ (`...args`): [`Optional`](README.md#optional)\<[`ValueByPath`](README.md#valuebypath)\<`T`, `K`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `A` |

##### Returns

[`Optional`](README.md#optional)\<[`ValueByPath`](README.md#valuebypath)\<`T`, `K`\>\>

#### Defined in

[lib/Form.provider.tsx:28](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.provider.tsx#L28)

___

### DeepPartial

Ƭ **DeepPartial**\<`T`\>: \{ [P in keyof T]?: T[P] extends Function ? T[P] : T[P] extends (infer U)[] ? DeepPartial\<U\>[] : T[P] extends ReadonlyArray\<infer U\> ? ReadonlyArray\<DeepPartial\<U\>\> : DeepPartial\<T[P]\> }

Helper type which recursively transforms object keys from required to
optional. Like Partial but for nested objects.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | the object type to make partial recursively |

#### Defined in

[lib/Form.context.ts:29](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.context.ts#L29)

___

### FieldOf

Ƭ **FieldOf**\<`T`\>: \<K, D\>(`props`: [`FieldProps`](interfaces/FieldProps.md)\<`T`, `K`, `D`\>) => `ReactNode`

Helper type to describe a [Field](README.md#field) component of an specific struct `T`.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends [`Struct`](README.md#struct) | struct type of the form values |

#### Type declaration

▸ \<`K`, `D`\>(`props`): `ReactNode`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends [`Path`](README.md#path)\<`T`, [`ValueByPath`](README.md#valuebypath)\<`T`, `K`\>\> |
| `D` | extends [`Optional`](README.md#optional)\<[`ValueByPath`](README.md#valuebypath)\<`T`, `K`\>\> = [`Optional`](README.md#optional)\<[`ValueByPath`](README.md#valuebypath)\<`T`, `K`\>\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`FieldProps`](interfaces/FieldProps.md)\<`T`, `K`, `D`\> |

##### Returns

`ReactNode`

#### Defined in

[lib/components/Field.component.tsx:13](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/components/Field.component.tsx#L13)

___

### Optional

Ƭ **Optional**\<`T`\>: `T` \| `undefined`

Helper type alias to make another type optional (undefinable).

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | the type to make optional |

#### Defined in

[lib/Form.context.ts:14](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.context.ts#L14)

___

### Path

Ƭ **Path**\<`T`, `V`\>: `GetPath`\<`T`, `V`, `T`\>

Safe type that represents a dotted path of `T`. If the second argument is
provided, filters the paths to the ones matching the value value.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | `T` | the type of the object to get the paths |
| `V` | `unknown` | the type the paths should match including `undefined` |

#### Defined in

[lib/Form.context.ts:48](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.context.ts#L48)

___

### Result

Ƭ **Result**\<`S`, `E`\>: \{ `success`: `S`  } \| \{ `error`: `E`  }

A result type used to represent either a success or an error value.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `S` | the success value type |
| `E` | the error value type |

#### Defined in

[lib/helpers/adapters.ts:13](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/helpers/adapters.ts#L13)

___

### SetValue

Ƭ **SetValue**\<`V`\>: (`action`: `SetStateAction`\<[`Optional`](README.md#optional)\<`V`\>\>) => `void`

Function that receives an action to set a value of `V` and retunrs void.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `V` | the type of the value to change |

#### Type declaration

▸ (`action`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `SetStateAction`\<[`Optional`](README.md#optional)\<`V`\>\> |

##### Returns

`void`

#### Defined in

[lib/Form.provider.tsx:39](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.provider.tsx#L39)

___

### Struct

Ƭ **Struct**: `Record`\<`string`, `any`\>

A JavaScript structure-like object where keys are strings and values of any
type.

#### Defined in

[lib/Form.context.ts:21](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.context.ts#L21)

___

### ValueByPath

Ƭ **ValueByPath**\<`T`, `P`\>: `P` extends \`$\{infer S}.$\{infer R}\` ? `R` extends [`Path`](README.md#path)\<`T`[`S`]\> ? [`ValueByPath`](README.md#valuebypath)\<`T`[`S`], `R`\> : `R` extends \`$\{number}.$\{infer R2}\` ? `R2` extends [`Path`](README.md#path)\<`T`[`S`][`number`]\> ? [`ValueByPath`](README.md#valuebypath)\<`T`[`S`][`number`], `R2`\> : `R` extends \`$\{number}\` ? `T`[`S`][`number`] : `never` : `R` extends \`$\{number}\` ? `T`[`S`][`number`] : `never` : `P` extends \`$\{infer S}\` ? `T`[`S`] : `never`

Helper type to look up the type of the value of the passed path `P`.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends [`Struct`](README.md#struct) | the type of the object of the path |
| `P` | extends [`Path`](README.md#path)\<`T`\> | the [Path](README.md#path) type to get the value type |

#### Defined in

[lib/Form.context.ts:107](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.context.ts#L107)

## Functions

### ArrayField

▸ **ArrayField**\<`T`, `K`\>(`props`): `ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

Helper component for array fields with finner control over the re-renders.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Struct`](README.md#struct) |
| `K` | extends `string` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | [`ArrayFieldProps`](interfaces/ArrayFieldProps.md)\<`T`, `K`\> | the array field props |

#### Returns

`ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

#### Defined in

[lib/components/ArrayField.component.tsx:62](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/components/ArrayField.component.tsx#L62)

___

### Field

▸ **Field**\<`T`, `K`, `D`\>(`props`): `ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

Helper component for rendering fields with finner control over the re-renders

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Struct`](README.md#struct) |
| `K` | extends `string` |
| `D` | [`Optional`](README.md#optional)\<[`ValueByPath`](README.md#valuebypath)\<`T`, `K`\>\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | [`FieldProps`](interfaces/FieldProps.md)\<`T`, `K`, `D`\> | the field props |

#### Returns

`ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

#### Defined in

[lib/components/Field.component.tsx:78](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/components/Field.component.tsx#L78)

___

### FormProvider

▸ **FormProvider**\<`T`\>(`props`): `ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

The form context provider component.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Struct`](README.md#struct) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | [`FormProviderProps`](interfaces/FormProviderProps.md)\<`T`\> | the provider component props |

#### Returns

`ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

#### Defined in

[lib/Form.provider.tsx:140](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.provider.tsx#L140)

___

### arrayFieldOf

▸ **arrayFieldOf**\<`T`\>(): [`ArrayFieldOf`](README.md#arrayfieldof)\<`T`\>

Utility function which helps you create an [ArrayField](README.md#arrayfield) component of
an specific struct type. Once you have this, the only type parameter left is
the [Path\<T\>](README.md#path) of the property which is an array.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Struct`](README.md#struct) |

#### Returns

[`ArrayFieldOf`](README.md#arrayfieldof)\<`T`\>

an ArrayField of the specified struct type

**`Example`**

```
interface User {
  name: string;
  roles: Role[];
}

const ArrayField = arrayFieldOf<User>();

<ArrayField name="roles">
  ...
</ArrayField>
```

#### Defined in

[lib/components/ArrayField.component.tsx:100](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/components/ArrayField.component.tsx#L100)

___

### fieldOf

▸ **fieldOf**\<`T`\>(): [`FieldOf`](README.md#fieldof)\<`T`\>

Utility function which helps you create a [Field](README.md#field) component of an
specific struct type. Once you have this, the only type parameters left is
the [Path\<T\>](README.md#path) of the property and the optional fallback type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Struct`](README.md#struct) |

#### Returns

[`FieldOf`](README.md#fieldof)\<`T`\>

a Field of the specified struct type

**`Example`**

```
interface User {
  age: number;
  name: string;
}

const Field = fieldOf<User>();

// Now path may only be "name" or "age"
<Field path="name" fallback={""}>
  {({ value, setValue, setTouched, required, error }) => (
    <label>
      {`Name: ${required ? "*" : ""}`}
      <input
        type="number"
        onChange={e => setValue(e.target.value)}
        onBlur={setTouched}
        value={value}
      />
      {error && <small>{error}</small>}
    </label>
  )}
</Field>
```

#### Defined in

[lib/components/Field.component.tsx:137](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/components/Field.component.tsx#L137)

___

### noValidate

▸ **noValidate**\<`T`\>(): [`Adapter`](interfaces/Adapter.md)\<`T`\>

Helper function that creates an [Adapter\<T\>](interfaces/Adapter.md) to bypass the
form validation.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends [`Struct`](README.md#struct) | struct type of the form values |

#### Returns

[`Adapter`](interfaces/Adapter.md)\<`T`\>

an adapter to bypass validation

#### Defined in

[lib/helpers/adapters.ts:65](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/helpers/adapters.ts#L65)

___

### useArrayField

▸ **useArrayField**\<`T`, `V`\>(`path`): [`UseArrayField`](interfaces/UseArrayField.md)\<`V`\>

A hook to handle array field in the form. It provides the array field items
to iterate over and a few helper functions to handle changes and renders on
the array.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Struct`](README.md#struct) |
| `V` | `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`Path`](README.md#path)\<`T`, `V`[]\> | the path of the array field in `T` |

#### Returns

[`UseArrayField`](interfaces/UseArrayField.md)\<`V`\>

an object containing the array items and helper array functions

#### Defined in

[lib/hooks/useArrayField.ts:104](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/hooks/useArrayField.ts#L104)

___

### useField

▸ **useField**\<`T`, `V`, `D`\>(`path`, `fallback?`): [`UseField`](interfaces/UseField.md)\<`V`, `D`\>

A hook to handle fields in the form. It provides the current value of the
field and helper function to change its state.

If the `fallback` parameter is not set, the default value is `undefined`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Struct`](README.md#struct) |
| `V` | `V` |
| `D` | [`Optional`](README.md#optional)\<`V`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`Path`](README.md#path)\<`T`, [`Optional`](README.md#optional)\<`V`\>\> | the path of the field in `T` |
| `fallback?` | `D` | optional default value the field should take |

#### Returns

[`UseField`](interfaces/UseField.md)\<`V`, `D`\>

an object with the field value and some helper functions

#### Defined in

[lib/hooks/useField.ts:40](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/hooks/useField.ts#L40)

___

### useFieldValidation

▸ **useFieldValidation**\<`T`\>(`path`): [`UseFieldValidation`](interfaces/UseFieldValidation.md)

A hook to retrieve validation related states of a field.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Struct`](README.md#struct) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`Path`](README.md#path)\<`T`\> | the path of the field in `T` |

#### Returns

[`UseFieldValidation`](interfaces/UseFieldValidation.md)

an object with validation related states

#### Defined in

[lib/hooks/useFieldValidation.ts:27](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/hooks/useFieldValidation.ts#L27)

___

### useForm

▸ **useForm**\<`T`\>(): [`FormCtxt`](interfaces/FormCtxt.md)\<`T`\>

A hook to access the entire value of `FormCtxt<T>`. If you want just some
properties of the context, use [useFormSelector](README.md#useformselector) instead for an
increased performance and avoid unnecessary renders.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Struct`](README.md#struct) |

#### Returns

[`FormCtxt`](interfaces/FormCtxt.md)\<`T`\>

the entire value of the form context

#### Defined in

[lib/Form.context.ts:209](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.context.ts#L209)

___

### useFormSelector

▸ **useFormSelector**\<`T`, `V`\>(`selector`): `V`

A hook to select a value from the form `FormCtxt<T>`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Struct`](README.md#struct) |
| `V` | `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | (`value`: [`FormCtxt`](interfaces/FormCtxt.md)\<`T`\>) => `V` | a function to select a value from the context |

#### Returns

`V`

the selected value

#### Defined in

[lib/Form.context.ts:221](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.context.ts#L221)
