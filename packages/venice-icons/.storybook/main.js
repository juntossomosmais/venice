module.exports = {
  stories: ['../../core/**/*.stories.(js|jsx|ts|tsx|mdx)'],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
  ],
  webpackFinal: async config => {
    config.module.rules = [{
      test: /\.md$/,
      use: ['babel-loader', '@mdx-js/loader'],
    }, ...config.module.rules.filter(rule => rule.test.source !== '\\.md$')]

    return config
  },
}
