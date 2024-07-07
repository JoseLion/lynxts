[**@lynxts/web**](../README.md) • **Docs**

***

[@lynxts/web](../README.md) / inputOf

# Function: inputOf()

> **inputOf**\<`T`\>(): [`InputOf`](../type-aliases/InputOf.md)\<`T`\>

Utility function which helps you create an [Input](Input.md) component of an
specific struct type. Once you have this, the possible values for the `name`
prop can be inferred based on the struct type.

## Type Parameters

• **T** *extends* `Struct`

## Returns

[`InputOf`](../type-aliases/InputOf.md)\<`T`\>

an Input of the specified struct type

## Example

```
interface User {
  name: string;
  role: string;
}

const Input = inputOf<User>();

<Input name="name" label="Name:" />
<Input name="role" label="Role:" />
```

## Defined in

[packages/web/src/lib/fields/Input.component.tsx:147](https://github.com/JoseLion/lynxts/blob/main/packages/web/src/lib/fields/Input.component.tsx#L147)
