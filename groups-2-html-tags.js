/*
When you want using:
  Groups

Use Extension Code Runner
to test your code in VS Code terminal
*/

let text1 = `<b>Destaque</b><strong>Forte</strong><div>Content</div>`;
console.log(text1.match(/<(\w+)>.*<\/\1>/g)); // g to get all references

/*
explaining regex:
<(\w+)>   => to get <tags>
.*        => to get words/texts between tags
<\/\1>    => to get closing tags </tag> (important: \1 references the group 1, to get group 1 again)

results:
[ '<b>Destaque</b>', '<strong>Forte</strong>', '<div>Content</div>' ]
*/

let text2 = `Lentamente é mente muito lenta.`;
console.log(text2.match(/(lenta)(mente).*\2.*\1\./gi));

// ?: não guarda o valor do grupo usado nele. 
// Então \1 guardou apenas a segundo grupo (mente) como primeiro.
console.log(text2.match(/(?:lenta)(mente).*\1/gi));

console.log(text2.match(/(lenta)(mente)?/gi)); // (mente)? é um grupo com captura opcional


/*
explaining regex:
  (lenta)   ==> first capturing
  (mente)   ==> second capturing
  .*        ==> capturing text ' é '
  \2        ==> represents the second capturing 'mente'
  .*        ==> the rest of text ' muito '
  \1        ==> represents the first capturing 'lenta'
  \.        ==> captures the final point '.'

results:
  [ '<b>Destaque</b>', '<strong>Forte</strong>', '<div>Content</div>' ]
  [ 'Lentamente é mente muito lenta.' ]
  [ 'Lentamente é mente' ]
  [ 'Lentamente', 'lenta' ]
*/

