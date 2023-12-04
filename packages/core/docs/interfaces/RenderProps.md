[@lynxts/core](../README.md) / RenderProps

# Interface: RenderProps\<T\>

The renders props when the children of [FormProvider](../README.md#formprovider) is a function.

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends [`Struct`](../README.md#struct) | struct type of the form values |

## Table of contents

### Properties

- [handleChange](RenderProps.md#handlechange)
- [setValue](RenderProps.md#setvalue)
- [submit](RenderProps.md#submit)
- [values](RenderProps.md#values)

## Properties

### handleChange

• **handleChange**: \<K, A\>(`path`: `K`, `valueOrCallback`: [`Optional`](../README.md#optional)\<[`ValueByPath`](../README.md#valuebypath)\<`T`, `K`\>\> \| [`ChangeCallback`](../README.md#changecallback)\<`T`, `K`, `A`\>) => (...`args`: `A`) => `void`

#### Type declaration

▸ \<`K`, `A`\>(`path`, `valueOrCallback`): (...`args`: `A`) => `void`

Helper function which creates a handler to use on callback props and
change form values. It infers the arguments of the callback so they can be
used dreing the change callback.

##### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |
| `A` | extends `unknown`[] |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `K` | the path to change the value |
| `valueOrCallback` | [`Optional`](../README.md#optional)\<[`ValueByPath`](../README.md#valuebypath)\<`T`, `K`\>\> \| [`ChangeCallback`](../README.md#changecallback)\<`T`, `K`, `A`\> | either a value or a callback to change it |

##### Returns

`fn`

a function which infers the arguments of a callback where applied
         and returns void

▸ (`...args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `A` |

##### Returns

`void`

**`Example`**

```
<Input<Foo>
  name="foo"
  onChange={handleChange("foo", event => event.target.value)}
  value={values.foo}
/>
```

#### Defined in

[lib/Form.provider.tsx:66](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.provider.tsx#L66)

___

### setValue

• **setValue**: \<K\>(`path`: `K`) => [`SetValue`](../README.md#setvalue)\<[`ValueByPath`](../README.md#valuebypath)\<`T`, `K`\>\>

#### Type declaration

▸ \<`K`\>(`path`): [`SetValue`](../README.md#setvalue)\<[`ValueByPath`](../README.md#valuebypath)\<`T`, `K`\>\>

Helper function which creates a setter function for the specified path.

##### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `K` | the path to change the value |

##### Returns

[`SetValue`](../README.md#setvalue)\<[`ValueByPath`](../README.md#valuebypath)\<`T`, `K`\>\>

a value setter function

**`Example`**

```
<Input<Foo>
  name="foo"
  onChange={event => {
    const setFoo = setValue("foo");
    setFoo(event.target.value);
  }}
  value={values.foo}
/>
```

#### Defined in

[lib/Form.provider.tsx:88](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.provider.tsx#L88)

___

### submit

• **submit**: () => `void`

#### Type declaration

▸ (): `void`

Helper function that triggers the form submit on demand.

##### Returns

`void`

#### Defined in

[lib/Form.provider.tsx:92](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.provider.tsx#L92)

___

### values

• **values**: `Partial`\<`T`\>

The curretn values `Partial<T>` of the form. These values are partial
because they might not be present or changed by the user yet.

#### Defined in

[lib/Form.provider.tsx:97](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.provider.tsx#L97)
