[**@lynxts/core**](../README.md) • **Docs**

***

[@lynxts/core](../README.md) / ValueByPath

# Type alias: ValueByPath\<T, P\>

> **ValueByPath**\<`T`, `P`\>: `P` *extends* \`$\{infer S\}.$\{infer R\}\` ? `R` *extends* [`Path`](Path.md)\<`T`\[`S`\]\> ? [`ValueByPath`](ValueByPath.md)\<`T`\[`S`\], `R`\> : `R` *extends* \`$\{number\}.$\{infer R2\}\` ? `R2` *extends* [`Path`](Path.md)\<`T`\[`S`\]\[`number`\]\> ? [`ValueByPath`](ValueByPath.md)\<`T`\[`S`\]\[`number`\], `R2`\> : `R` *extends* \`$\{number\}\` ? `T`\[`S`\]\[`number`\] : `never` : `R` *extends* \`$\{number\}\` ? `T`\[`S`\]\[`number`\] : `never` : `P` *extends* \`$\{infer S\}\` ? `T`\[`S`\] : `never`

Helper type to look up the type of the value of the passed path `P`.

## Type parameters

• **T** *extends* [`Struct`](Struct.md)

the type of the object of the path

• **P** *extends* [`Path`](Path.md)\<`T`\>

the [Path](Path.md) type to get the value type

## Source

[lib/Form.context.ts:107](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.context.ts#L107)
