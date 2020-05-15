<h1 align="center">venice-react 🎨</h1>

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
