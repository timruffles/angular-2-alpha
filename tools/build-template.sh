#!/bin/bash
# builds a slide-deck from a template file
#
# usage:
#
#    ./tools/build.sh path/to/slides < slides.template

main() {
  local slidePath=$1
  remove_empties | to_filenames $slidePath | to_html
}

remove_empties() {
  cat | ack -v '^\s*$'
}

to_filenames() {
  while read f; do cat "$1/${f// /-}.md"; done
}

to_html() {
  ./tools/build.sh 
}

main $@
