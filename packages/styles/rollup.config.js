import autoprefixer from 'autoprefixer'
import postcss from 'rollup-plugin-postcss'

export default {
  input: 'global/index.scss',
  output: [
    {
      file: '../react-ds/dist/styles.css',
      format: 'es',
    },
    {
      file: '../vue-ds/dist/styles.css',
      format: 'es',
    },
  ],
  plugins: [
    postcss({
      extract: true,
      modules: false,
      use: ['sass'],
      plugins: [autoprefixer()],
    }),
  ],
}
