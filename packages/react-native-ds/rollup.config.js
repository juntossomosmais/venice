const pkg = require('./package.json')

const input = './index.js'

const outputOptions = {
  freeze: false,
  esModule: true,
}

export default {
  input,
  output: [
    {
      file: pkg.module,
      format: 'es',
      ...outputOptions,
    },
    {
      file: pkg.main,
      format: 'cjs',
      ...outputOptions,
    },
  ],
}
