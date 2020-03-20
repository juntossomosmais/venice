module.exports = {
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2019,
		sourceType: 'module',
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	plugins: ['prettier', '@typescript-eslint'],
	rules: {
		'prettier/prettier': ['error'],
		'@typescript-eslint/explicit-function-return-type': 'off',
	},
}
