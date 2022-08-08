import cssToJS from 'transform-css-to-js'

import css from './dist/styles.css'
console.log('🚀 ~ file: test.js ~ line 4 ~ css', css)

// const reactNativeCompatibleCSS = cssToJS(result.css.toString('utf-8'), true)
const reactNativeCompatibleCSS = cssToJS(css, true)

export const styles = reactNativeCompatibleCSS
