[**@lynxts/native**](../README.md) • **Docs**

***

[@lynxts/native](../README.md) / textFieldOf

# Function: textFieldOf()

> **textFieldOf**\<`T`\>(): [`TextFieldOf`](../type-aliases/TextFieldOf.md)\<`T`\>

Utility function which helps you create a [TextField](TextField.md) component of an
specific struct type. Once you have this, the possible values for the `name`
prop can be inferred based on the struct type.

## Type Parameters

• **T** *extends* `Struct`

## Returns

[`TextFieldOf`](../type-aliases/TextFieldOf.md)\<`T`\>

an Input of the specified struct type

## Example

```
interface User {
  name: string;
  role: string;
}

const TextField = textFieldOf<User>();

<TextField name="name" label="Name:" />
<TextField name="role" label="Role:" />
```

## Defined in

[packages/native/src/lib/fields/TextField.component.tsx:162](https://github.com/JoseLion/lynxts/blob/main/packages/native/src/lib/fields/TextField.component.tsx#L162)
