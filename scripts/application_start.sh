#!/bin/bash

#give permission for everything in the express-app directory
sudo chmod -R 777 /home/ec2-user/CSE6242PROJECT

#navigate into our working directory where we have all our github files
cd /home/ec2-user/CSE6242PROJECT

#add npm and node to path
export NVM_DIR="$HOME/.nvm"	
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # loads nvm	
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # loads nvm bash_completion (node is in path now)

#install node modules
nvm install v16.10.0
npm install -g yarn
yarn add vue-cli
yarn install

#start our node app in the background
npm start > app.out.log 2> app.err.log < /dev/null & 