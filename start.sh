#!/bin/sh
# @Author: ben_cripps
# @Date:   2015-05-19 09:31:48
# @Last Modified by:   ben_cripps
# @Last Modified time: 2015-09-22 20:46:51

echo 'Starting Dev Environment'

nodemon --exec npm run babel-node -- ./server.js dev