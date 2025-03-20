/*
When you want using:
  Groups

Use Extension Code Runner
to test your code in VS Code terminal
*/

let text1 = `Jose Simon is very funny... hahahahaha`;
console.log(text1.match(/(ha)/g)); // g to get all references
console.log(text1.match(/(ha)+/g)); // quantifier +
/*
results:
[ 'ha', 'ha', 'ha', 'ha', 'ha' ]
[ 'hahahahaha' ]
*/

let text2 = `http://www.site.info www.school.ninja.br google.com.ag`;
console.log(text2.match(/(http:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g));
/*
explanation:
  (http:\/\/)?   ==> make http:// an optional group
  (www\.)?       ==> make www an optional group
  \w+\.          ==> for words site or school or google
  \w{2,}         ==> for words info or ninja or com
  (\.\w{2})?     ==> optional group for .info or .br or .ag
results:
  [ 'http://www.site.info', 'www.school.ninja.br', 'google.com.br' ]
*/