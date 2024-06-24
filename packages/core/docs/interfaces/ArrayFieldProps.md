[**@lynxts/core**](../README.md) • **Docs**

***

[@lynxts/core](../README.md) / ArrayFieldProps

# Interface: ArrayFieldProps\<T, K\>

The props of the [ArrayField](../functions/ArrayField.md) component.

## Type parameters

• **T** *extends* [`Struct`](../type-aliases/Struct.md)

struct type of the form values

• **K** *extends* [`Path`](../type-aliases/Path.md)\<`T`, `unknown`[]\>

the path type of the array field

## Properties

### children()

> **children**: (`props`) => `ReactNode`

The children is a function which takes the result of [useArrayField](../functions/useArrayField.md)
hook in the first argument and returns a React.js node.

#### Parameters

• **props**: [`UseArrayField`](UseArrayField.md)\<[`ArrayValue`](../type-aliases/ArrayValue.md)\<`T`, `K`\>\>

render props same as the `useArrayField` hook result

#### Returns

`ReactNode`

#### Source

[lib/components/ArrayField.component.tsx:42](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/components/ArrayField.component.tsx#L42)

***

### deps?

> `optional` **deps**: `DependencyList`

The children render result is memoized in this component and it will only
change if the array field value changes. This prop lets you add an
additional dependency list to that memoization, so you can add external
state changes when required.

#### Source

[lib/components/ArrayField.component.tsx:49](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/components/ArrayField.component.tsx#L49)

***

### name

> **name**: `K`

The path to the array field in `T`.

#### Source

[lib/components/ArrayField.component.tsx:53](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/components/ArrayField.component.tsx#L53)
