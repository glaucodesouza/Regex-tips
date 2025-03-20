/*
HOW TO TEST this file?
option a) Use extension Code Runner to test your code in VS Code terminal
option b) or use this command to run: node yourfile.js
*/

const texto = `
Leo é muito legal
Emanuel foi jogar em Sergipe
Bianca é casada com Habib
`;

// Se quiser pegar somente as quebras de linha:
console.log(texto.match(/\n/g));

// Errado:
// pegar linhas inteiras
// \w = qualquer caractere (inclusive quebra de linha \n)
// \1 = usar o retrovisor \1 (que representa o \w) (qualquer caractere)
// porem nao pega quebras de linha, e dará errado.
console.log(texto.match(/^(\w).+\1/gi));

// CORRETO:
// \w = pegar qualquer caractere (inclusive quebra de linha \n)
// \1 = usar o retrovisor \1 (que representa o \w) (qualquer caractere)
// m = pegar linhas inteiras, com multiplas linhas
console.log(texto.match(/^(\w).+\1/gim));

//----------------------------------------------------------------
// ABAIXO, 
// MESMA COISA, mas terminando as linahs com .
//----------------------------------------------------------------
const texto2 = `
Leo é muito legal.
Emanuel foi jogar em Sergipe.
Bianca é casada com Habib.
`;

// Se quiser pegar somente as quebras de linha:
console.log(texto.match(/\n/g));

// Errado:
// pegar linhas inteiras
// \w = qualquer caractere (inclusive quebra de linha \n)
// \1 = usar o retrovisor \1 (que representa o \w) (qualquer caractere)
// porem nao pega quebras de linha, porque nao usa o m=multiline, e dará errado.
console.log(texto2.match(/^(\w).+\1/gi));

// CORRETO:
// \w = pegar qualquer caractere (inclusive quebra de linha \n)
// \1 = usar o retrovisor \1 (que representa o \w) (qualquer caractere)
// m = pegar linhas inteiras, com multiplas linhas
// \. = pegar o ponto final de cada linha <=== AQUI a diferença.
console.log(texto2.match(/^(\w).+\1\./gim));