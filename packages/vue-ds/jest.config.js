const base = require('../../jest.config.js')

module.exports = {
  ...base,
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  testMatch: ['<rootDir>/src/**/*.(spec|test).(tsx|jsx)']
}
