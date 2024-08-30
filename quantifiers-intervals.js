/*
When you want using:
  Using quantifier {n,m}

Use Extension Code Runner
to test your code in VS Code terminal
*/

let text1 = `O João recebeu 120 milhões apostando 6 9 21 23 45 46.`;

console.log(text1.match(/\d{1,2}/g));
console.log(text1.match(/[0-9]{2}/g));
console.log(text1.match(/\d{1,}/g));
console.log(text1.match(/\w{7}/g)); //aqui não traz milhões, porque a busca parou no õ, não estava na sequência da tabela ascii para o qualificador \w
console.log(text1.match(/[\wõ]{7,}/g)); // então, aqui, adicionamos o õ, para continuar buscando a palavra completa milhões, quando passar pelo õ
/*results
['12', '0',  '6', '9',  '21', '23','45', '46']
[ '12', '21', '23', '45', '46' ]
['120', '6', '9', '21', '23', '45', '46']
[ 'recebeu', 'apostan' ]
[ 'recebeu', 'milhões', 'apostando' ]
*/
