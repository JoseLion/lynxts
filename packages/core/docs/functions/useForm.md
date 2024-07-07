[**@lynxts/core**](../README.md) • **Docs**

***

[@lynxts/core](../README.md) / useForm

# Function: useForm()

> **useForm**\<`T`\>(): [`FormCtxt`](../interfaces/FormCtxt.md)\<`T`\>

A hook to access the entire value of `FormCtxt<T>`. If you want just some
properties of the context, use [useFormSelector](useFormSelector.md) instead for an
increased performance and avoid unnecessary renders.

## Type Parameters

• **T** *extends* [`Struct`](../type-aliases/Struct.md)

## Returns

[`FormCtxt`](../interfaces/FormCtxt.md)\<`T`\>

the entire value of the form context

## Defined in

[Form.context.ts:210](https://github.com/JoseLion/lynxts/blob/main/packages/core/src/lib/Form.context.ts#L210)
