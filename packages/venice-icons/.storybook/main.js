module.exports = {
  stories: ['../../core/**/*.stories.(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  webpackFinal: async config => {
    config.module.rules = [{
      test: /\.md$/,
      use: ['babel-loader', '@mdx-js/loader'],
    }, ...config.module.rules.filter(rule => rule.test.source !== '\\.md$')]

    return config
  },
}
