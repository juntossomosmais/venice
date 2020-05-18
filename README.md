<h1 align="center">Venice Design System 🎨</h1>
<p align="center">
  <img alt="Build" src="https://img.shields.io/github/workflow/status/juntossomosmais/venice/Node.js CI" />
  <a href="https://github.com/juntossomosmais/venice/releases">
    <img alt="Release" src="https://img.shields.io/github/package-json/v/juntossomosmais/venice" />
  </a>
  <a href="https://juntossomosmais.github.io/venice" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://lerna.js.org/">
    <img src="https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg" alt="Maintained with Lerna" />
  </a>
  <a href="https://github.com/juntossomosmais/venice/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-Apache--2.0-blue.svg" alt="Venice is released under the Apache-2.0 license" />
  </a>
  <a href="https://github.com/juntossomosmais/venice/graphs/contributors" target="_blank">
    <img alt="Contributors" src="https://img.shields.io/github/contributors/juntossomosmais/venice.svg" />
  </a>
</p>

<h3 align="center">
  <a href="https://juntossomosmais.github.io/venice/react/">React Version</a> | <a href="https://juntossomosmais.github.io/venice/vue/" target="_blank">Vue Version</a>
</h4>

> Design System of @juntossomosmais

Venice is a Design System built with React and Vue.

It's using a CSS Variables to make easy to share variables across the projects, regardless of whether project are using Sass, Styled Components, Stylus, Emotion or whatever.

!important, as it's an internal design system, we don't accept suggestions to change or add new components.

## Stack

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

## Usage

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

## Commands

#### Install

```sh
yarn install
```

#### Usage

```sh
yarn start
```

#### Build library

```sh
yarn build
```

#### Publish library

```sh
yarn publish
```

#### Deploy Storybook on GH Pages

```sh
yarn deploy:storybook
```

#### Run tests

```sh
yarn test
```

## Overview

This project has the following folders:

#### `packages/core`

That contains shareable configs of Storybook, TypeScript interfaces and etc. If you need to share something between project, it need to stay here.

#### `packages/styles`

That contains shareable styles of components. The CSS of components always need to stay here, using Sass. So, you can import the file inside your component in each DS.

#### `packages/react-ds`

The UI Components using React.

All logical of React components, Storybook's presentation and build configs need to stay here.

#### `packages/vue-ds`

The UI Components using Vue.

All logical of Vue components, Storybook's presentation and build configs need to stay here.

## Author

👤 **@juntossomosmais**

- Website: https://www.juntossomosmais.com.br
- Github: [@juntossomosmais](https://github.com/juntossomosmais)
- LinkedIn: [@juntos-somos-mais](https://linkedin.com/in/juntos-somos-mais)
- Medium: https://medium.com/juntos-somos-mais

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/juntossomosmais/venice/issues).

## 📝 License

Copyright © 2020 [@juntossomosmais](https://github.com/juntossomosmais)

---

<small>_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_</small>
