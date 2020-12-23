const base = require('../../jest.config.js')

module.exports = {
  ...base,
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  testMatch: ['<rootDir>/src/**/*.(spec|test).(tsx|jsx)'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.vue',
    '!<rootDir>/node_modules/**',
    '!<rootDir>/src/index.js',
    '!<rootDir>/src/shims-tsx.d.js',
    '!<rootDir>/src/shims-vue.js',
    '!<rootDir>/src/**/icons/*.vue',
  ],
}
