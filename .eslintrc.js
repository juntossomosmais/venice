module.exports = {
	env: {
		browser: true,
		node: true,
		es6: true,
		'cypress/globals': true,
	},
	extends: ['eslint:recommended', 'plugin:cypress/recommended', 'prettier'],
	parserOptions: {
		ecmaVersion: 2019,
		sourceType: 'module',
	},
	rules: {
		semi: [2, 'never'],
	},
}
