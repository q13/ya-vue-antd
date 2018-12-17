#!/bin/bash

mode="ya2" # ya or ya2

if [ "$mode" = "ya" ]
then
  echo "On ya mode";
  node tools/install-deps.js;
  UV_THREADPOOL_SIZE=100 node --max_old_space_size=8192 tools/build.js --app-env=$1 --app-name=$2 --api-domain=$3;
else
  echo "On ya2 mode";
  yarn install;
  # ya2 test .; # 先执行unit testing
  ya2 build . --app-domain $3 --app-name $2 --app-env $1;
fi
