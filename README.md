# pp-nextjs-with-tailwind

## Stack
- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting started

### System Requirements
- [Node.js 12.16](https://nodejs.org/en/) or later
- MacOS, Windows (including WSL), and Linux are supported

### Setup
- `node --version & npm --version && yarn --version` - Ensures that required packages are installed.
- `yarn install` - Installs the project using [Yarn](https://yarnpkg.com/getting-started/install).

### Commands
- `yarn dev` - Runs next which starts Next.js in development mode.
- `yarn build` - Runs next build which creates an optimized production build of your application. The output displays information about each route.
- `yarn start` - Runs next start which starts a Next.js production server.
- `yarn export` - Runs next export which allows you to export your app to static HTML, which can be run standalone without the need of a Node.js server.

### Dependency management
- `yarn add <package...>` - Installs the “latest” version of the package.
- `yarn remove <package...>` - Removes the package from your direct dependencies updating your package.json and yarn.lock files in the process.
- [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) upgrades your package.json dependencies to the latest versions, ignoring specified versions.

### Preview `next export` output
1. `cd out`
2. `python3 -m http.server` - Runs a HTTP server in a folder.


