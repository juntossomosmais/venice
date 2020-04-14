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

Fist you need to install it using NPM or Yarn.

#### Yarn

```sh
$ yarn add @juntossomosmais/venice-react
```

#### NPM

```sh
$ npm i @juntossomosmais/venice-react
```

#### CSS

And import the **required** css file in your main application file.

```js
import '@juntossomosmais/venice-react/dist/styles.css'
```

### Most basic example

```js
import React from 'react'
import ReactDOM from 'react-dom'

import { Button } from '@juntossomosmais/venice-react'

function App() {
  return <Button color="primary">Hello!</Button>
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

## As develop

Check the [README](../../README.md).
