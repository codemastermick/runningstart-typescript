# `RunningStart`:_Typescript_

[![CircleCI](https://circleci.com/gh/codemastermick/runningstart-typescript/tree/main.svg?style=shield)](https://circleci.com/gh/codemastermick/runningstart-typescript/tree/main)

## What is exactly _is_ `RunningStart`?

`RunningStart` is a set of generators designed for personal use that might be helpful for others to get started quickly. They are all designed to be used with npx, and represent my own personal preferences in toolchain, workflow, file structure, etc. The `RunningStart` generators might not be for everyone, but they _were_ made for me!

## Getting started with `RunningStart`:_Typescript_

Getting `RunningStart`:_Typescript_ installed is easy! Just install it globally and use it to create your next great project. Using it is easy too! Just call the included init script and go through the short questionnaire to get your new project all set up.

```bash
npm i -g runningstart-typescript
npx runningstart-typescript init
```

## Development :construction:

> :warning: Please note that we are a [commitizen](https://www.npmjs.com/package/commitizen) friendly project and we also enforce code style via [eslint](https://eslint.org) and [prettier](https://www.npmjs.com/package/prettierrc). If you do not know what any of this means, just use [Visual Studio Code](https://code.visualstudio.com) as your IDE and it will be handled automatically.

Development is just as easy! Clone the repo, install the dependencies, and run the start script to watch the source files for changes. There is also the `npm run test:watch` script that can be run in another terminal to run the tests in watch mode as well. If using VSC I suggest splitting your terminal and running one in each side.

```bash
git clone https://github.com/codemastermick/runningstart-typescript.git
cd runningstart-typescript
npm i
npm start
```

### Testing and Linting

All code in the main branch has been linted, formatted, and tested prior to being committed. Any code that is not up to standards will not be accepted to the main branch until the issues are corrected.
