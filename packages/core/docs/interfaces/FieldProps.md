[**@lynxts/core**](../README.md) • **Docs**

***

[@lynxts/core](../README.md) / FieldProps

# Interface: FieldProps\<T, K, D\>

The props of the [ArrayField](../functions/ArrayField.md) component.

## Type parameters

• **T** *extends* [`Struct`](../type-aliases/Struct.md)

struct type of the form values

• **K** *extends* [`Path`](../type-aliases/Path.md)\<`T`, [`ValueByPath`](../type-aliases/ValueByPath.md)\<`T`, `K`\>\>

the path type of the field

• **D** *extends* [`Optional`](../type-aliases/Optional.md)\<[`ValueByPath`](../type-aliases/ValueByPath.md)\<`T`, `K`\>\>

the default type to use in case of fallback

## Properties

### children()

> **children**: (`props`) => `ReactNode`

The children is a function which takes the result of [useField](../functions/useField.md) and
[useFieldValidation](../functions/useFieldValidation.md) hooks in the first argument and returns a
React.js node.

#### Parameters

• **props**: [`FieldRenderProps`](FieldRenderProps.md)\<`T`, `K`, `D`\>

the render props same as `useField` result

#### Returns

`ReactNode`

#### Source

[lib/components/Field.component.tsx:54](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/components/Field.component.tsx#L54)

***

### deps?

> `optional` **deps**: `DependencyList`

The children render result is memoized in this component and it will only
change if the field value or its validation props changes. This prop lets
you add an additional dependency list to that memoization, so you can add
external state changes when required.

#### Source

[lib/components/Field.component.tsx:61](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/components/Field.component.tsx#L61)

***

### fallback?

> `optional` **fallback**: `D`

optional default value the field should take

#### Source

[lib/components/Field.component.tsx:65](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/components/Field.component.tsx#L65)

***

### path

> **path**: `K`

the path of the field in `T`

#### Source

[lib/components/Field.component.tsx:69](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/components/Field.component.tsx#L69)
