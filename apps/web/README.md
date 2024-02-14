## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses the Next.JS [App router](https://nextjs.org/docs/app) in the `app` directory for [Pages](https://nextjs.org/docs/app/api-reference/file-conventions/page) and [API Routes](https://nextjs.org/docs/app/api-reference/file-conventions/route).

[Jotai](https://jotai.org/) is used for state management.

## Project Structure

This project is organized into the following structure:

-   `.storybook`: Storybook configuration
-   `app`: [App router](https://nextjs.org/docs/app) folder for [Pages](https://nextjs.org/docs/app/api-reference/file-conventions/page) and [API Routes](https://nextjs.org/docs/app/api-reference/file-conventions/route)
-   `components`: React.JS Components
-   `public`: Static web files
-   `storage`: Jotai Atom definitions
-   `stories`: [Storybook](https://storybook.js.org/) stories
-   `ui`: Reusable React.JS components. Should be extracted to its own `package` in the monorepo in the future.
