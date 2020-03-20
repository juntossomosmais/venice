module.exports = {
	env: {
		browser: true,
		node: true,
		es6: true,
		jest: true,
		jasmine: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2019,
		sourceType: 'module',
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.vue', 'ts', 'tsx', 'mdx'],
			},
		},
	},
	extends: [
		'eslint:recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	plugins: ['prettier', 'jest', 'import', '@typescript-eslint'],
	rules: {
		'prettier/prettier': ['error'],
		'@typescript-eslint/explicit-function-return-type': 'off',
		'import/no-unresolved': 'off',
		'import/order': [
			'error',
			{
				groups: [
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'index',
				],
				'newlines-between': 'always',
				alphabetize: { order: 'asc', caseInsensitive: true },
				pathGroups: [
					{
						pattern: 'react',
						group: 'external',
						position: 'before',
					},
				],
				pathGroupsExcludedImportTypes: ['react'],
			},
		],
	},
}
