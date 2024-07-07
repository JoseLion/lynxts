[**@lynxts/core**](../README.md) • **Docs**

***

[@lynxts/core](../README.md) / ArrayFieldProps

# Interface: ArrayFieldProps\<T, K\>

The props of the [ArrayField](../functions/ArrayField.md) component.

## Type Parameters

• **T** *extends* [`Struct`](../type-aliases/Struct.md)

struct type of the form values

• **K** *extends* [`Path`](../type-aliases/Path.md)\<`T`, `unknown`[]\>

the path type of the array field

## Properties

### children()

> **children**: (`props`) => `ReactNode`

#### Parameters

• **props**: [`UseArrayField`](UseArrayField.md)\<[`ArrayValue`](../type-aliases/ArrayValue.md)\<`T`, `K`\>\>

render props same as the `useArrayField` hook result

#### Returns

`ReactNode`

a React.js node

#### Defined in

[components/ArrayField.component.tsx:42](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/components/ArrayField.component.tsx#L42)

***

### deps?

> `optional` **deps**: `DependencyList`

The children render result is memoized in this component and it will only
change if the array field value changes. This prop lets you add an
additional dependency list to that memoization, so you can add external
state changes when required.

#### Defined in

[components/ArrayField.component.tsx:49](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/components/ArrayField.component.tsx#L49)

***

### name

> **name**: `K`

The path to the array field in `T`.

#### Defined in

[components/ArrayField.component.tsx:53](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/components/ArrayField.component.tsx#L53)
