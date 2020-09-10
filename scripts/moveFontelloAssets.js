const fs = require('fs-extra')
const glob = require('glob')

async function moveFontelloToStorybookPublicFolder(error, files) {
  const fontelloDirectory = files[0]

  try {
    console.log('Moving fontello assets to Storybook public folder')

    await fs.copy(fontelloDirectory, 'packages/react-ds/public')
    await fs.copy(fontelloDirectory, 'packages/vue-ds/public')

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
