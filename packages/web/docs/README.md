@lynxts/web

# Lynx.ts Web API

## Table of contents

### Interfaces

- [FormProps](interfaces/FormProps.md)
- [InputProps](interfaces/InputProps.md)
- [SelectProps](interfaces/SelectProps.md)
- [TextareaProps](interfaces/TextareaProps.md)

### Type Aliases

- [InputOf](README.md#inputof)
- [SelectOf](README.md#selectof)
- [TextareaOf](README.md#textareaof)

### Functions

- [Form](README.md#form)
- [Input](README.md#input)
- [Select](README.md#select)
- [Textarea](README.md#textarea)
- [inputOf](README.md#inputof-1)
- [selectOf](README.md#selectof-1)
- [textareaOf](README.md#textareaof-1)

## Type Aliases

### InputOf

Ƭ **InputOf**\<`T`\>: (`props`: [`InputProps`](interfaces/InputProps.md)\<`T`\>) => `ReactElement`

Helper type to describe an [Input](README.md#input) component of an specific struct `T`.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `Struct` | struct type of the form values |

#### Type declaration

▸ (`props`): `ReactElement`

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`InputProps`](interfaces/InputProps.md)\<`T`\> |

##### Returns

`ReactElement`

#### Defined in

[packages/web/src/lib/fields/Input.component.tsx:49](https://github.com/JoseLion/lynxts/blob/main/packages/web/src/lib/fields/Input.component.tsx#L49)

___

### SelectOf

Ƭ **SelectOf**\<`T`\>: \<K\>(`props`: [`SelectProps`](interfaces/SelectProps.md)\<`T`, `K`\>) => `ReactElement`

Helper type to describe a [Select](README.md#select) component of an specific struct `T`.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `Struct` | struct type of the form values |

#### Type declaration

▸ \<`K`\>(`props`): `ReactElement`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `Path`\<`T`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SelectProps`](interfaces/SelectProps.md)\<`T`, `K`\> |

##### Returns

`ReactElement`

#### Defined in

[packages/web/src/lib/fields/Select.component.tsx:68](https://github.com/JoseLion/lynxts/blob/main/packages/web/src/lib/fields/Select.component.tsx#L68)

___

### TextareaOf

Ƭ **TextareaOf**\<`T`\>: (`props`: [`TextareaProps`](interfaces/TextareaProps.md)\<`T`\>) => `ReactElement`

Helper type to describe a [Textarea](README.md#textarea) component of an specific struct
`T`.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `Struct` | struct type of the form values |

#### Type declaration

▸ (`props`): `ReactElement`

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`TextareaProps`](interfaces/TextareaProps.md)\<`T`\> |

##### Returns

`ReactElement`

#### Defined in

[packages/web/src/lib/fields/Textarea.component.tsx:51](https://github.com/JoseLion/lynxts/blob/main/packages/web/src/lib/fields/Textarea.component.tsx#L51)

## Functions

### Form

▸ **Form**\<`T`\>(`props`): `ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

The Form component is just like the FormProvider but its children
are wrapped around a `<form>` HTML element. This means you can simply use a
`submit` type form element to trigger the submit, just like a normal
`<form>` would.

**Note:** Because the FormProvider is in charge of the validation, the
defualt value of the `noValidate` prop of the `<form>` is set to `true`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Struct` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | [`FormProps`](interfaces/FormProps.md)\<`T`\> | the FromProvider props plus the HTMLFormElement props |

#### Returns

`ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

#### Defined in

[packages/web/src/lib/Form.component.tsx:28](https://github.com/JoseLion/lynxts/blob/main/packages/web/src/lib/Form.component.tsx#L28)

___

### Input

▸ **Input**\<`T`\>(`props`): `ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

Helper component to work with `<input>` elements within a `FormProvider<T>`.
I.e., it implements the useField and useFieldValidation
hooks to provide the value state management and validation helpers right out
of the box.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Struct` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | [`InputProps`](interfaces/InputProps.md)\<`T`\> | the InputProps plus the HTMLInputElement attributes |

#### Returns

`ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

#### Defined in

[packages/web/src/lib/fields/Input.component.tsx:60](https://github.com/JoseLion/lynxts/blob/main/packages/web/src/lib/fields/Input.component.tsx#L60)

___

### Select

▸ **Select**\<`T`, `K`\>(`props`): `ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

Helper component to work with `<select>` elements within a `FormProvider<T>`.
I.e., it implements the useField and useFieldValidation
hooks to provide the value state management and validation helpers right out
of the box.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Struct` |
| `K` | extends `string` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | [`SelectProps`](interfaces/SelectProps.md)\<`T`, `K`\> | the SelectProps plus the HTMLSelectElement attributes |

#### Returns

`ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

#### Defined in

[packages/web/src/lib/fields/Select.component.tsx:81](https://github.com/JoseLion/lynxts/blob/main/packages/web/src/lib/fields/Select.component.tsx#L81)

___

### Textarea

▸ **Textarea**\<`T`\>(`props`): `ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

Helper component to work with `<textarea>` elements within a
`FormProvider<T>`. I.e., it implements the useField and
useFieldValidation hooks to provide the value state management and
validation helpers right out of the box.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Struct` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | [`TextareaProps`](interfaces/TextareaProps.md)\<`T`\> | the TextareaProps plus the HTMLTextAreaElement attributes |

#### Returns

`ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

#### Defined in

[packages/web/src/lib/fields/Textarea.component.tsx:62](https://github.com/JoseLion/lynxts/blob/main/packages/web/src/lib/fields/Textarea.component.tsx#L62)

___

### inputOf

▸ **inputOf**\<`T`\>(): [`InputOf`](README.md#inputof)\<`T`\>

Utility function which helps you create an [Input](README.md#input) component of an
specific struct type. Once you have this, the possible values for the `name`
prop can be inferred based on the struct type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Struct` |

#### Returns

[`InputOf`](README.md#inputof)\<`T`\>

an Input of the specified struct type

**`Example`**

```
interface User {
  name: string;
  role: string;
}

const Input = inputOf<User>();

<Input name="name" label="Name:" />
<Input name="role" label="Role:" />
```

#### Defined in

[packages/web/src/lib/fields/Input.component.tsx:147](https://github.com/JoseLion/lynxts/blob/main/packages/web/src/lib/fields/Input.component.tsx#L147)

___

### selectOf

▸ **selectOf**\<`T`\>(): [`SelectOf`](README.md#selectof)\<`T`\>

Utility function which helps you create a [Select](README.md#select) component of an
specific struct type. Once you have this, the possible values for the `name`
prop can be inferred based on the struct type and the type of the values is
infered from the resulting `Path<T>` of `name`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Struct` |

#### Returns

[`SelectOf`](README.md#selectof)\<`T`\>

a Select of the specified struct type

**`Example`**

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

#### Defined in

[packages/web/src/lib/fields/Select.component.tsx:202](https://github.com/JoseLion/lynxts/blob/main/packages/web/src/lib/fields/Select.component.tsx#L202)

___

### textareaOf

▸ **textareaOf**\<`T`\>(): [`TextareaOf`](README.md#textareaof)\<`T`\>

Utility function which helps you create a [Textarea](README.md#textarea) component of an
specific struct type. Once you have this, the possible values for the `name`
prop can be inferred based on the struct type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Struct` |

#### Returns

[`TextareaOf`](README.md#textareaof)\<`T`\>

a Textarea of the specified struct type

**`Example`**

```
interface User {
  name: string;
  role: string;
}

const Textarea = textareaOf<User>();

<Textarea name="name" label="Name:" />
<Textarea name="role" label="Role:" />
```

#### Defined in

[packages/web/src/lib/fields/Textarea.component.tsx:149](https://github.com/JoseLion/lynxts/blob/main/packages/web/src/lib/fields/Textarea.component.tsx#L149)
