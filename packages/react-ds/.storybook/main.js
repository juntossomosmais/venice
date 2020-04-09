module.exports = {
  stories: [
    '../../core/**/*.stories.(js|jsx|ts|tsx|mdx)',
    '../src/**/*.stories.(js|jsx|ts|tsx|mdx)'
  ],
  addons: [
    'storybook-addon-themes',
    '@storybook/addon-knobs/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-viewport/register',
    //'@storybook/addon-notes/register',
    '@storybook/preset-create-react-app',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
  ],
}
