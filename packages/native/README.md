[![CI](https://github.com/JoseLion/lynxts/actions/workflows/ci.yml/badge.svg)](https://github.com/JoseLion/lynxts/actions/workflows/ci.yml)
[![Release](https://github.com/JoseLion/lynxts/actions/workflows/release.yml/badge.svg)](https://github.com/JoseLion/lynxts/actions/workflows/release.yml)
[![NPM version](https://img.shields.io/npm/v/@lynxts/native?logo=npm)](https://www.npmjs.com/package/@lynxts/native)
[![NPM bundle size](https://img.shields.io/bundlephobia/min/@lynxts/native)](https://www.npmjs.com/package/@lynxts/native)
[![NPM downloads](https://img.shields.io/npm/dm/@lynxts/native)](https://www.npmjs.com/package/@lynxts/native)
[![NPM license](https://img.shields.io/npm/l/@lynxts/native)](./LICENSE)
[![GitHub Release Date](https://img.shields.io/github/release-date/JoseLion/lynxts)](https://github.com/JoseLion/lynxts/releases)
[![Known Vulnerabilities](https://snyk.io/test/github/JoseLion/lynxts/badge.svg)](https://snyk.io/test/github/JoseLion/lynxts)

<img alt="Lynx.ts Logo" src="https://github.com/JoseLion/lynxts/blob/main/docs/assets/lynxts-logo%40512x512.png?raw=true" width="128">

# Lynx.ts Native

TypeScript-first, lightning fast Forms for React.js and React Native. The `@lynxts/native` package provides abstractions and helpers specifically for React Native, which makes working with forms simpler, more maintainable, and intuitive.

## Requirements

- **[lynxts/core](../core/README.md):** Same as the `@lynxts/native` version used
- **[React.js](https://react.dev/):** >=16.8.0
- **[React Native](https://react.dev/):** >=0.59.0

## Install

Using Yarn:
```
yarn add @lynxts/core @lynxts/native
```

Using NPM:
```
npm i @lynxts/core @lynxts/native
```

## Usage

To make using forms in React Native as simple as possible, `@lynxts/native` provides submit-like components based on every "touchable" core component (Button, TouchableHighlight, TouchableOIpacity, etc.). These components are just abstractions where the `useFormSelector(..)` hook is used to access the `submit()` function form the context to be called in the `onPress(..)` event.

It also provides a helper `TextField<T>` component based on the [TextInput](https://reactnative.dev/docs/textinput) foundational component. This component adds a label and error handling and its intention is for users to quickly jump into using simple forms. However, we strongly recommend creating you own [custom field](../core/README.md#custom-fields) abstractions to get better control and customization.

```tsx
import { FormProvider } from "@lynxts/core";
import { SubmitButton, textFieldOf } from "@lynxts/native";
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

const TextField = textFieldOf<Login>();

const SignIn = memo((): ReactElement => {

  const handleSubmit = useCallback((values: Login): void => {
    const { email, password } = values;
    // Use the validated value to sign in!
  }, []);

  return (
    <FormProvider onSubmit={handleSubmit} validation={schema}>
      <TextField name="email" label="Email:" />
      <TextField name="password" label="Password:" />

      <SubmitButton title="Sign In" />
    </FormProvider>
  );
});
```

## API Reference

You can find the complete API refence [here](./docs/README.md) 📚

## Something's missing?

Suggestions are always welcome! Please create an [issue](https://github.com/JoseLion/lynxts/issues/new) describing the request, feature, or bug. We'll try to look into it as soon as possible 🙂

## Contributions

Contributions are very welcome! To do so, please fork this repository and open a Pull Request to the `main` branch.

## License

[MIT License](./LICENSE)
