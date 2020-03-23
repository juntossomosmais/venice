const addonDocsWithVue = {
  name: '@storybook/addon-docs',
  options: {
    babelOptions: {
      presets: [
        [
          '@vue/cli-plugin-babel/preset',
          {
            jsx: false,
          },
        ],
      ],
    },
  },
}

module.exports = {
  stories: ['../src/**/*.stories.(js|jsx|ts|tsx|mdx)'],
  addons: [
    'storybook-addon-themes',
    '@storybook/addon-knobs/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-notes/register',
    '@storybook/addon-viewport/register',
    addonDocsWithVue,
  ],
}
