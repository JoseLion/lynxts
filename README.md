[![CI](https://github.com/JoseLion/lynxts/actions/workflows/ci.yml/badge.svg)](https://github.com/JoseLion/lynxts/actions/workflows/ci.yml)
[![Release](https://github.com/JoseLion/lynxts/actions/workflows/release.yml/badge.svg)](https://github.com/JoseLion/lynxts/actions/workflows/release.yml)
[![NPM Core version](https://img.shields.io/npm/v/@lynxts/core?logo=npm&label=core)](https://www.npmjs.com/package/@lynxts/core)
[![NPM Native version](https://img.shields.io/npm/v/@lynxts/native?logo=npm&label=native)](https://www.npmjs.com/package/@lynxts/native)
[![NPM Web version](https://img.shields.io/npm/v/@lynxts/web?logo=npm&label=web)](https://www.npmjs.com/package/@lynxts/web)
[![GitHub Release Date](https://img.shields.io/github/release-date/JoseLion/lynxts)](https://github.com/JoseLion/lynxts/releases)
[![Known Vulnerabilities](https://snyk.io/test/github/JoseLion/lynxts/badge.svg)](https://snyk.io/test/github/JoseLion/lynxts)

<img alt="Lynx.ts Logo" src="https://github.com/JoseLion/lynxts/blob/main/docs/assets/lynxts-logo%40512x512.png" width="128">

# Lynx.ts

TypeScript-first, lightning fast Forms for React.js and React Native.

## How it works

Lynx.ts is a [React Context](https://react.dev/learn/passing-data-deeply-with-context) based Form Provider. However, thanks to the brilliant [use-context-selector](https://github.com/dai-shi/use-context-selector) the re-renders caused by changes in the context are drastically reduced. The `use-context-selector` hook implements [React's RFC context selector](https://github.com/reactjs/rfcs/pull/119) in user land, this way we can specifically select what we need from the context and avoid unnecessary re-renders when unused parts of the context change.

Being a TypeScript-first library, you'll find type-safety on every turn: validation, simple/array/nested fields, form submision, etc. The codebase also follows a [full memoization principle](https://attardi.org/why-we-memo-all-the-things/), which makes Lynx.ts fast and ready for small and big projects.

## Compatibility

Lynx.ts is based on context and hooks, so you'll need a minimun version of `v16.8.0` on React.js. TypeScript is not necessary to use it, it works on plain JavaScript too! However, TS will give you a better dev experience and static check safety, so it's recommended.

## Usage

Lynx.ts is split three packages for convinience:

- **[@lynxts/core](./packages/core/README.md):** Main functionalities, can be used in any kind of React.js environment.
- **[@lynxts/native](./packages/native/README.md):** React Native specific abstractions and helpers.
- **[@lynxts/web](./packages/web/README.md):** DOM specific abstractions and helpers.

Check each package documentation for more details on how to use them.

## Design and next steps

The intention is to keep this library small and simple. So initially, the validation only supports a [Yup](https://github.com/jquense/yup) schemas. However, the intention is to add support for [Zod](https://zod.dev/) moving forward and based user requests. A third option to add custom validators can be implememted if requested too.

Same as with the schema, errors have a single behavior. They are present only if the **field is dirty or the form was submitted**. Adding other behaviors will be based on requests and their use cases.

## Something's missing?

Suggestions are always welcome! Please create an [issue](https://github.com/JoseLion/lynxts/issues/new) describing the request, feature, or bug. We'll try to look into it as soon as possible 🙂

## Contributions

Contributions are very welcome! To do so, please fork this repository and open a Pull Request to the `main` branch.

## License

[MIT License](./LICENSE)
