const fs = require('fs-extra')
const glob = require('glob')

async function moveFontelloToStorybookPublicFolder(error, files) {
  const fontelloDirectory = files[0]

  try {
    console.log('Moving fontello assets to Storybook public folder')

    await fs.copy(fontelloDirectory, 'packages/react-ds/src/fontello')
    await fs.copy(fontelloDirectory, 'packages/vue-ds/src/fontello')

    console.log('Deleting fontello original folder')

    await fs.remove(fontelloDirectory)

    console.log('Success!')
  } catch (err) {
    console.error(err)
  }
}

;(() => {
  glob('fontello-*', {}, moveFontelloToStorybookPublicFolder)
})()
