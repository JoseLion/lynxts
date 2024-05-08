[**@lynxts/core**](../README.md) • **Docs**

***

[@lynxts/core](../README.md) / RenderProps

# Interface: RenderProps\<T\>

The renders props when the children of [FormProvider](../functions/FormProvider.md) is a function.

## Type parameters

• **T** *extends* [`Struct`](../type-aliases/Struct.md)

struct type of the form values

## Properties

### handleChange()

> **handleChange**: \<`K`, `A`\>(`path`, `valueOrCallback`) => (...`args`) => `void`

Helper function which creates a handler to use on callback props and
change form values. It infers the arguments of the callback so they can be
used dreing the change callback.

#### Example

```
<Input<Foo>
  name="foo"
  onChange={handleChange("foo", event => event.target.value)}
  value={values.foo}
/>
```

#### Type parameters

• **K** *extends* `string`

• **A** *extends* `unknown`[]

#### Parameters

• **path**: `K`

the path to change the value

• **valueOrCallback**: [`Optional`](../type-aliases/Optional.md)\<[`ValueByPath`](../type-aliases/ValueByPath.md)\<`T`, `K`\>\> \| [`ChangeCallback`](../type-aliases/ChangeCallback.md)\<`T`, `K`, `A`\>

either a value or a callback to change it

#### Returns

`Function`

##### Parameters

• ...**args**: `A`

##### Returns

`void`

#### Source

[lib/Form.provider.tsx:65](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.provider.tsx#L65)

***

### setValue()

> **setValue**: \<`K`\>(`path`) => [`SetValue`](../type-aliases/SetValue.md)\<[`ValueByPath`](../type-aliases/ValueByPath.md)\<`T`, `K`\>\>

Helper function which creates a setter function for the specified path.

#### Example

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

#### Type parameters

• **K** *extends* `string`

#### Parameters

• **path**: `K`

the path to change the value

#### Returns

[`SetValue`](../type-aliases/SetValue.md)\<[`ValueByPath`](../type-aliases/ValueByPath.md)\<`T`, `K`\>\>

#### Source

[lib/Form.provider.tsx:87](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.provider.tsx#L87)

***

### submit()

> **submit**: () => `void`

Helper function that triggers the form submit on demand.

#### Returns

`void`

#### Source

[lib/Form.provider.tsx:91](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.provider.tsx#L91)

***

### values

> **values**: `Partial`\<`T`\>

The curretn values `Partial<T>` of the form. These values are partial
because they might not be present or changed by the user yet.

#### Source

[lib/Form.provider.tsx:96](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.provider.tsx#L96)
