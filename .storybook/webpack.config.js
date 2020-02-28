const stylepreprocess = require('../svelte.config')

module.exports = async ({ config, mode }) => {
  let j
  // Find svelteloader from the webpack config
  const svelteloader = config.module.rules.find((r, i) => {
    if (r.loader && r.loader.includes('svelte-loader')) {
      j = i
      return true
    }
  })

  // safely inject preprocess into the config
  config.module.rules[j] = {
    ...svelteloader,
    options: {
      ...svelteloader.options,
      style: stylepreprocess.preprocess.style
    }
  }

  // return the overridden config
  return config
}
