# Salient Technology Consulting Website

This repository contains the website code for the main Salient Technology Consulting website. It is setup as a monorepo, using [Turborepo](https://turbo.build/repo). The `web` app is a Next.JS project that uses MaterialUI as the UI Kit. Storybook is setup within the main `web` app.

## What's inside?

This repo uses [pnpm](https://pnpm.io) as a package manager. It includes the following apps/packages:

### Apps and Packages

-   `apps`
    -   `web`: a [Next.JS](https://nextjs.org/) app
    -   `e2e`: a [Cypress](https://docs.cypress.io/) project
-   `packages`
    -   `eslint-config-custom`: `eslint` configurations
    -   `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each app/package uses [TypeScript](https://www.typescriptlang.org/).

### Develop

To develop all apps and packages, run the following command:

```
pnpm dev
```

### Storybook

To run Storybook, run the following command:

```
pnpm storybook
```

### Build

To build all apps and packages, run the following command:

```
pnpm build
```

### Versioning

This project uses [Changesets](https://github.com/changesets/changesets) to manage project versioning. Each Pull Request that modifies an app or package should include a changeset entry file.

### Branching and Release Strategy

-   The [Github flow](https://docs.github.com/en/get-started/using-github/github-flow) is used for making changes.
-   The default branch is named `develop`, and all feature branches should merge into it.
    -   This is considered the Staging environment, and every merge into the `develop` branch will trigger a deployment to the Staging environment.
-   The `main` branch is considered the Production environment, and every merge into it will trigger a deployment to Production.
-   Releases and tags should be applied to the `main` branch.
-   Changesets should be applied prior to merging `develop` into `main`, and tag versions should match the package.json version of the `web` project.

### Pipelines

There are several pipelines used in this project:

-   `ci`: The Continuous Integration pipeline. Runs on every push to Github. Will run lint, build, and test to ensure there are no lint or build errors, and that all Jest tests pass. E2E tests are run separately.
-   `deploy`: There are deployment pipelines for Development, Staging, and Production environments. These will build and deploy the Next.JS project to an Azure Static Web App. Development is only run manually from Github, whereas Staging and Production are triggered by a successful run of the `ci` pipeline for the `develop` and `main` branches, respectively.
-   `e2e`: There are e2e test pipelines for Development, Staging, and Production environments. These will run end-to-end Cypress tests against the live version of the Next.JS app deployed to the relevant environment. These pipelines are triggered by a successful run of the `deploy` pipelines for the matching environment.
-   `release`: This is a pipeline that is run for every successful push into the `develop` branch. It will create a Pull Request with the result of running `changeset version`. When merged, it will increment the package version based on the changesets applied in previous commits.
