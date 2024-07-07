[**@lynxts/core**](../README.md) • **Docs**

***

[@lynxts/core](../README.md) / arrayFieldOf

# Function: arrayFieldOf()

> **arrayFieldOf**\<`T`\>(): [`ArrayFieldOf`](../type-aliases/ArrayFieldOf.md)\<`T`\>

Utility function which helps you create an [ArrayField](ArrayField.md) component of
an specific struct type. Once you have this, the only type parameter left is
the [Path\<T\>](../type-aliases/Path.md) of the property which is an array.

## Type Parameters

• **T** *extends* [`Struct`](../type-aliases/Struct.md)

## Returns

[`ArrayFieldOf`](../type-aliases/ArrayFieldOf.md)\<`T`\>

an ArrayField of the specified struct type

## Example

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

## Defined in

[components/ArrayField.component.tsx:101](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/components/ArrayField.component.tsx#L101)
