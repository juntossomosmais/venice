module.exports = {
  stories: [
    '../../core/**/*.stories.(js|jsx|ts|tsx|mdx)',
    '../src/**/*.stories.(js|jsx|ts|tsx|mdx)'
  ],
  addons: [
    'storybook-addon-themes',
    '@storybook/addon-knobs/register',
    '@storybook/addon-a11y/register',
    //'@storybook/addon-notes/register',
    '@storybook/addon-viewport/register',
    {
      name: '@storybook/addon-docs',
      options: {
        babelOptions: {
          presets: [
            [
              '@vue/cli-plugin-babel/preset',
              {
                jsx: false
              }
            ],
          ],
        },
      },
    }
  ],
  webpackFinal: async config => {
    config.module.rules = [{
      test: /\.md$/,
      use: ['babel-loader', '@mdx-js/loader'],
    }, ...config.module.rules.filter(rule => rule.test.source !== '\\.md$')]

    return config
  },
}
