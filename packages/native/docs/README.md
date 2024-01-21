@lynxts/native

# Lynx.ts Native API

## Table of contents

### Interfaces

- [TextFiedProps](interfaces/TextFiedProps.md)

### Type Aliases

- [TextFieldOf](README.md#textfieldof)

### Functions

- [SubmitButton](README.md#submitbutton)
- [SubmitHighlight](README.md#submithighlight)
- [SubmitNativeFeedback](README.md#submitnativefeedback)
- [SubmitOpacity](README.md#submitopacity)
- [SubmitWithoutFeedback](README.md#submitwithoutfeedback)
- [TextField](README.md#textfield)
- [textFieldOf](README.md#textfieldof-1)

## Type Aliases

### TextFieldOf

Ƭ **TextFieldOf**\<`T`\>: (`props`: [`TextFiedProps`](interfaces/TextFiedProps.md)\<`T`\>) => `ReactElement`

Helper type to describe a [TextField](README.md#textfield) component of an specific struct
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
| `props` | [`TextFiedProps`](interfaces/TextFiedProps.md)\<`T`\> |

##### Returns

`ReactElement`

#### Defined in

[packages/native/src/lib/fields/TextField.component.tsx:70](https://github.com/JoseLion/lynxts/blob/main/packages/native/src/lib/fields/TextField.component.tsx#L70)

## Functions

### SubmitButton

▸ **SubmitButton**(`props`): `ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

Helper component based on Button which calls `submit()` from the
Form context upon press.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | `ButtonProps` | same as ButtonProps |

#### Returns

`ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

#### Defined in

[packages/native/src/lib/SubmitButton.component.tsx:12](https://github.com/JoseLion/lynxts/blob/main/packages/native/src/lib/SubmitButton.component.tsx#L12)

___

### SubmitHighlight

▸ **SubmitHighlight**(`props`): `ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

Helper component based on TouchableHighlight which calls `submit()`
from the Form context upon press.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | `TouchableHighlightProps` | same as TouchableHighlightProps |

#### Returns

`ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

#### Defined in

[packages/native/src/lib/SubmitHighlight.component.tsx:12](https://github.com/JoseLion/lynxts/blob/main/packages/native/src/lib/SubmitHighlight.component.tsx#L12)

___

### SubmitNativeFeedback

▸ **SubmitNativeFeedback**(`props`): `ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

Helper component based on TouchableNativeFeedback which calls
`submit()` from the Form context upon press.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | `TouchableNativeFeedbackProps` | same as TouchableNativeFeedbackProps |

#### Returns

`ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

#### Defined in

[packages/native/src/lib/SubmitNativeFeedback.component.tsx:12](https://github.com/JoseLion/lynxts/blob/main/packages/native/src/lib/SubmitNativeFeedback.component.tsx#L12)

___

### SubmitOpacity

▸ **SubmitOpacity**(`props`): `ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

Helper component based on TouchableOpacity which calls `submit()`
from the Form context upon press.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | `TouchableOpacityProps` | same as TouchableOpacityProps |

#### Returns

`ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

#### Defined in

[packages/native/src/lib/SubmitOpacity.component.tsx:12](https://github.com/JoseLion/lynxts/blob/main/packages/native/src/lib/SubmitOpacity.component.tsx#L12)

___

### SubmitWithoutFeedback

▸ **SubmitWithoutFeedback**(`props`): `ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

Helper component based on TouchableWithoutFeedback which calls
`submit()` from the Form context upon press.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | `TouchableWithoutFeedbackProps` | same as TouchableWithoutFeedbackProps |

#### Returns

`ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

#### Defined in

[packages/native/src/lib/SubmitWithoutFeedback.component.tsx:12](https://github.com/JoseLion/lynxts/blob/main/packages/native/src/lib/SubmitWithoutFeedback.component.tsx#L12)

___

### TextField

▸ **TextField**\<`T`\>(`props`): `ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

Helper component to work with TextInput core component within a
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
| `props` | [`TextFiedProps`](interfaces/TextFiedProps.md)\<`T`\> | the TextFiedProps plus the TextInput props |

#### Returns

`ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

#### Defined in

[packages/native/src/lib/fields/TextField.component.tsx:81](https://github.com/JoseLion/lynxts/blob/main/packages/native/src/lib/fields/TextField.component.tsx#L81)

___

### textFieldOf

▸ **textFieldOf**\<`T`\>(): [`TextFieldOf`](README.md#textfieldof)\<`T`\>

Utility function which helps you create a [TextField](README.md#textfield) component of an
specific struct type. Once you have this, the possible values for the `name`
prop can be inferred based on the struct type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Struct` |

#### Returns

[`TextFieldOf`](README.md#textfieldof)\<`T`\>

an Input of the specified struct type

**`Example`**

```
interface User {
  name: string;
  role: string;
}

const TextField = textFieldOf<User>();

<TextField name="name" label="Name:" />
<TextField name="role" label="Role:" />
```

#### Defined in

[packages/native/src/lib/fields/TextField.component.tsx:162](https://github.com/JoseLion/lynxts/blob/main/packages/native/src/lib/fields/TextField.component.tsx#L162)
