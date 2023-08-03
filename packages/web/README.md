# Web

[![CI](https://github.com/JoseLion/lynxts/actions/workflows/ci.yml/badge.svg)](https://github.com/JoseLion/lynxts/actions/workflows/ci.yml) [![Release](https://github.com/JoseLion/lynxts/actions/workflows/release.yml/badge.svg)](https://github.com/JoseLion/lynxts/actions/workflows/release.yml) [![NPM version](https://img.shields.io/npm/v/@lynxts/web?logo=npm)](https://www.npmjs.com/package/@lynxts/web) [![NPM bundle size](https://img.shields.io/bundlephobia/min/@lynxts/web)](https://www.npmjs.com/package/@lynxts/web) [![NPM downloads](https://img.shields.io/npm/dm/@lynxts/web)](https://www.npmjs.com/package/@lynxts/web) [![NPM license](https://img.shields.io/npm/l/@lynxts/web)](LICENSE/) [![GitHub Release Date](https://img.shields.io/github/release-date/JoseLion/lynxts)](https://github.com/JoseLion/lynxts/releases) [![Known Vulnerabilities](https://snyk.io/test/github/JoseLion/lynxts/badge.svg)](https://snyk.io/test/github/JoseLion/lynxts)

<img alt="Lynx.ts Logo" src="https://github.com/JoseLion/lynxts/blob/main/docs/assets/lynxts-logo%40512x512.png?raw=true" width="128">

## Lynx.ts Web

TypeScript-first, lightning fast Forms for React.js and React Native. The `@lynxts/web` package provides abstractions and helpers specifically for React DOM, which makes working with forms simpler, more maintainable, and intuitive.

### Requirements

* [**lynxts/core**](../core/)**:** Same as the `@lynxts/web` version used
* [**React.js**](https://react.dev/)**:** >=16.8.0
* [**React DOM**](https://www.npmjs.com/package/react-dom)**:** >=16.8.0
* [**Yup**](https://github.com/jquense/yup)**:** >=1.0.0

### Install

Using Yarn:

```
yarn add @lynxts/core @lynxts/web react react-dom yup
```

Using NPM:

```
npm i @lynxts/core @lynxts/web react react-dom yup
```

### Usage

To make using forms in React.js web applications as simple as possible, `@lynxts/web` provides a `<Form>` React component, which is nothing more than a

[element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) wrapped around Lynx.ts `<FormProvider>`. This component accepts all the attributes of a `<form>` plus all the `<FormProvider>` props which you can use to set up the context. With this approach, your forms will not only be semantically correct, but you can also use aor an  to trigger the submit action.

Additionally, this package provides helper components of the basic form elements: `<input>`, `<select>`, and `<textarea>`. These components adds a `<label>` and error handling and their intention is for users to quickly jump into using simple forms. However, we strongly recommend creating you own [custom field](../core/#custom-fields) abstractions to get better control and customization.

```tsx
import { FormProvider } from "@lynxts/core";
import { Form, inputOf } from "@lynxts/web";
import { ReactElement, memo, useCallback } from "react";
import { ObjectSchema, object, string } from "yup";

interface Login {
  email: string;
  password: string;
}

const Input = inputOf<Login>();

const schema: ObjectSchema<Login> = object({
  email: string().email().required(),
  password: string().required(),
});

const SignIn = memo((): ReactElement => {
  const handleSubmit = useCallback((values: Login): void => {
    const { email, password } = values;

    // Use the validated value to sign in!
  }, []);

  return (
    <Form onSubmit={handleSubmit} validation={schema}>
      <Input name="email" type="email" label="Email:" />
      <Input name="password" type="password" label="Passwrod:" />
      
      <button type="submit">{"SignIn"}</button>
    </FormProvider>
  );
});
```

### Something's missing?

Suggestions are always welcome! Please create an [issue](https://github.com/JoseLion/lynxts/issues/new) describing the request, feature, or bug. We'll try to look into it as soon as possible 🙂

### Contributions

Contributions are very welcome! To do so, please fork this repository and open a Pull Request to the `main` branch.

### License

[MIT License](LICENSE/)
