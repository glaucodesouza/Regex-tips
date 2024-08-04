//g - busca global, acha a primeira e continua procurando
//i - busca insensitive (case)

// const texto = "Carlos assinou o abaixo-assinado.";
// console.log(texto.match(/C|ab/));
// console.log(texto.match(/C|ab/i)); // busca insentitive case, de C e da literal ab
// console.log(texto.match(/C|ab/gi)); // busca global e insensitive case, de C e da literal ab

// const texto2 = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";
// const regexNove = RegExp("9"); // function para busca 9 dentro
// console.log("Metodos da RegExp...");
// console.log(regexNove.test(texto2)); //chamar function p/ saber se ha 9 dentro do texto
// console.log(regexNove.exec(texto2)); //chamar function p/ saber se ha 9 dentro do texto

const texto2 = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";
const regexLetras = /[a-f]/g;
console.log(texto2.match(regexLetras));
console.log(texto2.search(regexLetras));
console.log(texto2.replace(regexLetras, "Achei"));
console.log(texto2.split(regexLetras));
