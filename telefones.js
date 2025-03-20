/*
HOW TO TEST this file?
option a) Use extension Code Runner to test your code in VS Code terminal
option b) or use this command to run: node yourfile.js
*/

// ENUNCIADO: PEGAR OS TELEFONES E O DDD QUE ESTEJA CORRETO.

const texto = `
Lista de telefones:
 - (21) 12345-6789
 - (11) 62300-2234
 - 5678-7771
 - (85)3333-7983
 - (1) 4321-1234`; // este número deve retornar sem o ddd, porque o ddd está errado com apenas 1 dígito.

// Correto
// explicação:
// =>PRIMEIRA PARTE, pegar o ddd: (\(\d{2}\)\s?)?
//  ( = início do grupo)
//  \( = pegar o primeiro parêntesis
//  \d{2} = pegar o número que deve ter 2 dígitos
//  \) = pegar o último parêntesis
//  \s? = pegar um espaço, que é opcional pela ?
//  )? = fim do grupo. O ? torna o grupo do ddd opcional, então este grupo do ddd pode vir ou não.
// =>SEGUNDA PARTE, pegar o primeiro conjunto antes do hífen "-": \d{4,5}-
// \d{4,5} = pegar de 4 a 5 dígitos
// - = pegar o hífen
// =>TERCEIRA PARTE, pegar o final do número: \d{4}
// \d{4} = pegar a números finais do telefone.
// 
// (/conteúdo/) = g = buscará todos as partes globalmente quantas partes retornarem, será retornado.
// SAÍDA:
// [
//   '(21) 12345-6789',
//   '(11) 62300-2234',
//   '5678-7771',
//   '(85)3333-7983',
//   '4321-1234'
// ]
console.log(texto.match(/(\(\d{2}\)\s?)?\d{4,5}-\d{4}/g));