const sass = require('node-sass')

module.exports = {
  preprocess: {
    style: async ({ content, attributes }) => {
      if (attributes.type !== 'text/scss') {
        return
      }

      const result = await sass.renderSync({
        data: content,
        sourceMap: 'style.css.map',
        omitSourceMapUrl: true,
      })

      return {
        code: result.css.toString('utf8'),
        map: result.map.toString('utf8'),
      }
    },
  },
}
