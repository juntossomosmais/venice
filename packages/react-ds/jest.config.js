const base = require('../../jest.config.js')

module.exports = {
  ...base,
  displayName: 'React DS',
  transformIgnorePatterns: ['node_modules/(?!.*?/es/.*\\.js)'],
}
