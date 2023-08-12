[Lynx.ts Core API](../README.md) / UseArrayField

# Interface: UseArrayField<V\>

The result of the [useArrayField](../README.md#usearrayfield) hook.

## Type parameters

| Name | Description |
| :------ | :------ |
| `V` | the type of the array value |

## Table of contents

### Properties

- [append](UseArrayField.md#append)
- [clear](UseArrayField.md#clear)
- [handle](UseArrayField.md#handle)
- [insert](UseArrayField.md#insert)
- [items](UseArrayField.md#items)
- [keygen](UseArrayField.md#keygen)
- [prepend](UseArrayField.md#prepend)
- [remove](UseArrayField.md#remove)
- [replace](UseArrayField.md#replace)

## Properties

### append

• **append**: (`item`: `Partial`<`V`\>) => `void`

#### Type declaration

▸ (`item`): `void`

Appends a new item to the end of the array.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `Partial`<`V`\> | the item to append |

##### Returns

`void`

#### Defined in

[lib/hooks/useArrayField.ts:19](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/hooks/useArrayField.ts#L19)

___

### clear

• **clear**: () => `void`

#### Type declaration

▸ (): `void`

Clears the array by setting it's value to `undefined`.

##### Returns

`void`

#### Defined in

[lib/hooks/useArrayField.ts:23](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/hooks/useArrayField.ts#L23)

___

### handle

• **handle**: <F\>(`action`: `F`, ...`args`: `Parameters`<`F`\>) => () => `void`

#### Type declaration

▸ <`F`\>(`action`, `...args`): () => `void`

Helper function that creates a handler function which runs the given
action with the given parameters.

##### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends (...`args`: `any`[]) => `void` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `action` | `F` | the action to make the handle of |
| `...args` | `Parameters`<`F`\> | the parameters of the action |

##### Returns

`fn`

a handle function that runs the action with the given parameters

▸ (): `void`

##### Returns

`void`

**`Example`**

```
<button onClick={handle(append, { })}>{"Add Item"}</button>
```

#### Defined in

[lib/hooks/useArrayField.ts:37](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/hooks/useArrayField.ts#L37)

___

### insert

• **insert**: (`item`: `Partial`<`V`\>, `at`: `number`) => `void`

#### Type declaration

▸ (`item`, `at`): `void`

Insert a new item at an specific index of the array. To encourage type
safety, this function follows these rules upon index outbounds:
- If the index is greater than the array size, the item is added to the
end of the array.
- A negative index is treated as an offset, so -2 refers to the second to
last element of the array.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `Partial`<`V`\> | the item to insert |
| `at` | `number` | the index to insert the item at |

##### Returns

`void`

#### Defined in

[lib/hooks/useArrayField.ts:49](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/hooks/useArrayField.ts#L49)

___

### items

• **items**: `Partial`<`V`\>[]

The currret items `Partial<V>[]` of the array. These values are partial
because they might not be present or changed by the user yet.

#### Defined in

[lib/hooks/useArrayField.ts:54](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/hooks/useArrayField.ts#L54)

___

### keygen

• **keygen**: <S\>(`index`: `number`, `key?`: `string` \| `S`) => `string`

#### Type declaration

▸ <`S`\>(`index`, `key?`): `string`

Helper function to retrieve an auto-generated key string which is memoized
for each index. The second parameter serves as a prefferd unique key
override to use instead of the auto-generated one.

You should pass the second parameter whenever it's possible because the
auto-generated key is index-based, so it may cause additional renders upon
reordering the array.

##### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `Object` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | the current index of the array |
| `key?` | `string` \| `S` | the preferred key value to use |

##### Returns

`string`

a key value to use on React.js `key` prop

#### Defined in

[lib/hooks/useArrayField.ts:68](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/hooks/useArrayField.ts#L68)

___

### prepend

• **prepend**: (`item`: `Partial`<`V`\>) => `void`

#### Type declaration

▸ (`item`): `void`

Prepends a new item to the start of the array.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `Partial`<`V`\> | the item to prepend |

##### Returns

`void`

#### Defined in

[lib/hooks/useArrayField.ts:74](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/hooks/useArrayField.ts#L74)

___

### remove

• **remove**: (`at`: `number`) => `void`

#### Type declaration

▸ (`at`): `void`

Removes the item at the specified index.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `at` | `number` | the index of the item |

##### Returns

`void`

#### Defined in

[lib/hooks/useArrayField.ts:80](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/hooks/useArrayField.ts#L80)

___

### replace

• **replace**: (`item`: `Partial`<`V`\>, `at`: `number`) => `void`

#### Type declaration

▸ (`item`, `at`): `void`

Replaces an item at an specific index of the array with another. To
encourage type safety, this function follows these rules upon index
outbounds:
- If the index is greater than the array size, the item is added to the
end of the array.
- A negative index is treated as an offset, so -2 refers to the second to
last element of the array.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `Partial`<`V`\> | the item to replace another |
| `at` | `number` | the index that should be replaced |

##### Returns

`void`

#### Defined in

[lib/hooks/useArrayField.ts:93](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/hooks/useArrayField.ts#L93)
