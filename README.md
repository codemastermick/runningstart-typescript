# FeatBuilder

## What is FeatBuilder?

FeatBuilder is a library to assist in the addition of new features to any project, be it a webapp, CLI tool, or even another library!

## Installing FeatBuilder

Getting running with FeatBuilder is easy! Just install it as a development dependency and create a new config file with the included command:

```bash
npm i -D featbuilder
npx featbuilder --init
```

## Configuring FeatBuilder

Configuration is easy too! If you want to add a new feature, you can either call `npx featbuilder add-feature <new-feature-name> <percentage>` to add a new entry to your config file or you can add one manually:

```typescript
// featbuilder.config.json
features: {
  'my-new-feature': {
    percentage: 0.1
  }
}
```

## Using FeatBuilder

Actually using it once you have it all set up is really quite simple. You just import `featbuilder` and check `featbuilder.flagEnabled(<your-new-flag>)` to see which code path you should follow. FeatBuilder abstracts away the complexity of feature flags and allows you to just worry about getting your new features built and shipped quickly.

```typescript
// other imports here
import featbuilder from "featbuilder";
// most of your code
const existingFunction() : number {
    let number = 10;
    if(featbuilder.flagEnabled('tripling')) {
        return number * 3;
    }
    return number * 2;
}
// the rest of your code
```

## Development

Development is easy too! Clone the repo, install the dependencies, and run ts-node-dev to watch the source files for changes. There is also the `npm run test:watch` script that can be run in another terminal to watch the test files for changes as well.

```bash
git clone https://github.com/codemastermick/featbuilder.git
cd featbuilder
npm i
npm start
```

Please note that we are a [commitizen](https://www.npmjs.com/package/commitizen) friendly project and we also enforce code style via [eslint](https://eslint.org) and [prettier](https://www.npmjs.com/package/prettierrc). If you do not know what any of this means, just use [Visual Studio Code](https://code.visualstudio.com) as your IDE and it will be handled automatically.
