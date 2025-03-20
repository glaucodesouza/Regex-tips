//explicação:
// \s= space
// \t= tab
// \n= Quebra de linha

const texto = `
ca	r
r	o s!
`;

console.log(texto.match(/ca\tr\nr\to\ss!/));
// Output: ["ca r\nr o s!"]
