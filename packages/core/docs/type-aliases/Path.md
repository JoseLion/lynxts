[**@lynxts/core**](../README.md) • **Docs**

***

[@lynxts/core](../README.md) / Path

# Type Alias: Path\<T, V\>

> **Path**\<`T`, `V`\>: `GetPath`\<`T`, `V`, `T`\>

Safe type that represents a dotted path of `T`. If the second argument is
provided, filters the paths to the ones matching the value value.

## Type Parameters

• **T**

the type of the object to get the paths

• **V** = `unknown`

the type the paths should match including `undefined`

## Defined in

[Form.context.ts:49](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.context.ts#L49)
