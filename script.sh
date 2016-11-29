#!/bin/bash

# echo "$workingDir"
workingDir=$(pwd)


# find all js files in the folder

find . -type f -name '*.js' > output.txt
