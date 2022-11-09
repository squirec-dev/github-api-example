# GitHub API Example

## Contents

- [Quick Start](#quick-start)
- [Getting Started](#getting-started)
- [What I Did](#what-i-did)
- [Next Steps](#next-steps)
- [Finally](#finally)

## Quick Start

| Script | Action |
| --- | --- |
| yarn start | Starts the development server |
| yarn build | Bundles the app into static files for production |
| yarn test | Starts the test runner |

## Getting Started

This project was 

1. Clone app & install npm packages 
```
yarn install
```

2. Run locally!
```
yarn start
```

## What I Did
1. Initial set-up
- I bootstrapped [Create React App](https://github.com/facebook/create-react-app) and set up Typescript, refactoring the template structure to organise content better
- Made sure build & node modules were ignored by git
- I follow commitlint standards for commits to keep it readable
2. Set up SCSS
- Update tsconfig to read the root dir as /src folder
- Install sass and a basic check that was all hooked up correctly
3. Contents
- Set up some basic components to demonstrate structure & semantic HTML
- Breaking down requirements; render a search with a table with test coverage 
4. API call
- Set up .env file & .env.default (secrets in .env, documented in default)
- Tested Github endpoint in Postman
- Implemented an async data fetch on change, and because I'm firing on change rather than button click, I also added debounce so it doesn't fire too often. I used lodash for that because it's a popular, maintained package
5. Set up a basic loader to improve UI during the API call (actual loading spinner is a modified w3Schools one to save time)
6. Styling
- Tried to demonstrate structure/ use of variables

## Next Steps
1. Tasks
- I set page number as a state, the next steps for that would be to drop in a pagination or similar to fire page change and fetch new results
- I added Actions column with link as a quick alternative for getting the repo readme
- I demo'ed unit test approach including use of `each`, I would increase test coverage on each file and mock github api endpoint to test fetch util
2. Typescript
- I've tried to demo TS knowledge and how I organise types
- I would normally have a global types file in the root and keep component types in a file within the component folder, extending global where applicable so that components are modular and can easily be lifted/ moved
- I could've been stricter with types; setting on variables, not using any
3. SCSS
- I could have set up some mixins and demo'ed a more ITCSS approach of style management like I started in my [portfolio](https://github.com/squirec-dev/fd-website/tree/master/styles)
- I focused on structure and functionality, but I tried to demo examples of flex layouts in the Footer component and design principles eg colour scheme accessibility, consistent spacing. 
4. Quality check
- I would normally build on branches to merge into main and include lighthouse summary on PR
- Tools like eslint, tsconfig rules, husky pre-commit hooks, sonarqube to ensure code is checked and to standard before merging in

## Finally

Thanks for taking a look!
