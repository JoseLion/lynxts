[**@lynxts/core**](../README.md) • **Docs**

***

[@lynxts/core](../README.md) / UseArrayField

# Interface: UseArrayField\<V\>

The result of the [useArrayField](../functions/useArrayField.md) hook.

## Type Parameters

• **V**

the type of the array value

## Properties

### append()

> **append**: (`item`) => `void`

Appends a new item to the end of the array.

#### Parameters

• **item**: `Partial`\<`V`\>

the item to append

#### Returns

`void`

#### Defined in

[hooks/useArrayField.ts:19](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/hooks/useArrayField.ts#L19)

***

### clear()

> **clear**: () => `void`

Clears the array by setting it's value to `undefined`.

#### Returns

`void`

#### Defined in

[hooks/useArrayField.ts:23](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/hooks/useArrayField.ts#L23)

***

### handle()

> **handle**: \<`F`\>(`action`, ...`args`) => () => `void`

#### Type Parameters

• **F** *extends* (...`args`) => `void`

#### Parameters

• **action**: `F`

the action to make the handle of

• ...**args**: `Parameters`\<`F`\>

the parameters of the action

#### Returns

`Function`

a handle function that runs the action with the given parameters

##### Returns

`void`

#### Defined in

[hooks/useArrayField.ts:37](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/hooks/useArrayField.ts#L37)

***

### insert()

> **insert**: (`item`, `at`) => `void`

Insert a new item at an specific index of the array. To encourage type
safety, this function follows these rules upon index outbounds:
- If the index is greater than the array size, the item is added to the
end of the array.
- A negative index is treated as an offset, so -2 refers to the second to
last element of the array.

#### Parameters

• **item**: `Partial`\<`V`\>

the item to insert

• **at**: `number`

the index to insert the item at

#### Returns

`void`

#### Defined in

[hooks/useArrayField.ts:49](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/hooks/useArrayField.ts#L49)

***

### items

> **items**: `Partial`\<`V`\>[]

The currret items `Partial<V>[]` of the array. These values are partial
because they might not be present or changed by the user yet.

#### Defined in

[hooks/useArrayField.ts:54](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/hooks/useArrayField.ts#L54)

***

### keygen()

> **keygen**: \<`S`\>(`index`, `key`?) => `string`

#### Type Parameters

• **S** *extends* `object`

#### Parameters

• **index**: `number`

the current index of the array

• **key?**: `string` \| `S`

the preferred key value to use

#### Returns

`string`

a key value to use on React.js `key` prop

#### Defined in

[hooks/useArrayField.ts:68](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/hooks/useArrayField.ts#L68)

***

### prepend()

> **prepend**: (`item`) => `void`

Prepends a new item to the start of the array.

#### Parameters

• **item**: `Partial`\<`V`\>

the item to prepend

#### Returns

`void`

#### Defined in

[hooks/useArrayField.ts:74](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/hooks/useArrayField.ts#L74)

***

### remove()

> **remove**: (`at`) => `void`

Removes the item at the specified index.

#### Parameters

• **at**: `number`

the index of the item

#### Returns

`void`

#### Defined in

[hooks/useArrayField.ts:80](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/hooks/useArrayField.ts#L80)

***

### replace()

> **replace**: (`item`, `at`) => `void`

Replaces an item at an specific index of the array with another. To
encourage type safety, this function follows these rules upon index
outbounds:
- If the index is greater than the array size, the item is added to the
end of the array.
- A negative index is treated as an offset, so -2 refers to the second to
last element of the array.

#### Parameters

• **item**: `Partial`\<`V`\>

the item to replace another

• **at**: `number`

the index that should be replaced

#### Returns

`void`

#### Defined in

[hooks/useArrayField.ts:93](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/hooks/useArrayField.ts#L93)
