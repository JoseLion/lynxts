[**@lynxts/core**](../README.md) • **Docs**

***

[@lynxts/core](../README.md) / fieldOf

# Function: fieldOf()

> **fieldOf**\<`T`\>(): [`FieldOf`](../type-aliases/FieldOf.md)\<`T`\>

Utility function which helps you create a [Field](Field.md) component of an
specific struct type. Once you have this, the only type parameters left is
the [Path\<T\>](../type-aliases/Path.md) of the property and the optional fallback type.

## Type parameters

• **T** *extends* [`Struct`](../type-aliases/Struct.md)

## Returns

[`FieldOf`](../type-aliases/FieldOf.md)\<`T`\>

a Field of the specified struct type

## Example

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

## Source

[lib/components/Field.component.tsx:138](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/components/Field.component.tsx#L138)
