import babel from '@rollup/plugin-babel'
import autoprefixer from 'autoprefixer'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import sourceMaps from 'rollup-plugin-sourcemaps'
import typescript from 'rollup-plugin-typescript2'

const pkg = require('./package.json')

const input = 'src/index.ts'
const extensions = ['.ts', '.tsx']

const plugins = [
  typescript({
    tsconfigDefaults: {
      exclude: [
        // all TS test files, regardless whether co-located or in test/ etc
        '**/*.spec.ts',
        '**/*.test.ts',
        '**/*.spec.tsx',
        '**/*.test.tsx',
      ],
      compilerOptions: {
        sourceMap: true,
        declaration: true,
        jsx: 'react',
      },
      tsconfigOverride: {
        compilerOptions: {
          // TS -> esnext, then leave the rest to babel-preset-env
          target: 'esnext',
        },
      },
    },
    typescript: require('typescript'),
  }),
  postcss({
    extract: false,
    modules: true,
    use: ['sass'],
    plugins: [autoprefixer()],
  }),
  resolve({
    mainFields: ['module', 'main', 'browser'],
    extensions: ['.js', '.jsx'],
  }),
  commonjs(),
  sourceMaps(),
  babel({
    extensions,
    babelHelpers: 'runtime',
    include: 'src/**/*',
    exclude: 'node_modules/**',
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          loose: true,
        },
      ],
    ],
    plugins: ['@babel/plugin-transform-runtime'],
  }),
]

const outputOptions = {
  sourcemap: true,
  freeze: false,
  esModule: true,
}

export default {
  input,
  output: [
    {
      file: pkg.module,
      format: 'es',
      ...outputOptions,
    },
    {
      file: pkg.main,
      format: 'cjs',
      ...outputOptions,
    },
  ],
  external: Object.keys(pkg.peerDependencies),
  plugins,
}
