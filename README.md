This repository demonstrates how to use [Desmos](https://www.desmos.com/api/v1.6/docs/) inside an [interactive video](https://ractive-player.org/).

## Setup

First, you will need to have [Node](https://nodejs.org/en/) installed. Once you do, clone this repository and run the following command:

```
npm install
webpack
```

Then open `index.html` in your browser.

## Editing

The files are written in TypeScript, so you will need to run webpack in order to compile them to Javascript that the browser can understand.

To compile in **development mode**:

```
webpack --watch
```

To compile in **production mode**:

```
NODE_ENV=webpack --watch
```

In the code you will notice imports from a "magic" directory `@env`. This gets mapped to either `src/development` or `src/production` depending on which mode you are using.

The development mode includes recording controls and prompts to read from. Note that you can only record audio when accessing the page over HTTPS, so you will need to upload this directory to a server in order to record.

## Documentation

https://www.desmos.com/api/v1.6/docs/

https://github.com/ysulyma/desmos-react

https://ractive-player.org/docs/
