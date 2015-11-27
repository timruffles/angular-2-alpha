remove_empties | create_placeholders $1

remove_empties() {
  ack -v '^\s*$'
}

create_placeholders() {
  while read f; do touch "$1/${f// /-}.md"; done
}
