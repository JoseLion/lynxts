[@lynxts/core](../README.md) / FieldProps

# Interface: FieldProps<T, K, D\>

The props of the [ArrayField](../README.md#arrayfield) component.

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends [`Struct`](../README.md#struct) | struct type of the form values |
| `K` | extends [`Path`](../README.md#path)<`T`, [`ValueByPath`](../README.md#valuebypath)<`T`, `K`\>\> | the path type of the field |
| `D` | extends [`Optional`](../README.md#optional)<[`ValueByPath`](../README.md#valuebypath)<`T`, `K`\>\> | the default type to use in case of fallback |

## Table of contents

### Properties

- [children](FieldProps.md#children)
- [deps](FieldProps.md#deps)
- [fallback](FieldProps.md#fallback)
- [path](FieldProps.md#path)

## Properties

### children

• **children**: (`props`: [`FieldRenderProps`](FieldRenderProps.md)<`T`, `K`, `D`\>) => `ReactNode`

#### Type declaration

▸ (`props`): `ReactNode`

The children is a function which takes the result of [useField](../README.md#usefield) and
[useFieldValidation](../README.md#usefieldvalidation) hooks in the first argument and returns a
React.js node.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | [`FieldRenderProps`](FieldRenderProps.md)<`T`, `K`, `D`\> | the render props same as `useField` result |

##### Returns

`ReactNode`

a React.js node

#### Defined in

[lib/components/Field.component.tsx:53](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/components/Field.component.tsx#L53)

___

### deps

• `Optional` **deps**: `DependencyList`

The children render result is memoized in this component and it will only
change if the field value or its validation props changes. This prop lets
you add an additional dependency list to that memoization, so you can add
external state changes when required.

#### Defined in

[lib/components/Field.component.tsx:60](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/components/Field.component.tsx#L60)

___

### fallback

• `Optional` **fallback**: `D`

optional default value the field should take

#### Defined in

[lib/components/Field.component.tsx:64](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/components/Field.component.tsx#L64)

___

### path

• **path**: `K`

the path of the field in `T`

#### Defined in

[lib/components/Field.component.tsx:68](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/components/Field.component.tsx#L68)
