const fs = require('fs-extra')

async function removeDistributionDirectory() {
  try {
    console.log('Removing distribution folder')

    await fs.remove('/dist')

    console.log('Distribution folder deleted')
  } catch (err) {
    console.error(err)
  }
}

async function copyFontelloConfigurationFile() {
  try {
    console.log('Creating distribution folder')

    await fs.ensureDir('dist')

    console.log('Distribution folder created')

    await fs.copy('config.json', 'dist/config.json')

    console.log('Fontello config file copied to dist folder')
  } catch (err) {
    console.error(err)
  }
}

async function copyInstructionsFile() {
  try {
    console.log('Copying instructions file')

    await fs.copy('README.md', 'dist/README.md')

    console.log('Instructions copied to dist folder')
  } catch (err) {
    console.error(err)
  }
}

;(async () => {
  await removeDistributionDirectory()
  await copyFontelloConfigurationFile()
  await copyInstructionsFile()
})()
