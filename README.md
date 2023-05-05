# Vite React Typescript Template

A simple vite react typescript starter template with husky, conventional commit, eslint, stylelint, prettier, sass, tailwindcss, material ui, tanstack routing, redux and saga, vitest and cypress

## [Trying this Online!](https://codesandbox.io/p/github/R35007/vite-react-typescript/main?file=%2FREADME.md)

![image](https://user-images.githubusercontent.com/23217228/235298200-28c7b4a6-0f92-420c-9410-b05d12de8eff.png)

## Features

This template setup will include following features.

| ◼️  | Feature                                | Branch Name                |
| --- | -------------------------------------- | :------------------------- |
| ✅  | Generate Vite + React + Typescript App | feature/1/starter          |
| ✅  | Husky                                  | feature/2/husky            |
| ✅  | Conventional Commit                    | feature/3/commitlint       |
| ✅  | ESLint Airbnb Config and Plugins       | feature/4/eslint           |
| ✅  | StyleLint                              | feature/5/stylelint        |
| ✅  | Prettier format                        | feature/6/prettier         |
| ✅  | Lint Staged                            | feature/7/lint-staged      |
| ✅  | Sass + Tailwind css                    | feature/8/tailwindcss      |
| ◼️  | Material UI                            | feature/9/material-ui      |
| ◼️  | React Router Setup                     | feature/10/tanstack-router |
| ◼️  | Redux + Redux Toolkit                  | feature/11/react-redux     |
| ◼️  | Redux Saga                             | feature/12/react-saga      |
| ◼️  | Vitest + RTL                           | feature/13/vitest          |
| ◼️  | Cypress E2E Testing                    | feature/14/cypress         |

## Installation

```bash
# For full template
npx degit R35007/vite-react-typescript#main myapp # main branch

# For starter template
npx degit R35007/vite-react-typescript#feature/1/starter myapp # feature/1/starter branch
```

## NPM Scripts

```bash
npm run start                 # start development server
npm run dev                   # start development server
npm run build                 # build production bundle to 'dist' directly
npm run preview               # start production server

# Lints
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

# Reports
npm run lint:scripts:report   # generate eslint reports in reports/eslint.html
npm run lint:report           # generate eslint reports

# Utils
npm run validate              # check scripts, check styles, check formats, check types and builds the project
npm run validate:fix          # fix scripts, fix styles, fix formats, check types and builds the project
npm run validate:staged       # does npm run lint only for staged files and builds the project
npm run prepare               # create Husky hooks
npm run clean                 # removes node_modules package-lock.json .husky dist reports
npm run uninstall:husky       # uninstall husky and remove .husky folder
npm run uninstall:tailwindcss # uninstall tailwindcss and its related plugins
npm run commit                # cli prompt for conventional commit
```

# License

MIT
