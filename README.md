# Vite React Typescript Template

![Build](https://github.com/R35007/vite-react-typescript/actions/workflows/build.yml/badge.svg) ![Lints](https://github.com/R35007/vite-react-typescript/actions/workflows/lints.yml/badge.svg) ![Tests](https://github.com/R35007/vite-react-typescript/actions/workflows/tests.yml/badge.svg) ![Cypress](https://github.com/R35007/vite-react-typescript/actions/workflows/cypress.yml/badge.svg)

> A simple vite react typescript starter template with husky, conventional commit, eslint, stylelint, prettier, sass, tailwindcss, material ui, tanstack routing, redux and saga, vitest and cypress

## [Trying this Online!](https://codesandbox.io/p/github/R35007/vite-react-typescript/main?file=/src/main.tsx)

![image](https://github.com/R35007/vite-react-typescript/assets/23217228/09dfc7f4-bf2f-4b6b-9885-3476099164ff)

## Features

This template setup will include following features.

| ✅  | Feature                                                                                                                                                                           | Branch Name                |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------- |
| ✅  | [Generate Vite](https://vitejs.dev/) + [React](https://react.dev/) + [Typescript](https://www.typescriptlang.org/)                                                                | feature/1/starter          |
| ✅  | [Husky](https://typicode.github.io/husky/)                                                                                                                                        | feature/2/husky            |
| ✅  | [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) + [Commitlint](https://commitlint.js.org/#/) + [Commitizen](https://commitizen-tools.github.io/commitizen/) | feature/3/commitlint       |
| ✅  | [ESLint](https://eslint.org/)                                                                                                                                                     | feature/4/eslint           |
| ✅  | [StyleLint](https://stylelint.io/)                                                                                                                                                | feature/5/stylelint        |
| ✅  | [Prettier format](https://prettier.io/)                                                                                                                                           | feature/6/prettier         |
| ✅  | [Lint Staged](https://github.com/okonet/lint-staged#readme)                                                                                                                       | feature/7/lint-staged      |
| ✅  | [Sass](https://sass-lang.com/) + [Tailwind Css](https://tailwindcss.com/)                                                                                                         | feature/8/tailwindcss      |
| ✅  | [Material UI](https://mui.com/)                                                                                                                                                   | feature/9/material-ui      |
| ✅  | [Tanstack Router](https://tanstack.com/router/v1)                                                                                                                                 | feature/10/tanstack-router |
| ✅  | [Redux](https://redux.js.org/) + [Redux Toolkit](https://redux-toolkit.js.org/)                                                                                                   | feature/11/react-redux     |
| ✅  | [Redux Saga](https://redux-saga.js.org/)                                                                                                                                          | feature/12/react-saga      |
| ✅  | [Vitest](https://vitest.dev/) + [RTL](https://testing-library.com/docs/react-testing-library/intro/)                                                                              | feature/13/vitest          |
| ✅  | [Cypress](https://www.cypress.io/)                                                                                                                                                | feature/14/cypress         |

## Installation

```bash
# For full template
npx degit R35007/vite-react-typescript#main myapp # main branch

# For starter template
npx degit R35007/vite-react-typescript#feature/1/starter myapp # feature/1/starter branch
```

## NPM Scripts

### Vite scripts

```bash
npm run start                 # start development server
npm run dev                   # start development server
npm run build                 # build production bundle to 'dist' directly
npm run preview               # start production server
```

### Lint scripts

```bash
npm run lint:scripts          # check scripts
npm run lint:scripts:fix      # fix scripts
npm run lint:styles           # check styles
npm run lint:styles:fix       # fix styles
npm run format                # check code formatting
npm run format:fix            # fix code formatting
npm run lint:ts               # check types
npm run lint                  # check scripts, check styles, check formats and check types
npm run lint:fix              # fix scripts, fix styles, fix formats and check types
npm run lint:staged           # does npm run lint only for staged files
```

### Test scripts

```bash
npm run test             # run test
npm run test:coverage    # run test with code coverage
npm run cy:open          # open cypress ui
npm run cy:run           # run cypress test in headless mode
npm run cy:run:e2e       # run cypress end 2 end test in headless mode
npm run cy:run:component # run cypress component test in headless mode
```

### Report scripts

```bash
npm run lint:scripts:report   # generate eslint reports in reports/eslint.html
npm run lint:report           # generate eslint reports
```

### Utility scripts

```bash
npm run validate              # check scripts, check styles, check formats, check types and builds the project
npm run validate:fix          # fix scripts, fix styles, fix formats, check types and builds the project
npm run validate:staged       # does npm run lint only for staged files and builds the project
npm run prepare               # create Husky hooks
npm run clean                 # removes node_modules package-lock.json .husky dist reports
npm run uninstall:husky       # uninstall husky and remove .husky folder
npm run uninstall:tailwindcss # uninstall tailwindcss and its related plugins
npm run uninstall:cypress     # uninstall cypress and its related plugins and test files
npm run commit                # cli prompt for conventional commit
```

# License

MIT
