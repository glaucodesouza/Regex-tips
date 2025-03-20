/*
HOW TO TEST this file?
option a) Use extension Code Runner to test your code in VS Code terminal
option b) node yourfile.js to run
*/

const texto = 'Romario era um excelente jogador\n mas hoje é um político questionador';

console.log(texto.match(/r/gi));
console.log(texto.match(/^r/gi)); // ^ início da linha/string
console.log(texto.match(/r$/gi)); // $ fim de linha/string

// ERRADO
// Está errado porque não está pegando o \n.
// Está quase certo.
console.log(texto.match(/^r.*r$/gi)); // Está quase certo. Mas irá falhar, porque o . não irá pegar o \n. Deste modo, retornará null.

// CORRETO
// Agora funciona porque usamos uma solução chamada dotAll [\s\S]. 
// Usamos aqui o:
// \s que pega espaços. ]
// \S que pega tudo que é diferente de espaços.
console.log(texto.match(/^r[\s\S]*r$/gi)); 