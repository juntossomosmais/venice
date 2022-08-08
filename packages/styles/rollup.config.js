import autoprefixer from 'autoprefixer'
import copy from 'rollup-plugin-copy'
import postcss from 'rollup-plugin-postcss'

const reactDist = '../react-ds/dist'
const vueDist = '../vue-ds/dist'
const reactNativeDist = '../react-native-ds/dist'

const resetFile = 'global/reset.css'

export default {
  input: 'global/index.scss',
  output: [
    {
      file: `${reactDist}/styles.css`,
      format: 'es',
    },
    {
      file: `${vueDist}/styles.css`,
      format: 'es',
    },
    {
      file: `${reactNativeDist}/styles.css`,
      format: 'es',
    },
  ],
  plugins: [
    copy({
      targets: [
        { src: resetFile, dest: reactDist },
        { src: resetFile, dest: vueDist },
        { src: resetFile, dest: reactNativeDist },
      ],
    }),
    postcss({
      extract: true,
      modules: false,
      use: ['sass'],
      plugins: [autoprefixer()],
    }),
  ],
}
