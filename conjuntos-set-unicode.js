/*
When you want using:
  unicode intervals

Use Extension Code Runner
to test your code in VS Code terminal
*/

let text = `áéíóú àèìòù äëïöü ç ãõũ aeiou`;

//printing characteres from unicode ascii table from À to ũ
console.log(text.match(/[À-ũ]/g));
/*results
[
  'á', 'é', 'í', 'ó', 'ú',
  'à', 'è', 'ì', 'ò', 'ù',
  'ä', 'ë', 'ï', 'ö', 'ü',
  'ç', 'ã', 'õ', 'ũ'
]
*/

//printing just characteres a,e,i,o,u from text
console.log(text.match(/[^À-ũ\s]/g));
/*results
[ 'a', 'e', 'i', 'o', 'u' ]
 */
