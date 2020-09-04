const fs = require('fs-extra')
const glob = require('glob')

async function moveFontelloToStorybookPublicFolder(error, files) {
  const fontelloDirectory = files[0]

  try {
    console.log('Moving fontello assets to Storybook public folder')

    await fs.move(fontelloDirectory, 'public', { overwrite: true })

    console.log('Success!')
  } catch (err) {
    console.error(err)
  }
}

;(() => {
  glob('fontello-*', {}, moveFontelloToStorybookPublicFolder)
})()
