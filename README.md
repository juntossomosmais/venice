<h1 align="center">venice 🎨</h1>
<p>
  <img alt="Release" src="https://img.shields.io/github/v/release/juntossomosmais/venice" />
  <a href="https://juntossomosmais.github.io/venice" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://github.com/juntossomosmais/venice/graphs/contributors" target="_blank">
    <img alt="Contributors" src="https://img.shields.io/github/contributors/juntossomosmais/venice.svg" />
  </a>
</p>

> Design System of @juntossomosmais

### ✨ [React Version](https://juntossomosmais.github.io/venice/react/) | [Vue Version](https://juntossomosmais.github.io/venice/vue/)

To get more information about individual Design System libs:

- [React](/packages/react-ds#readme)
- [Vue](/packages/vue-ds#readme)

## Commands

### Install

```sh
yarn install
```

### Usage

```sh
yarn start
```

### Build library

```sh
yarn build
```

### Publish library

```sh
yarn publish
```

### Deploy Storybook on GH Pages

```sh
yarn deploy:storybook
```

### Run tests

```sh
yarn test
```

## Overview

This project has the following folders:

### `packages/core`

That contains shareable configs of Storybook, TypeScript interfaces and etc. If you need to share something between project, it need to stay here.

### `packages/styles`

That contains shareable styles of components. The CSS of components always need to stay here, using Sass. So, you can import the file inside your component in each DS.

### React

```sh
import styles from '@venice/styles/components/Button.module.scss'

<button className={styles.btn}></button>
```

### Vue

```vue
<script lang="ts">
import { IButton } from '@venice/core/models'
</script>

<style lang="scss" scoped>
@import '~@venice/styles/components/Button.module.scss';
</style>

<template>
  <button :class="btn"></button>
</template>
```

This project uses Lerna, Yarn Workspaces, TypeScript, Storybook, Sass, CSS Modules, React and Vue.

Maybe you want to read about them:

- [Lerna](https://lerna.js.org/)
- [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)
- [Sass](https://sass-lang.com/)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [React](https://reactjs.org/)
- [Vue](https://vuejs.org/)

This project also uses [Husky](https://github.com/typicode/husky) to prevent commit and push messy and wrong code.

### `packages/react-ds`

The UI Components using React.

All logical of React components, Storybook's presentation and build configs need to stay here.

### `packages/vue-ds`

The UI Components using Vue.

All logical of Vue components, Storybook's presentation and build configs need to stay here.

## Author

👤 **@juntossomosmais**

- Website: https://www.juntossomosmais.com.br
- Github: [@juntossomosmais](https://github.com/juntossomosmais)
- LinkedIn: [@juntos-somos-mais](https://linkedin.com/in/juntos-somos-mais)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/juntossomosmais/venice/issues).

## 📝 License

Copyright © 2020 [@juntossomosmais](https://github.com/juntossomosmais).<br />
This project is [MIT](license.md) licensed.

---

<small>_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_</small>
