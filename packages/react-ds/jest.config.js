const base = require('../../jest.config.js')

module.exports = {
  ...base,
  displayName: 'React DS',
  transformIgnorePatterns: ['node_modules/(?!.*?/es/.*\\.js)'],
  collectCoverageFrom: [
    'src/**/*.{js, jsx, ts, tsx}',
    '!src/index.js',
    '!src/react-app-env.d.ts',
  ],
}
