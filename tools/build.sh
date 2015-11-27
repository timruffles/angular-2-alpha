#!/bin/bash
#
# builds a slide-deck from input slidedown
#
# usage:
#
#    ./tools/build.sh < cat slides/*.md > index.html

set -e

compiled=$(node4 tools/build.js)

cat src/templates/header.html <(echo "$compiled") src/templates/footer.html


