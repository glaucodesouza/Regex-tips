//Desafio, localizar a   b entre 3 espaços.
//apenas 1 vez. Portanto nao precisa usar o /g (busca global)

const texto = "a   b";
console.log(texto.match(/a   b/));
console.log(texto.match(/a\s\s\sb/));
console.log(texto.match(/a\s+b/)); //o + significa quantos espacos ele encontrar, vai servir.
console.log(texto.match(/a {3}b/));
console.log(texto.match(/a\s{3}b/));

//O resultado sera (todas as formas funcionam para este caso do texto acima):
// [ 'a   b', index: 0, input: 'a   b', groups: undefined ]
// [ 'a   b', index: 0, input: 'a   b', groups: undefined ]
// [ 'a   b', index: 0, input: 'a   b', groups: undefined ]
// [ 'a   b', index: 0, input: 'a   b', groups: undefined ]
// [ 'a   b', index: 0, input: 'a   b', groups: undefined ]
