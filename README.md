# dictation

> dictation exercise for planete ecole

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Build Status](https://travis-ci.org/planete-ecole/connector.svg?branch=master)](https://travis-ci.org/planete-ecole/connector)

## Description

This library is intended to be used in the Planète École project. It enables teachers to create dictation exercises,
a.k.a words or sentences given to the student as audio files. It lets student attempt to find the matching spelling
and give them a mark based on their results.

## Development

Run rollup to watch the `src/` module and automatically recompile it into `dist/` whenever you make changes.

```bash
yarn start # runs rollup with watch flag
```

Run the `example/` create-react-app that's linked to the local version of the module.

```bash
# (in another tab)
cd example
yarn start # runs create-react-app dev server
```

## Usage

On the example component, use the exercise sample or create your own using the teacher component and save it to
see it injected into the student component

## License

UNLICENSED © [planete-ecole](https://github.com/planete-ecole)
