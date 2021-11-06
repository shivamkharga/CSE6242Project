# cse6242project

## Environment set up
* [Node.js](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/)
* [VSCode](https://code.visualstudio.com/)
* [(Optional) Vue CLI](https://cli.vuejs.org/guide/installation.html)
* A web browser (Internet Explorer not supported)

Be sure to install all workspace recommended VSCode extensions that are listed in ./goldberg/.vscode/extenstions.json.

## VSCode
[VSCode](https://code.visualstudio.com/) has been configured via the workspace settings to autoformat code on file save by using the ESLint, Prettier, and Vetur extensions. This feature should become available one all workspace recommened extensions have been installed and VScode has been restarted.

## Node.js
[Node.js](https://nodejs.org/en/) is a dependency for our JS package manager, [Yarn](https://yarnpkg.com/). It is also used to spin up our development web server.

## Installation instructions
Once Node is installed on your system, run the following commands:

```
node -v
npm -v

npm install --global yarn
yarn --version
```

Once the commands have been successfully executed, navigate to the goldberg root project directory where you should find a package.json file.

## Project setup
This command is used to build the project dependecies. Version control is managed by package.json and yarn.lock. Dependences live in the node_modules file.

```
yarn install
```

### Compiles and hot-reloads for development
This command is used to run the application in a development environment via localhost.

```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
