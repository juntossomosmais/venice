<h1 align="center">venice-icons 🎨</h1>

> Icon fonts used on Juntos Somos Mais applications

## Using as lib

### Install

You can install using NPM or Yarn.

#### Yarn

```sh
$ yarn add @juntossomosmais/venice-icons
```

#### NPM

```sh
$ npm i -S @juntossomosmais/venice-icons
```

### Generating icons assets based on the Fontello configuration

1. Since this is a entirely manual process, make sure you have the `config.json` published from `venice-icons` on the project.
2. Grab the `config.json` and drop it on the [Fontello console](http://fontello.com/) to load the icon library.
3. Click on `Download webfont` button and wait for it.
4. For projects that deals with the DOM, overwriting the following files on the directory should be enough.
    - `jsm-icons.css`
    - `jsm-icons.woff`
    - `jsm-icons.woff2`
5. On mobile applications using `react-native`, use the `config.json` with `react-native-vector-icons` and `.ttf` generated font file.

### Adding new icons
1. Grab the `config.json` and drop it on the [Fontello console](http://fontello.com/) to load the icon library.
2. Drop it the SVG file on the Fontello console and select to add it to the library.
3. Also, store the `.svg` files on the `assets` directory for backup.
3. When you are done, download **only** the `config.json`, overwrite the one in Venice and release a new version.

### Removing icons
1. Grab the `config.json` and drop it on the [Fontello console](http://fontello.com/) to load the icon library.
2. Click on the pencil above the icon you want to delete and click on `Delete glyph` button.
3. When you are done, download **only** the `config.json`, overwrite the one in Venice and release a new version.
