[![CI](https://github.com/JoseLion/lynxts/actions/workflows/ci.yml/badge.svg)](https://github.com/JoseLion/lynxts/actions/workflows/ci.yml)
[![Release](https://github.com/JoseLion/lynxts/actions/workflows/release.yml/badge.svg)](https://github.com/JoseLion/lynxts/actions/workflows/release.yml)
[![NPM version](https://img.shields.io/npm/v/@lynxts/core?logo=npm)](https://www.npmjs.com/package/@lynxts/core)
[![NPM bundle size](https://img.shields.io/bundlephobia/min/@lynxts/core)](https://www.npmjs.com/package/@lynxts/core)
[![NPM downloads](https://img.shields.io/npm/dm/@lynxts/core)](https://www.npmjs.com/package/@lynxts/core)
[![NPM license](https://img.shields.io/npm/l/@lynxts/core)](./LICENSE)
[![GitHub Release Date](https://img.shields.io/github/release-date/JoseLion/lynxts)](https://github.com/JoseLion/lynxts/releases)
[![Known Vulnerabilities](https://snyk.io/test/github/JoseLion/lynxts/badge.svg)](https://snyk.io/test/github/JoseLion/lynxts)

<img alt="Lynx.ts Logo" src="https://github.com/JoseLion/lynxts/blob/main/docs/assets/lynxts-logo%40512x512.png?raw=true" width="128">

# Lynx.ts Core

TypeScript-first, lightning fast Forms for React.js and React Native. The `@lynxts/core` package contains the main functionalities which can be used in any kind of React.js environment.

## Requirements

- **[React.js](https://react.dev/):** >=16.8.0

## Install

Using Yarn:
```
yarn add @lynxts/core
```

Using NPM:
```
npm i @lynxts/core
```

## Usage

Lynx.ts aims to make using forms as simple as possible, so you'll only need a few things to get started: The `FormProvider`, its validation schema, and some fields. We provide a few helpers to make things even easier and safer. 

```tsx
import { FormProvider, fieldOf } from "@lynxts/core";
import { ReactElement, memo, useCallback } from "react";
import { ObjectSchema, object, string } from "yup";

interface Login {
  email: string;
  password: string;
}

const schema: ObjectSchema<Login> = object({
  email: string().email().required(),
  password: string().required(),
});

const Field = fieldOf<Login>();

const SignIn = memo((): ReactElement => {

  const handleSubmit = useCallback((values: Login): void => {
    const { email, password } = values;
    // Use the validated value to sign in!
  }, []);

  return (
    <FormProvider onSubmit={handleSubmit} validation={schema}>
      {({ submit }) => (
        <>
          <Field name="email" fallback="">
            {({ handleChange, setTouched, value, required, error }) => (
              <label>
                {`Email:${required ? "*" : ""}`}
                <input
                  type="email"
                  onChange={handleChange(e => e.target.value)}
                  onBlur={setTouched}
                  value={value}
                />
                {error && <small>{error}</small>}
              </label>
            )}
          </Field>

          <Field name="password" fallback="">
            {({ handleChange, setTouched, value, required, error }) => (
              <label>
                {`Password:${required ? "*" : ""}`}
                <input
                  type="password"
                  onChange={handleChange(e => e.target.value)}
                  onBlur={setTouched}
                  value={value}
                />
                {error && <small>{error}</small>}
              </label>
            )}
          </Field>

          <button type="button" onClick={submit}>
            {"SignIn"}
          </button>
        </>
      )}
    </FormProvider>
  );
});
```

We're not using a DOM `<form>` so you can see Lynxt.ts can be used even if you don't have those kind of elements. Notice how defining the fields is very similar for these two text fields. We recommend creating your own field abstractions to avoid repetition. You can also take a look into [@lynxts/web](../web/README.md) and/or [@lynxts/native](../native/README.md), we're you can find the most common abstractions, like a `<Form>` componenent for the DOM, simple fields, and submit-like components for React Native.

### Accessing the form state

Occasionally you'll need to conditionally render something in your form based on the state of the fields. You can access the state in either two ways:

1. Move the form children to a separate component so you can access the form context with `useForm<T>()` hook, or better yet `useFormSelector<T>(ctxt => ctxt.values)`.
2. Use the render prop children of `<FormProvider>` which gives access to some parts if the form context.

There's no specially better option here, it may depend on your use case. However, keep in mind that the children of `<FormProvider>` is well memoized, so if you want to avoid unnecessary re-renders, always use `React.memo` to create the components that will be part of the form (or for every component, which is better yet 😉).

```tsx
<FormProvider
  onSubmit={handleSubmit}
  validation={schema}
  values={init}
>
  {({ values }) => (
    /* my well-memoized components go here... */
  )}
</FormProvider>
```

### Custom fields

Even though `@lynxts/web` and `@lynxts/native` provide abstractions of the most common fields on each environment, most of the time you'd want to use custom field components which may even come from any UI library, like Blueprint.js, MateriaUI, Ant Design, React Native Paper, etc. To use custom fields we provide 2 options:

#### 1. Hooks + Field abstraction (recommended)

This option consists on creating your own abstraction of the custom field component. This is the recommended way because of some benefits:

- The custom field becomes reusable.
- Better memoization to prevent unnecessary renders
- Delegate and standarize labels, a11y, validation messages, etc.

```tsx
import { Struct, useField, useFieldValidation } from "@lynxts/core";
import { memo, useCallback } from "react";

interface SwitchProps<T extends Struct> {
  children: string;
  name: Path<T, boolean>;
}

export const Switch = memo(<T extends Struct>(props: SwitchProps<T>): ReactElement => {
  const { children, name } = props;

  const { setTouched, setValue, value } = useField(name, false);
  const { error } = useFieldValidation(name);

  const handleChange = useCallback((next: "on" | "off"): void => {
    setValue(next === "on");
  }, [setValue]);

  return (
    <>
      <SwitchComponent
        aria-label={children}
        onChange={handleChange}
        onBlur={setTouched}
        value={value ? "on" : "off"}
      >
        {children}
      </SwitchComponent>
      {error && <small>{error}</small>}
    </>
  )
});
```

#### 2. Field helper component

The `<Field />` component is based on render props to provide the same hooks values to render a custom component. Even though this approach may look simpler, it comes with some tradeoffs:

- Render props never have a stable reference to themselves, so they re-render every time something changes.
- To avoid this problem, `<Field />` memoiazes the result of the render props.
- The component provides a `deps` props which allows the user to add external dependencies that should cause a re-rerender when changed.
- Components inside the render prop should be memoized, or they'll re-render either way.

```tsx
interface User {
  age: number;
  name: string;
}

const Field = fieldOf<User>();

// Now path may only be "name" or "age"
<Field path="name" fallback={""} deps={[/* exta deps */]}>
  {({ value, handleChange, setTouched, error }) => (
    <>
      <SwitchComponent
        aria-label="Turn on?"
        onChange={handleChange(next => next === "on")}
        onBlur={setTouched}
        value={value ? "on" : "off"}
      >
        {"Turn on?"}
      </SwitchComponent>
      {error && <small>{error}</small>}
    </>
  )}
</Field>
```

### Dynamic array field

It's not uncommon for a form to have dynamic field that can be added or removed by the user. To to make this problem simpler, Lynx.ts provides the `useArrayField(..)` hook and the `<ArrayField />` component, which is just an abstraction of the hook which uses render props to give access its values. These two provide well-memoized helper functions to work with dynamic array fields, like `append(..)`, `keygen(..)`, `remove(..)`, `replace(..)`, etc. With also access to the array `items` state, which shall be used to iterate over and render the fields dynamically.

> Just like the `<Field>` component, `<ArrayField>` also memoizes the result of the children render prop to avoid unnecessary renders. You can pass more dependencies on the `deps` prop to control when to re-render. For better results, always use `React.memo` on the componets used on render props.

```tsx
interface Role {
  id: string;
  level: number;
  type: string;
}

interface User {
  name: string;
  roles: Role[];
}

const ArrayField = arrayFieldOf<User>();

// ...

<TextField<User> name="name" label="Name" />

<ArrayField<User> name="roles" deps={[/* exta deps */]}>
  {({ items, keygen, handle, append, remove }) => (
    <fieldset>
      <legend>{"Roles"}</legend>
      <button type="button" onClick={handle(append, { level: 1 })}>
        {"+ Add new role"}
      </button>

      {items.map((item, i) => (
        <div key={keygen(i, item?.id)}>
          <NumberField name={`roles.${i}.level`} label="Level" />

          <TextField name={`roles.${i}.type`} label="Type" />

          <button type="button" onClick={handle(remove, i)}>
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      ))}
    </fieldset>
  )}
</ArrayField>
```

### Validation adapters

Lynx.ts works out-of-the-box with both [Yup](https://github.com/jquense/yup) and [Zod](https://zod.dev/) schemas, but if you'd prefer to use a different library, you need only to implement an `Adapter<T>` which tells Lynx.ts how the validation should work.

```ts
interface Adapter<T extends Struct> {
  required: (path: Path<T>) => boolean;
  validate: (values: Partial<T>) => Promise<Result<T, Map<Path<T>, string>>>;
  validateAt: <V>(path: Path<T>, value: V) => Promise<Result<true, string>>;
}
```

An `Adapter<T>` consist on implementing three function:

- **required:** A function that tells if a field in a path is required or not.
- **validate:** A function used to validate the Form values against a schema.
- **validateAt:** A function used to validate a single field value in a path.

The `validation` prop accepts either a Yup/Zod schema or a custom adapter, so you could create an function that creates an adapter from your especific schema:

```tsx
<FormProvider onSubmit={handleSubmit} validation={myAdapter(schema)}>
  {/* ... */}
</FormProvider>
```

#### Bypass validation


If you wish not use any validation at all, Lynx.ts provides a `noValidate()` adapter you can use for this purpose.

```tsx
import { FormProvider, noValidate } from "@lynxts/core";

interface User {
  age: number;
  name: string;
}

<FormProvider<User> onSubmit={handleSubmit} validation={noValidate()}>
  {/* ... */}
</FormProvider>
```

## Something's missing?

Suggestions are always welcome! Please create an [issue](https://github.com/JoseLion/lynxts/issues/new) describing the request, feature, or bug. We'll try to look into it as soon as possible 🙂

## Contributions

Contributions are very welcome! To do so, please fork this repository and open a Pull Request to the `main` branch.

## License

[MIT License](./LICENSE)
