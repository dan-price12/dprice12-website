# Sandbox

This is my sandbox. It's for me to play around and build things.

## What's inside?

This repo uses [pnpm](https://pnpm.io) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `apps`
  - `web`: a [Next.js](https://nextjs.org/) app
  - `e2e`: a [cypress](https://docs.cypress.io/) project
- `packages`
  - `ui`: a React component library
  - `storybook`: a Storybook workshop
  - `eslint-config-custom`: `eslint` configurations
  - `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Build

To build all apps and packages, run the following command:

```
pnpm run build
```

### Develop

To develop all apps and packages, run the following command:

```
pnpm run dev
```
