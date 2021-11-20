#!/bin/bash

#download node and npm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install v16.10.0
npm install -g yarn
yarn add vue-cli

#create our working directory if it doesnt exist
DIR="/home/ec2-user/CSE6242PROJECT"
if [ -d "$DIR" ]; then
  echo "${DIR} exists"
  rm -rf ${DIR}
  mkdir ${DIR}
else
  echo "Creating ${DIR} directory"
  mkdir ${DIR}
fi