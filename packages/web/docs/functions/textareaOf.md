[**@lynxts/web**](../README.md) • **Docs**

***

[@lynxts/web](../README.md) / textareaOf

# Function: textareaOf()

> **textareaOf**\<`T`\>(): [`TextareaOf`](../type-aliases/TextareaOf.md)\<`T`\>

Utility function which helps you create a [Textarea](Textarea.md) component of an
specific struct type. Once you have this, the possible values for the `name`
prop can be inferred based on the struct type.

## Type Parameters

• **T** *extends* `Struct`

## Returns

[`TextareaOf`](../type-aliases/TextareaOf.md)\<`T`\>

a Textarea of the specified struct type

## Example

```
interface User {
  name: string;
  role: string;
}

const Textarea = textareaOf<User>();

<Textarea name="name" label="Name:" />
<Textarea name="role" label="Role:" />
```

## Defined in

[packages/web/src/lib/fields/Textarea.component.tsx:149](https://github.com/JoseLion/lynxts/blob/main/packages/web/src/lib/fields/Textarea.component.tsx#L149)
