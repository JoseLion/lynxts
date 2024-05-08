[**@lynxts/web**](../README.md) • **Docs**

***

[@lynxts/web](../README.md) / selectOf

# Function: selectOf()

> **selectOf**\<`T`\>(): [`SelectOf`](../type-aliases/SelectOf.md)\<`T`\>

Utility function which helps you create a [Select](Select.md) component of an
specific struct type. Once you have this, the possible values for the `name`
prop can be inferred based on the struct type and the type of the values is
infered from the resulting `Path<T>` of `name`.

## Type parameters

• **T** *extends* `Struct`

## Returns

[`SelectOf`](../type-aliases/SelectOf.md)\<`T`\>

a Select of the specified struct type

## Example

```
interface User {
  level: 1 | 2 | 3;
  role: "superadmin" | "admin" | "user";
}

const Select = selectOf<User>();

<Select
  name="level"
  options={[1, 2, 3]}
 />
<Select
  name="role"
  options={["superadmin", "admin", "user"]}
/>
```

## Source

[packages/web/src/lib/fields/Select.component.tsx:202](https://github.com/JoseLion/lynxts/blob/main/packages/web/src/lib/fields/Select.component.tsx#L202)
