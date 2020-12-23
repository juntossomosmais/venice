const base = require('../../jest.config.js')

module.exports = {
  ...base,
  displayName: 'React DS',
  transformIgnorePatterns: ['node_modules/(?!.*?/es/.*\\.js)'],
  testMatch: ['<rootDir>/src/**/*.(spec|test).(tsx|jsx)'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js, jsx, ts, tsx}',
    '!<rootDir>/node_modules/**',
    '!<rootDir>/src/index.js',
    '!<rootDir>/src/react-app-env.d.ts',
  ],
}
