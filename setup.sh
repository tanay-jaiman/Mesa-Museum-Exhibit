#!/bin/bash

echo "initializing the package and resolving dependencies"

dependencies="react react-dom nodemon express react-scripts"
npm init -y
npm i $(dependencies)

echo "" 
echo "at this point, you should have package.json, add the next line anywhere inside the curly braces"
echo "" 

echo "\"type\" : \"module\""
echo "" 

echo "you're all set! use 'chmod +x ./start.sh' to make the script an executable and run it to start the server"