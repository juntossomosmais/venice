<h1 align="center">venice-react-native 🎨</h1>

> UI Components using React

## Using as lib

### Install

Fist you need to install it using NPM or Yarn.

#### Yarn

```sh
$ yarn add @juntossomosmais/venice-react-native
```

#### NPM

```sh
$ npm i @juntossomosmais/venice-react-native
```

### Most basic example

```js
import React from 'react'
import { View } from 'react-native'

import { variables } from '@juntossomosmais/venice-react-native'

function App() {
  return (
    <View
      style={{
        backgroundColor: variables['--color-brand-secondary-dark-1'],
      }}
    >
      <Text>Hello World!</Text>
    </View>
  )
}

export default App
```

## As develop

Check the [README](../../README.md).
