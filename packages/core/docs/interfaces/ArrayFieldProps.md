[@lynxts/core](../README.md) / ArrayFieldProps

# Interface: ArrayFieldProps<T, K\>

The props of the [ArrayField](../README.md#arrayfield) component.

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends [`Struct`](../README.md#struct) | struct type of the form values |
| `K` | extends [`Path`](../README.md#path)<`T`, `unknown`[]\> | the path type of the array field |

## Table of contents

### Properties

- [children](ArrayFieldProps.md#children)
- [deps](ArrayFieldProps.md#deps)
- [name](ArrayFieldProps.md#name)

## Properties

### children

• **children**: (`props`: [`UseArrayField`](UseArrayField.md)<[`ArrayValue`](../README.md#arrayvalue)<`T`, `K`\>\>) => `ReactNode`

#### Type declaration

▸ (`props`): `ReactNode`

The children is a function which takes the result of [useArrayField](../README.md#usearrayfield)
hook in the first argument and returns a React.js node.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | [`UseArrayField`](UseArrayField.md)<[`ArrayValue`](../README.md#arrayvalue)<`T`, `K`\>\> | render props same as the `useArrayField` hook result |

##### Returns

`ReactNode`

a React.js node

#### Defined in

[lib/components/ArrayField.component.tsx:41](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/components/ArrayField.component.tsx#L41)

___

### deps

• `Optional` **deps**: `DependencyList`

The children render result is memoized in this component and it will only
change if the array field value changes. This prop lets you add an
additional dependency list to that memoization, so you can add external
state changes when required.

#### Defined in

[lib/components/ArrayField.component.tsx:48](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/components/ArrayField.component.tsx#L48)

___

### name

• **name**: `K`

The path to the array field in `T`.

#### Defined in

[lib/components/ArrayField.component.tsx:52](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/components/ArrayField.component.tsx#L52)
