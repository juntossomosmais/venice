const base = require('../../jest.config.js')

module.exports = {
  ...base,
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  testMatch: ['<rootDir>/src/**/*.(spec|test).(tsx|jsx)'],
  collectCoverageFrom: [
    'src/**/*.vue',
    '!node_modules/**',
    '!src/index.ts',
    '!src/shims-tsx.d.ts',
    '!src/shims-vue.ts',
    '!src/**/icons/*.vue',
  ],
}
