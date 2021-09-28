#!/bin/bash

#download node and npm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install node
npm install -g @angular/cli

#create our working directory if it doesnt exist
DIR="/home/ec2-user/CSE6242PROJECT"
if [ -d "$DIR" ]; then
  sudo rm -rf ${DIR}

echo "Creating ${DIR} directory"
mkdir ${DIR}
fi
