# Babel 7 - TypeScript - Mocha template

## Create from scratch

The only requirement is Node.js

```bash
npm i -g yarn
yarn init -y
yarn add --dev typescript
```

## Babel 7 and TypeScript configuration

> According to [TypeScript-Babel-Starter](https://github.com/Microsoft/TypeScript-Babel-Starter)

First initialize TypeScript configuration

```bash
yarn tsc --init --declaration --allowSyntheticDefaultImports --target esnext --outDir lib
```

This configuration file will be used by default. For instance, type checking inside VSCode.
For build stage create another configuration file named `tsconfig.build.json`. It will extend the default configuration file and specify additional `include` option:

```json
{
  "extends": "./tsconfig.json",
  "include": ["src/index.ts"]
}
```

Install Babel 7 dependencies and related TypeSccript presets with plugins

```bash
yarn add --dev @babel/core @babel/cli @babel/preset-env
yarn add --dev @babel/preset-typescript
yarn add --dev @babel/plugin-proposal-class-properties
yarn add --dev @babel/plugin-proposal-object-rest-spread
```

and configure related scripts:

```json
{
  "build": "yarn build:js && yarn build:types",
  "build:js": "babel src --out-dir lib --extensions '.ts'",
  "build:types": "tsc --emitDeclarationOnly -p tsconfig.build.json",
  "type-check": "tsc --noEmit",
  "type-check:watch": "yarn type-check --watch"
}
```

## Confgure Mocha

First install Mocha and Chai dependencies along with TypeScript types:

```bash
yarn add --dev mocha chai @types/mocha @types/chai
```

Then install a workaround for this [issue](https://github.com/babel/babel/pull/6027):

```bash
yarn add --dev @babel/register
yarn add --dev babel-register-ts
```

and configure related `test` script:

```json
{
  "test": "mocha -r babel-register-ts test/**/*.ts"
}
```

All the tests are located in `test` folder and can be executed by:

```bash
yarn test
```
