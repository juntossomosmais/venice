export const TypeScriptLoader = {
	test: /\.(ts|tsx)$/,
	use: [
		{
			loader: require.resolve('awesome-typescript-loader'),
		},
	],
}
