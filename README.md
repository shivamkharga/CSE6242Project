# Procrastinators: Recipe Recommendations

## DESCRIPTION
 A good recipe recommendation system that takes what a user is familiar with and suggests new recipes a few degrees removed can encourage people to try new things without overwhelming them with something new. This app utilizes the existing data for users, and builds a recipe network graph of recomendations for each user using Collaborative filtering and the similar recipes for each recipe using the Content Based Filtering.
## INSTALLATION
* [Node.js](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/)
* [VSCode](https://code.visualstudio.com/)
* [(Optional) Vue CLI](https://cli.vuejs.org/guide/installation.html)
* A web browser (Internet Explorer not supported)
* [Python 3](https://www.python.org/)
* Python dependencies: pip, pandas, numpy, scikit-learn

Please install python-pip and the following dependencies using pip. For RedHat Linux based systems use the commands below:
```
RedHat Linux: sudo yum -y install python-pip
Unix / Ubuntu / Kali : sudo apt install python3-pip
Windows: python get-pip.py (Make sure you have python installed on pc and added to path variable)


pip3 install numpy
pip3 install pandas
pip3 install -U scikit-learn
```

Be sure to install all workspace recommended VSCode extensions that are listed in ./CSE6242Project/.vscode/extenstions.json.

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
This command is used to run the frontend application only in a development environment via localhost.

```
yarn serve
```

To run the backend and the frontend application simultaneously, run 

```
yarn dev
```

This will run the backend api at localhost:80 and the frontend api at localhost:8080

### Compiles and minifies for production
```
yarn build
```

### Run your backend unit tests
```
yarn test
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

### run backend
```
node server.js
```

### Execution
```
yarn run dev
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
