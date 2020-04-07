<h1 align="center">venice-react 🎨</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-%3E%3D10-blue.svg" />
  <a href="https://juntossomosmais.github.io/venice/react/" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="license.md" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> UI Components using React

### ✨ [Demo](https://juntossomosmais.github.io/venice/react/)

## Using as lib

### Install

```sh
yarn add @juntossomosmais/venice-react
```

### Usage

```js
import { Foo } from '@juntossomosmais/venice-react'
```

And import the default theme file (or create your own theme):

```js
import '@juntossomosmais/venice-react/themes/default.css'
```

### Theming

You can create your own theme changing some variables in your css `:root`:

```css
:root {
  --space-xxs: 0.4rem;
  --space-xs: 0.8rem;
  --space-sm: 1.6rem;
  --space: 2.4rem;
  --space-md: 3.2rem;
  --space-lg: 4.8rem;
  --space-xlg: 6.4rem;
  --space-xxlg: 9.6rem;

  --font-family: 'Roboto', sans-serif;

  --typography-panel-font: 900 3.8rem/4rem var(--font-family);
  --typography-panel-letter: 0;
  --typography-title-font: 600 2.5rem/2.9rem var(--font-family);
  --typography-title-letter: -0.357143px;
  --typography-subheader-font: 400 1.6rem/1.9rem var(--font-family);
  --typography-subheader-letter: -0.228572px;
  --typography-body-font: 400 1.6rem/1.9rem var(--font-family);
  --typography-body-letter: -0.228572px;
  --typography-body2-font: 400 1.4rem/1.6rem var(--font-family);
  --typography-body2-letter: -0.2px;
  --typography-caption-font: 400 1.2rem/1.4rem var(--font-family);
  --typography-caption-letter: -0.171429px;
  --typography-button-font: 900 1.6rem/1.9rem var(--font-family);
  --typography-button-letter: -0.228572px;

  --default-color: var('some color');
  --default-color-contrast: var('some color');

  --disabled-color: var('some color');
  --disabled-color-contrast: var('some color');

  --primary-color: var('some color');
  --primary-color-contrast: var('some color');

  --secondary-color: var('some color');
  --secondary-color-contrast: var('some color');

  --text-color: var('some color');
}
```

## As develop

Check the [README](../../README.md).
